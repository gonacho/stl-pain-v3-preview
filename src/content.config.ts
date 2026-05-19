import { z, defineCollection } from 'astro:content';

const dateField = z.coerce.date();

const basePageFields = {
  title: z.string(),
  description: z.string(),
  publishDate: dateField,
  lastEdited: dateField,
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),
};

const servicePageFields = {
  ...basePageFields,
  categorySlug: z.string(),
  categoryName: z.string(),
  h1: z.string(),
  indications: z.array(z.string()).optional().default([]),
  testimonials: z.array(z.object({
    author: z.string(),
    date: dateField,
    rating: z.number().int().min(1).max(5),
    text: z.string(),
    mentions_target: z.string(),
    schema_binding: z.enum(['service-page', 'localbusiness-homepage', 'therapeuticprocedure']),
  })).optional().default([]),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional().default([]),
  schemaType: z.enum(['TherapeuticProcedure', 'MedicalProcedure']).default('TherapeuticProcedure'),
  institutional_anchors: z.array(z.object({
    name: z.string(),
    visible_phrasing: z.string(),
    section_placement: z.enum(['hero_subheadline', 'location_paragraph', 'trust_block']),
  })).optional().default([]),
};

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    ...basePageFields,
    h1: z.string(),
    categorySlug: z.string(),
    services: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object(servicePageFields),
});

const conditions = defineCollection({
  type: 'content',
  schema: z.object({
    ...basePageFields,
    h1: z.string(),
    conditionSlug: z.string(),
    treatment_services: z.array(z.string()).optional().default([]),
    causes: z.array(z.string()).optional().default([]),
    symptoms: z.array(z.string()).optional().default([]),
    testimonials: z.array(z.object({
      author: z.string(),
      date: dateField,
      rating: z.number().int().min(1).max(5),
      text: z.string(),
      mentions_target: z.string(),
      schema_binding: z.enum(['service-page', 'localbusiness-homepage', 'therapeuticprocedure']),
    })).optional().default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),
    institutional_anchors: z.array(z.object({
      name: z.string(),
      visible_phrasing: z.string(),
      section_placement: z.enum(['hero_subheadline', 'location_paragraph', 'trust_block']),
    })).optional().default([]),
  }),
});

const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    ...basePageFields,
    h1: z.string(),
    comparisonSlug: z.string(),
    option_a: z.object({ name: z.string(), serviceSlug: z.string().nullable().optional() }),
    option_b: z.object({ name: z.string(), serviceSlug: z.string().nullable().optional() }),
    related_conditions: z.array(z.string()).optional().default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    ...basePageFields,
    h1: z.string(),
    pageSlug: z.string().optional(),
    accepted_insurances: z.array(z.string()).optional().default([]),
    featured_conditions: z.array(z.string()).optional().default([]),
    testimonials: z.array(z.object({
      author: z.string(),
      date: dateField,
      rating: z.number().int().min(1).max(5),
      text: z.string(),
      mentions_target: z.string(),
      schema_binding: z.enum(['service-page', 'localbusiness-homepage', 'therapeuticprocedure']),
    })).optional().default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),
    institutional_anchors: z.array(z.object({
      name: z.string(),
      visible_phrasing: z.string(),
      section_placement: z.enum(['hero_subheadline', 'location_paragraph', 'trust_block']),
    })).optional().default([]),
  }),
});

export const collections = { categories, services, conditions, comparisons, pages };
