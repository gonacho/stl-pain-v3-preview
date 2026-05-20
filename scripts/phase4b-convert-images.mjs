/**
 * Phase 4b Image Conversion Script
 * Converts generated JPG images to WebP and places them at target paths.
 * Run: node scripts/phase4b-convert-images.mjs
 */

import sharp from 'sharp';
import { copyFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT = join(__dirname, '..');
const GEN_DIR = '/Users/nachomini/.paperclip/instances/default/workspaces/3524a16f-2071-49c8-951c-6fea8754df0b/generated_imgs';

// Map: generated filename suffix → target path (relative to project /public/images/)
const MANIFEST = [
  // Category heroes
  ['generated-2026-05-20T11-33-43-609Z-a2opy5.jpg', 'pain-control/pain-control-st-louis-mo-hero.webp'],
  ['generated-2026-05-20T11-34-03-338Z-9i096e.jpg', 'orthopedic/orthopedic-clinic-st-louis-mo-hero.webp'],

  // Service heroes
  ['generated-2026-05-20T11-34-21-869Z-006tvp.jpg', 'pain-control/nerve-blocks-st-louis-mo.webp'],
  ['generated-2026-05-20T11-34-40-738Z-mjqips.jpg', 'pain-control/injection-therapy-st-louis-mo.webp'],
  ['generated-2026-05-20T11-35-30-901Z-pvs9u3.jpg', 'pain-control/kyphoplasty-st-louis-mo.webp'],
  ['generated-2026-05-20T11-36-02-039Z-10hokb.jpg', 'pain-control/medication-management-st-louis-mo.webp'],
  ['generated-2026-05-20T11-36-26-347Z-odytri.jpg', 'weight-loss/medical-weight-loss-st-louis-mo.webp'],
  ['generated-2026-05-20T11-36-53-543Z-51431n.jpg', 'orthopedic/hyaluronic-acid-injections-st-louis-mo.webp'],
  ['generated-2026-05-20T11-37-43-713Z-ciume0.jpg', 'orthopedic/prp-therapy-st-louis-mo.webp'],
  ['generated-2026-05-20T11-38-02-312Z-nhd9gy.jpg', 'orthopedic/regenerative-therapy-st-louis-mo.webp'],
  ['generated-2026-05-20T11-38-25-776Z-61tld2.jpg', 'pain-control/neuromodulation-technique-st-louis-mo.webp'],
  ['generated-2026-05-20T11-38-56-917Z-vma1qn.jpg', 'sports-medicine/physical-therapy-st-louis-mo.webp'],

  // Condition illustrations
  ['generated-2026-05-20T11-39-32-365Z-0f5yq3.jpg', 'conditions/neuropathy-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-40-09-976Z-f5gpml.jpg', 'conditions/diabetic-neuropathy-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-40-34-394Z-jnraq6.jpg', 'conditions/knee-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-40-51-715Z-xoxckx.jpg', 'conditions/joint-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-41-38-376Z-vgp9uk.jpg', 'conditions/back-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-42-02-924Z-46ed2t.jpg', 'conditions/neck-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-42-22-853Z-045t8g.jpg', 'conditions/sciatica-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-42-47-953Z-nye3xb.jpg', 'conditions/chronic-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-43-38-585Z-ps1f5x.jpg', 'conditions/shoulder-pain-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-44-01-347Z-lfzx5l.jpg', 'conditions/arthritis-osteoarthritis-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-44-20-363Z-5enqy3.jpg', 'conditions/fibromyalgia-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-44-40-356Z-wdxucu.jpg', 'conditions/vertigo-vestibular-st-louis-mo-illustration.webp'],
  ['generated-2026-05-20T11-45-14-538Z-ex04vx.jpg', 'conditions/neuropathy-in-feet-st-louis-mo-illustration.webp'],

  // Comparison graphics
  ['generated-2026-05-20T11-45-39-042Z-nb1zi4.jpg', 'compare/prp-therapy-vs-hyaluronic-acid-injections-st-louis-mo.webp'],
  ['generated-2026-05-20T11-46-02-817Z-i53apc.jpg', 'compare/regenerative-therapy-vs-cortisone-st-louis-mo.webp'],
  ['generated-2026-05-20T11-46-27-127Z-4g0oy8.jpg', 'compare/nerve-blocks-vs-medication-st-louis-mo.webp'],
  ['generated-2026-05-20T11-47-12-158Z-a8k3hz.jpg', 'compare/physical-therapy-vs-surgery-back-pain-st-louis-mo.webp'],
  ['generated-2026-05-20T11-47-35-621Z-25miqi.jpg', 'compare/neuromodulation-vs-traditional-neuropathy-st-louis-mo.webp'],

  // Standard pages
  ['generated-2026-05-20T11-47-56-947Z-von38k.jpg', 'new-patients/new-patients-st-louis-mo.webp'],
  ['generated-2026-05-20T11-48-23-061Z-a7dkqh.jpg', 'about/about-st-louis-pain-center.webp'],

  // GBP posts (1:1 square)
  ['generated-2026-05-20T11-49-21-686Z-p22g77.jpg', 'gbp-posts/week-01-neuropathy-awareness.webp'],
  ['generated-2026-05-20T11-49-41-589Z-hrjv5k.jpg', 'gbp-posts/week-02-knee-pain-relief.webp'],
  ['generated-2026-05-20T11-50-00-620Z-kk5hrx.jpg', 'gbp-posts/week-03-prp-therapy-healing.webp'],
  ['generated-2026-05-20T11-50-12-769Z-akxa4z.jpg', 'gbp-posts/week-04-back-pain-desk-workers.webp'],
  ['generated-2026-05-20T11-51-12-986Z-tu5j4p.jpg', 'gbp-posts/week-05-ha-injections-joint-pain.webp'],
  ['generated-2026-05-20T11-51-28-531Z-1iqnxl.jpg', 'gbp-posts/week-06-sciatica-treatment.webp'],
  ['generated-2026-05-20T11-51-41-491Z-wi9w9o.jpg', 'gbp-posts/week-07-physical-therapy-recovery.webp'],
  ['generated-2026-05-20T11-51-59-159Z-rqdszw.jpg', 'gbp-posts/week-08-diabetic-neuropathy.webp'],
  ['generated-2026-05-20T11-52-34-203Z-h24xrt.jpg', 'gbp-posts/week-09-regenerative-therapy.webp'],
  ['generated-2026-05-20T11-52-47-745Z-c5lg11.jpg', 'gbp-posts/week-10-neck-pain-specialist.webp'],
  ['generated-2026-05-20T11-53-09-811Z-mruxx8.jpg', 'gbp-posts/week-11-weight-loss-joint-health.webp'],
  ['generated-2026-05-20T11-53-28-095Z-6w1qxo.jpg', 'gbp-posts/week-12-nerve-blocks-explained.webp'],
];

let passed = 0;
let failed = 0;
const results = [];

for (const [src, relTarget] of MANIFEST) {
  const srcPath = join(GEN_DIR, src);
  const destPath = join(PROJECT, 'public', 'images', relTarget);
  const destDir = dirname(destPath);

  if (!existsSync(srcPath)) {
    console.error(`MISSING source: ${src}`);
    failed++;
    results.push({ src, target: relTarget, status: 'MISSING' });
    continue;
  }

  try {
    await mkdir(destDir, { recursive: true });
    await sharp(srcPath)
      .webp({ quality: 85 })
      .toFile(destPath);
    const { width, height, size } = await sharp(destPath).metadata().then(async m => ({
      width: m.width,
      height: m.height,
      size: (await import('fs')).statSync(destPath).size,
    }));
    console.log(`✓ ${relTarget} (${width}×${height}, ${Math.round(size/1024)}KB)`);
    passed++;
    results.push({ src, target: relTarget, status: 'OK', width, height, sizeKB: Math.round(size/1024) });
  } catch (err) {
    console.error(`✗ ${relTarget}: ${err.message}`);
    failed++;
    results.push({ src, target: relTarget, status: 'ERROR', error: err.message });
  }
}

console.log(`\nDone: ${passed} converted, ${failed} failed`);
if (failed > 0) process.exit(1);
