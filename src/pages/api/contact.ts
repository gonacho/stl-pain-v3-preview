export const prerender = false;

import type { APIRoute } from 'astro';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request, locals }) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
  };

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers });
  }

  // Honeypot check
  if (body.website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  // Required field validation
  const { firstName, lastName, email, service, message } = body;
  if (!firstName?.trim() || !lastName?.trim()) {
    return new Response(JSON.stringify({ error: 'Name is required' }), { status: 422, headers });
  }
  if (!email?.trim() || !EMAIL_REGEX.test(email.trim())) {
    return new Response(JSON.stringify({ error: 'Valid email is required' }), { status: 422, headers });
  }

  const env = (locals as { runtime?: { env?: Record<string, string> } })?.runtime?.env ?? {};
  const resendApiKey = env.RESEND_API_KEY ?? process.env.RESEND_API_KEY ?? '';

  if (!resendApiKey) {
    // No API key configured — log and return success (dev mode)
    console.log('[Contact Form] No RESEND_API_KEY — dev mode. Submission:', { firstName, lastName, email, service });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  // Send email via Resend
  const emailBody = {
    from: 'noreply@stlpaincenter.com',
    to: 'info@stlpaincenter.com',
    reply_to: email.trim(),
    subject: `New Appointment Request — ${service || 'General Inquiry'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
      <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong> ${message || 'None'}</p>
      <hr/>
      <p style="font-size:12px;color:#666;">
        Please leave a Google review: <a href="https://maps.app.goo.gl/K8r42Uki1xFUEbNa8">St. Louis Pain Center on Google</a>
      </p>
    `,
  };

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(emailBody),
  });

  if (!resendRes.ok) {
    console.error('[Contact Form] Resend error:', await resendRes.text());
    return new Response(JSON.stringify({ error: 'Email delivery failed' }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
};
