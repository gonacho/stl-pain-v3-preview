/**
 * fix-image-paths.mjs
 * Phase 5: Fix heroImage paths in content files to point to correct subdirectories.
 * Run: node scripts/fix-image-paths.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const CONTENT = join(ROOT, 'src/content');

function fix(filePath, oldVal, newVal) {
  const src = readFileSync(filePath, 'utf8');
  if (!src.includes(oldVal)) {
    console.log(`  SKIP (not found): ${oldVal} in ${filePath}`);
    return;
  }
  writeFileSync(filePath, src.replace(oldVal, newVal), 'utf8');
  console.log(`  FIXED: ${oldVal} → ${newVal}`);
}

function addHeroImage(filePath, heroImage, heroImageAlt) {
  const src = readFileSync(filePath, 'utf8');
  if (src.includes('heroImage:')) {
    console.log(`  SKIP (already has heroImage): ${filePath}`);
    return;
  }
  // Insert after lastEdited line
  const updated = src.replace(
    /(lastEdited: [^\n]+\n)/,
    `$1heroImage: ${heroImage}\nheroImageAlt: ${heroImageAlt}\n`
  );
  writeFileSync(filePath, updated, 'utf8');
  console.log(`  ADDED heroImage: ${heroImage}`);
}

// ── Services: pain-control ────────────────────────────────────────────────────
console.log('\n[pain-control services]');
const pcServices = [
  ['injection-therapy', 'injection-therapy'],
  ['kyphoplasty', 'kyphoplasty'],
  ['medication-management', 'medication-management'],
  ['nerve-blocks', 'nerve-blocks'],
  ['neuromodulation-technique', 'neuromodulation-technique'],
  ['neuropathy-treatment', 'neuropathy-treatment'],
];
for (const [file, img] of pcServices) {
  fix(
    join(CONTENT, 'services/pain-control', `${file}.md`),
    `/images/${img}-st-louis-mo.webp`,
    `/images/pain-control/${img}-st-louis-mo.webp`
  );
}

// ── Services: orthopedic ─────────────────────────────────────────────────────
console.log('\n[orthopedic services]');
const orthoServices = [
  ['hyaluronic-acid-injections', 'hyaluronic-acid-injections'],
  ['prp-therapy', 'prp-therapy'],
  ['regenerative-therapy', 'regenerative-therapy'],
];
for (const [file, img] of orthoServices) {
  fix(
    join(CONTENT, 'services/orthopedic', `${file}.md`),
    `/images/${img}-st-louis-mo.webp`,
    `/images/orthopedic/${img}-st-louis-mo.webp`
  );
}

// ── Services: standalone ─────────────────────────────────────────────────────
console.log('\n[standalone services]');
fix(
  join(CONTENT, 'services/standalone/weight-loss.md'),
  '/images/weight-loss-st-louis-mo.webp',
  '/images/weight-loss/medical-weight-loss-st-louis-mo.webp'
);
fix(
  join(CONTENT, 'services/standalone/sports-medicine.md'),
  '/images/sports-medicine-st-louis-mo.webp',
  '/images/sports-medicine/physical-therapy-st-louis-mo.webp'
);

// ── Conditions ───────────────────────────────────────────────────────────────
console.log('\n[conditions]');
const conditions = [
  ['arthritis-osteoarthritis', 'arthritis-osteoarthritis-st-louis-mo-illustration'],
  ['back-pain', 'back-pain-st-louis-mo-illustration'],
  ['chronic-pain', 'chronic-pain-st-louis-mo-illustration'],
  ['diabetic-neuropathy', 'diabetic-neuropathy-st-louis-mo-illustration'],
  ['fibromyalgia', 'fibromyalgia-st-louis-mo-illustration'],
  ['joint-pain', 'joint-pain-st-louis-mo-illustration'],
  ['knee-pain', 'knee-pain-st-louis-mo'],           // no -illustration suffix
  ['neck-pain', 'neck-pain-st-louis-mo-illustration'],
  ['neuropathy-in-feet', 'neuropathy-in-feet-st-louis-mo-illustration'],
  ['neuropathy', 'neuropathy-st-louis-mo-illustration'],
  ['sciatica', 'sciatica-st-louis-mo-illustration'],
  ['shoulder-pain', 'shoulder-pain-st-louis-mo-illustration'],
];
for (const [file, newImg] of conditions) {
  const baseName = file === 'knee-pain' ? 'knee-pain-st-louis-mo' : `${file}-st-louis-mo`;
  fix(
    join(CONTENT, 'conditions', `${file}.md`),
    `/images/${baseName}.webp`,
    `/images/conditions/${newImg}.webp`
  );
}
// vertigo special case: file is vertigo-vestibular-disorders, image key is different
fix(
  join(CONTENT, 'conditions/vertigo-vestibular-disorders.md'),
  '/images/vertigo-vestibular-disorders-st-louis-mo.webp',
  '/images/conditions/vertigo-vestibular-st-louis-mo-illustration.webp'
);

// ── Comparisons: add heroImage ───────────────────────────────────────────────
console.log('\n[comparisons - adding heroImage]');
addHeroImage(
  join(CONTENT, 'comparisons/prp-therapy-vs-hyaluronic-acid-injections.md'),
  '/images/compare/prp-therapy-vs-hyaluronic-acid-injections-st-louis-mo.webp',
  'PRP Therapy vs Hyaluronic Acid Injections at St. Louis Pain Center'
);
addHeroImage(
  join(CONTENT, 'comparisons/regenerative-therapy-vs-cortisone-injections.md'),
  '/images/compare/regenerative-therapy-vs-cortisone-st-louis-mo.webp',
  'Regenerative Therapy vs Cortisone Injections at St. Louis Pain Center'
);
addHeroImage(
  join(CONTENT, 'comparisons/nerve-blocks-vs-medication-management.md'),
  '/images/compare/nerve-blocks-vs-medication-st-louis-mo.webp',
  'Nerve Blocks vs Medication Management at St. Louis Pain Center'
);
addHeroImage(
  join(CONTENT, 'comparisons/physical-therapy-vs-surgery-back-pain.md'),
  '/images/compare/physical-therapy-vs-surgery-back-pain-st-louis-mo.webp',
  'Physical Therapy vs Surgery for Back Pain at St. Louis Pain Center'
);
addHeroImage(
  join(CONTENT, 'comparisons/neuromodulation-vs-traditional-neuropathy-treatment.md'),
  '/images/compare/neuromodulation-vs-traditional-neuropathy-st-louis-mo.webp',
  'Neuromodulation vs Traditional Neuropathy Treatment at St. Louis Pain Center'
);

// ── About page: add heroImage ────────────────────────────────────────────────
console.log('\n[about page - adding heroImage]');
addHeroImage(
  join(CONTENT, 'pages/about.md'),
  '/images/about/about-st-louis-pain-center.webp',
  'St. Louis Pain Center — Pain Control Clinic in St. Louis, MO'
);

console.log('\n✅ Done. Run pnpm build to verify.');
