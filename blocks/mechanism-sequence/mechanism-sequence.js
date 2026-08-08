const STAGE_META = {
  interface: {
    label: 'Interface',
    caption: 'Coupled layers / proposed permission switch',
  },
  reorientation: {
    label: 'Release',
    caption: 'Fixed inertial axis / moving outer body',
  },
  ocean: {
    label: 'Ocean response',
    caption: 'Transient surge / later geoid equilibrium',
  },
  atmosphere: {
    label: 'Atmospheric response',
    caption: 'Relative flow / convergence / uplift',
  },
  test: {
    label: 'Test',
    caption: 'Conservation ledger / falsification paths',
  },
};

const SVG_ATTRIBUTES = 'viewBox="0 0 640 420" aria-hidden="true" focusable="false"';

const VISUALS = {
  interface: `<svg ${SVG_ATTRIBUTES}>
    <defs>
      <radialGradient id="interface-mantle" cx="42%" cy="36%" r="64%">
        <stop offset="0" stop-color="#213247"/>
        <stop offset="1" stop-color="#0b1522"/>
      </radialGradient>
      <radialGradient id="interface-core" cx="40%" cy="35%" r="65%">
        <stop offset="0" stop-color="#f0a463"/>
        <stop offset="1" stop-color="#8c4128"/>
      </radialGradient>
      <marker id="interface-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
    <g class="mechanism-orbit mechanism-orbit-outer">
      <circle cx="320" cy="208" r="174"/>
      <circle cx="320" cy="208" r="152"/>
    </g>
    <circle class="mechanism-shell" cx="320" cy="208" r="142" fill="url(#interface-mantle)"/>
    <circle class="mechanism-boundary" cx="320" cy="208" r="94"/>
    <circle class="mechanism-core" cx="320" cy="208" r="82" fill="url(#interface-core)"/>
    <circle class="mechanism-inner-core" cx="320" cy="208" r="35"/>
    <g class="mechanism-flow mechanism-flow-warm" marker-end="url(#interface-arrow)">
      <path d="M 224 138 A 118 118 0 0 1 415 137"/>
      <path d="M 418 278 A 118 118 0 0 1 225 279"/>
    </g>
    <g class="mechanism-ticks">
      <path d="M320 46v20M320 350v20M158 208h20M462 208h20"/>
      <path d="M205 93l14 14M421 309l14 14M205 323l14-14M421 107l14-14"/>
    </g>
    <g class="mechanism-labels">
      <text x="320" y="28" text-anchor="middle">MANTLE–CRUST BODY</text>
      <text x="320" y="111" text-anchor="middle">CMB / D″</text>
      <text x="320" y="214" text-anchor="middle">CORE</text>
      <text class="mechanism-label-warn" x="320" y="401" text-anchor="middle">UNKNOWN COUPLING LAW</text>
    </g>
  </svg>`,
  reorientation: `<svg ${SVG_ATTRIBUTES}>
    <defs>
      <marker id="reorientation-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
      <clipPath id="reorientation-globe-clip"><circle cx="320" cy="210" r="128"/></clipPath>
    </defs>
    <g class="mechanism-axis-fixed">
      <path d="M320 28v364"/>
      <circle cx="320" cy="42" r="6"/>
      <circle cx="320" cy="378" r="6"/>
    </g>
    <circle class="mechanism-shell" cx="320" cy="210" r="128"/>
    <g class="mechanism-globe-grid" clip-path="url(#reorientation-globe-clip)" transform="rotate(-28 320 210)">
      <ellipse cx="320" cy="210" rx="54" ry="128"/>
      <ellipse cx="320" cy="210" rx="105" ry="128"/>
      <path d="M192 210h256M210 150c72 30 148 30 220 0M210 270c72-30 148-30 220 0"/>
      <path class="mechanism-axis-moving" d="M320 60v300"/>
    </g>
    <g class="mechanism-flow mechanism-flow-warm" marker-end="url(#reorientation-arrow)">
      <path d="M178 118A178 178 0 0 1 465 125"/>
    </g>
    <path class="mechanism-angle" d="M320 210L320 72M320 210L254 88"/>
    <path class="mechanism-angle-arc" d="M320 121A89 89 0 0 0 278 132"/>
    <g class="mechanism-labels">
      <text x="336" y="50">INERTIAL AXIS / FIXED</text>
      <text x="181" y="365">ORB / REORIENTS</text>
      <text class="mechanism-label-warn" x="273" y="111">θ</text>
      <text x="320" y="404" text-anchor="middle">GEOGRAPHY MOVES BENEATH THE CELESTIAL POLE</text>
    </g>
  </svg>`,
  ocean: `<svg ${SVG_ATTRIBUTES}>
    <defs>
      <linearGradient id="ocean-water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#68b7dc" stop-opacity=".72"/>
        <stop offset="1" stop-color="#12324a" stop-opacity=".88"/>
      </linearGradient>
      <marker id="ocean-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
    <path class="mechanism-land" d="M44 144h112l50 46 42 106h144l43-106 50-46h111v226H44z"/>
    <path class="mechanism-water" fill="url(#ocean-water)" d="M178 216c54-43 109-49 164-19 56 30 102 24 139-18v144H178z"/>
    <path class="mechanism-water-line" d="M178 216c54-43 109-49 164-19 56 30 102 24 139-18"/>
    <path class="mechanism-equilibrium-line" d="M178 246c98 3 200 3 303 0"/>
    <g class="mechanism-flow mechanism-flow-signal" marker-end="url(#ocean-arrow)">
      <path d="M250 169c70-36 128-29 176 21"/>
      <path d="M413 296c-54 19-113 21-177 5"/>
    </g>
    <g class="mechanism-labels">
      <text x="45" y="52">RIGID BASIN</text>
      <text x="45" y="74">CHANGES VELOCITY</text>
      <text class="mechanism-label-signal" x="366" y="121">TRANSIENT SURGE</text>
      <text x="366" y="271">LATER GEOID</text>
      <text x="366" y="290">EQUILIBRIUM</text>
      <text x="320" y="404" text-anchor="middle">WATER REMAINS GRAVITY-BOUND TO EARTH</text>
    </g>
  </svg>`,
  atmosphere: `<svg ${SVG_ATTRIBUTES}>
    <defs>
      <linearGradient id="atmosphere-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#173149" stop-opacity=".12"/>
        <stop offset="1" stop-color="#68b7dc" stop-opacity=".18"/>
      </linearGradient>
      <marker id="atmosphere-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
    <path fill="url(#atmosphere-sky)" d="M32 42h576v300H32z"/>
    <path class="mechanism-ground" d="M32 318h164l78-54 56 31 72-118 76 141h130v70H32z"/>
    <g class="mechanism-flow mechanism-flow-signal" marker-end="url(#atmosphere-arrow)">
      <path d="M58 249c88 0 159-2 219-18 54-14 94-51 123-107"/>
      <path d="M58 197c101 2 179-6 236-31 46-20 77-50 101-93"/>
      <path d="M58 145c119 5 208-7 269-39"/>
    </g>
    <g class="mechanism-compression">
      <path d="M427 165c36 7 62 29 78 64"/>
      <path d="M449 140c49 11 86 42 105 91"/>
      <path d="M470 115c62 14 108 53 131 115"/>
    </g>
    <g class="mechanism-flow mechanism-flow-warm" marker-end="url(#atmosphere-arrow)">
      <path d="M399 260c-18-62-16-117 7-165"/>
      <path d="M501 242c20 36 25 69 14 99"/>
    </g>
    <g class="mechanism-labels">
      <text x="58" y="72">AIR RETAINS PRIOR MOMENTUM</text>
      <text class="mechanism-label-signal" x="306" y="57">UPLIFT</text>
      <text class="mechanism-label-warn" x="462" y="88">COMPRESSION</text>
      <text x="320" y="404" text-anchor="middle">RELATIVE WIND DEPENDS ON PATH, RATE, AND TOPOGRAPHY</text>
    </g>
  </svg>`,
  test: `<svg ${SVG_ATTRIBUTES}>
    <defs>
      <marker id="test-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
      </marker>
    </defs>
    <circle class="mechanism-test-core" cx="320" cy="205" r="72"/>
    <circle class="mechanism-test-ring" cx="320" cy="205" r="128"/>
    <g class="mechanism-test-links" marker-end="url(#test-arrow)">
      <path d="M320 132V76"/><path d="M383 169l64-38"/><path d="M383 242l64 38"/>
      <path d="M257 242l-64 38"/><path d="M257 169l-64-38"/>
    </g>
    <g class="mechanism-test-nodes">
      <circle cx="320" cy="60" r="34"/><circle cx="472" cy="116" r="34"/>
      <circle cx="472" cy="294" r="34"/><circle cx="168" cy="294" r="34"/>
      <circle cx="168" cy="116" r="34"/>
    </g>
    <g class="mechanism-labels mechanism-labels-large">
      <text x="320" y="200" text-anchor="middle">ECDO</text><text x="320" y="220" text-anchor="middle">MODEL</text>
      <text x="320" y="66" text-anchor="middle">L</text><text x="472" y="122" text-anchor="middle">E</text>
      <text x="472" y="300" text-anchor="middle">τ</text><text x="168" y="300" text-anchor="middle">M</text>
      <text x="168" y="122" text-anchor="middle">t</text>
    </g>
    <g class="mechanism-labels">
      <text x="320" y="23" text-anchor="middle">ANGULAR MOMENTUM</text>
      <text x="505" y="73">ENERGY</text><text x="509" y="347">TORQUE</text>
      <text x="67" y="347">MASS</text><text x="62" y="73">TIMESCALE</text>
      <text class="mechanism-label-warn" x="320" y="404" text-anchor="middle">FAIL ONE REQUIRED LEDGER → WOUND THE MODEL</text>
    </g>
  </svg>`,
};

function normalizeKey(value, index) {
  const key = value.toLowerCase().trim().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, '');
  if (STAGE_META[key]) return key;
  return Object.keys(STAGE_META)[index] || 'test';
}

function createVisual(key, index) {
  const figure = document.createElement('figure');
  figure.className = 'mechanism-stage-visual';
  figure.innerHTML = VISUALS[key];

  const caption = document.createElement('figcaption');
  caption.innerHTML = `<span>${String(index + 1).padStart(2, '0')} / 05</span> ${STAGE_META[key].caption}`;
  figure.append(caption);
  return figure;
}

function decorateStage(row, index) {
  const cells = [...row.children];
  const key = normalizeKey(cells[0]?.textContent || '', index);
  const stage = document.createElement('li');
  stage.className = `mechanism-stage mechanism-stage-${key}`;

  const content = document.createElement('div');
  content.className = 'mechanism-stage-content';
  const kicker = document.createElement('p');
  kicker.className = 'mechanism-stage-kicker';
  kicker.textContent = `${String(index + 1).padStart(2, '0')} · ${STAGE_META[key].label}`;
  content.append(kicker);

  const source = cells[1] || cells[0];
  while (source?.firstChild) content.append(source.firstChild);

  if (cells[2]) {
    const ledger = document.createElement('div');
    ledger.className = 'mechanism-stage-ledger';
    while (cells[2].firstChild) ledger.append(cells[2].firstChild);
    content.append(ledger);
  }

  stage.append(createVisual(key, index), content);
  return stage;
}

function createHeader(row) {
  const cells = [...row.children];
  const header = document.createElement('div');
  header.className = 'mechanism-sequence-header';

  const kicker = document.createElement('p');
  kicker.className = 'mechanism-sequence-kicker';
  kicker.textContent = 'Visual argument / 05 frames';
  header.append(kicker);

  const source = cells[1] || cells[0];
  while (source?.firstChild) header.append(source.firstChild);

  if (cells[2]) {
    const status = document.createElement('div');
    status.className = 'mechanism-sequence-status';
    while (cells[2].firstChild) status.append(cells[2].firstChild);
    header.append(status);
  }

  return header;
}

function createOverflow(rows) {
  const overflow = document.createElement('div');
  overflow.className = 'mechanism-sequence-overflow';

  const notice = document.createElement('p');
  notice.innerHTML = '<strong>Authoring notice:</strong> this visual sequence supports five frames. Additional authored content is preserved below for correction in DA.';
  overflow.append(notice);

  rows.forEach((row) => {
    const fallback = document.createElement('div');
    fallback.className = 'mechanism-sequence-overflow-row';
    [...row.children].forEach((cell) => {
      while (cell.firstChild) fallback.append(cell.firstChild);
    });
    overflow.append(fallback);
  });

  return overflow;
}

export default function decorate(block) {
  const rows = [...block.children].filter((row) => row.textContent.trim());
  const hasHeader = rows[0]?.firstElementChild?.textContent.trim().toLowerCase() === 'intro';
  const stageRows = hasHeader ? rows.slice(1) : rows;
  const list = document.createElement('ol');
  list.className = 'mechanism-sequence-list';
  const supportedRows = stageRows.slice(0, 5);
  const extraRows = stageRows.slice(5);
  supportedRows.forEach((row, index) => list.append(decorateStage(row, index)));
  block.replaceChildren(
    ...(hasHeader ? [createHeader(rows[0])] : []),
    list,
    ...(extraRows.length ? [createOverflow(extraRows)] : []),
  );

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    list.querySelectorAll('.mechanism-stage').forEach((stage) => stage.classList.add('is-active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-active');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '-15% 0px -20%', threshold: 0.2 });

  list.querySelectorAll('.mechanism-stage').forEach((stage) => observer.observe(stage));
}
