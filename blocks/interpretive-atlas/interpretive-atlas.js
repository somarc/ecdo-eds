const VISUALS = {
  planetary: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="planetary-core" cx="45%" cy="38%" r="65%"><stop offset="0" stop-color="#254967"/><stop offset="1" stop-color="#09131e"/></radialGradient>
      <marker id="planetary-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="atlas-accent-fill"/></marker>
    </defs>
    <circle cx="360" cy="230" r="75" fill="url(#planetary-core)" class="atlas-ring"/>
    <circle cx="360" cy="230" r="47" class="atlas-dash"/>
    <text x="360" y="217" text-anchor="middle" class="atlas-label atlas-label-strong">COMPONENT</text>
    <text x="360" y="238" text-anchor="middle" class="atlas-label atlas-label-strong">PHYSICS</text>
    <text x="360" y="262" text-anchor="middle" class="atlas-small atlas-warn-text">≠ EVENT MATCH</text>
    <g class="atlas-node"><circle cx="128" cy="105" r="56"/><text x="128" y="97" text-anchor="middle" class="atlas-label atlas-label-strong">MERCURY</text><text x="128" y="118" text-anchor="middle" class="atlas-small">35.8″ LIBRATION</text><text x="128" y="136" text-anchor="middle" class="atlas-small atlas-accent-text">CORE ↔ MANTLE</text></g>
    <g class="atlas-node"><circle cx="592" cy="105" r="56"/><text x="592" y="97" text-anchor="middle" class="atlas-label atlas-label-strong">MOON</text><text x="592" y="118" text-anchor="middle" class="atlas-small">≈6° ANCIENT TPW</text><text x="592" y="136" text-anchor="middle" class="atlas-small atlas-accent-text">MASS → POLE</text></g>
    <g class="atlas-node"><circle cx="128" cy="355" r="56"/><text x="128" y="347" text-anchor="middle" class="atlas-label atlas-label-strong">ENCELADUS</text><text x="128" y="368" text-anchor="middle" class="atlas-small">0.120° LIBRATION</text><text x="128" y="386" text-anchor="middle" class="atlas-small atlas-accent-text">ICE ↔ OCEAN</text></g>
    <g class="atlas-node"><circle cx="592" cy="355" r="56"/><text x="592" y="347" text-anchor="middle" class="atlas-label atlas-label-strong">PLUTO</text><text x="592" y="368" text-anchor="middle" class="atlas-small">INFERRED TPW</text><text x="592" y="386" text-anchor="middle" class="atlas-small atlas-accent-text">LOAD ↔ SHELL</text></g>
    <g class="atlas-connectors" marker-end="url(#planetary-arrow)"><path d="M177 133L294 196"/><path d="M543 133L426 196"/><path d="M177 327L294 264"/><path d="M543 327L426 264"/></g>
    <path d="M265 423H455" class="atlas-warn-line"/><text x="360" y="447" text-anchor="middle" class="atlas-small atlas-warn-text">NO OBSERVED RAPID LARGE-ANGLE ROCKY-BODY REORIENTATION</text>
  </svg>`,
  states: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <defs><radialGradient id="state-globe" cx="42%" cy="35%" r="65%"><stop offset="0" stop-color="#315f7e"/><stop offset="1" stop-color="#0b1723"/></radialGradient><marker id="state-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" class="atlas-accent-fill"/></marker></defs>
    <path d="M360 38V421" class="atlas-axis"/><text x="370" y="55" class="atlas-small atlas-accent-text">INERTIAL / ANGULAR-MOMENTUM AXIS</text>
    <circle cx="205" cy="245" r="102" fill="url(#state-globe)" class="atlas-ring"/><circle cx="515" cy="245" r="102" fill="url(#state-globe)" class="atlas-ring"/>
    <path d="M125 225Q205 175 285 225M125 265Q205 315 285 265M205 143V347" class="atlas-grid"/>
    <g transform="rotate(-36 515 245)"><path d="M435 225Q515 175 595 225M435 265Q515 315 595 265M515 143V347" class="atlas-grid"/></g>
    <circle cx="205" cy="143" r="7" class="atlas-accent-fill"/><text x="192" y="128" class="atlas-label atlas-label-strong">Np</text>
    <circle cx="576" cy="164" r="7" class="atlas-warn-fill"/><text x="590" y="153" class="atlas-label atlas-label-strong">Np′</text>
    <path d="M290 145Q360 70 430 145" class="atlas-accent-line" marker-end="url(#state-arrow)"/><text x="360" y="100" text-anchor="middle" class="atlas-label atlas-label-strong">104° PROPOSED</text><text x="360" y="120" text-anchor="middle" class="atlas-small">CONTINUOUS CANDIDATE PATH</text>
    <text x="205" y="382" text-anchor="middle" class="atlas-label atlas-label-strong">STATE 1</text><text x="205" y="404" text-anchor="middle" class="atlas-small">DEFINED / OBSERVED GEOGRAPHY</text>
    <text x="515" y="382" text-anchor="middle" class="atlas-label atlas-label-strong">STATE 2</text><text x="515" y="404" text-anchor="middle" class="atlas-small atlas-warn-text">PROPOSED CONSTRUCTION</text>
  </svg>`,
  signals: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <rect x="34" y="42" width="652" height="354" rx="10" class="atlas-panel"/>
    <g class="atlas-grid-lines"><path d="M196 42V396M336 42V396M472 42V396M590 42V396"/><path d="M34 100H686M34 188H686M34 276H686"/></g>
    <g class="atlas-label atlas-label-strong"><text x="51" y="77">SIGNAL LANE</text><text x="214" y="77">MEASURED</text><text x="354" y="77">ECDO PATTERN</text><text x="490" y="77">ALTERNATIVE</text><text x="608" y="77">TEST</text></g>
    <g class="atlas-label"><text x="51" y="137">OCEAN HEAT</text><text x="51" y="158" class="atlas-small">DEPTH / MAP / LAG</text><text x="51" y="225">CORE FIELD</text><text x="51" y="246" class="atlas-small">MOMENT / SECULAR</text><text x="51" y="313">EOP / LOD / AAM</text><text x="51" y="334" class="atlas-small">METRES / MILLISECONDS</text></g>
    <g class="atlas-dot-measured"><circle cx="248" cy="144" r="11"/><circle cx="248" cy="232" r="11"/><circle cx="248" cy="320" r="11"/></g>
    <g class="atlas-small"><text x="221" y="170">CATALOG</text><text x="221" y="258">MODEL</text><text x="221" y="346">IERS</text></g>
    <g class="atlas-dash-box"><rect x="353" y="122" width="100" height="43" rx="5"/><rect x="353" y="210" width="100" height="43" rx="5"/><rect x="353" y="298" width="100" height="43" rx="5"/></g>
    <g class="atlas-small atlas-warn-text"><text x="367" y="148">BOTTOM-UP?</text><text x="365" y="236">PERMISSION?</text><text x="370" y="324">NOT 104°</text></g>
    <g class="atlas-small"><text x="489" y="140">ADVECTION</text><text x="489" y="158">FORCING</text><text x="489" y="228">DYNAMO</text><text x="489" y="246">VARIABILITY</text><text x="489" y="316">SEASONAL</text><text x="489" y="334">EXCHANGE</text></g>
    <g class="atlas-verdict"><rect x="607" y="123" width="62" height="41" rx="20"/><rect x="607" y="211" width="62" height="41" rx="20"/><rect x="607" y="299" width="62" height="41" rx="20"/></g>
    <g class="atlas-small atlas-label-strong"><text x="620" y="148">OPEN</text><text x="620" y="236">OPEN</text><text x="612" y="324">SCALE</text></g>
    <text x="360" y="430" text-anchor="middle" class="atlas-small atlas-warn-text">TAU UNOBSERVED · NO COMPOSITE DANGER METER</text>
  </svg>`,
  evidence: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <defs><marker id="evidence-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="atlas-accent-fill"/></marker></defs>
    <g class="atlas-casefile"><rect x="55" y="54" width="132" height="102" rx="6"/><rect x="212" y="54" width="132" height="102" rx="6"/><rect x="369" y="54" width="132" height="102" rx="6"/><rect x="526" y="54" width="132" height="102" rx="6"/></g>
    <g class="atlas-label atlas-label-strong" text-anchor="middle"><text x="121" y="88">PREDICTION</text><text x="278" y="88">SPECIMEN</text><text x="435" y="88">NULL MODEL</text><text x="592" y="88">REPLICATION</text></g>
    <g class="atlas-small" text-anchor="middle"><text x="121" y="116">DERIVED BEFORE</text><text x="121" y="134">SITE SELECTION</text><text x="278" y="116">RAW AZIMUTH</text><text x="278" y="134">DATE / SECTION</text><text x="435" y="116">ORDINARY CAUSE</text><text x="435" y="134">NEGATIVE SET</text><text x="592" y="116">BLIND SURVEY</text><text x="592" y="134">INDEPENDENT LAB</text></g>
    <g class="atlas-connectors" marker-end="url(#evidence-arrow)"><path d="M187 105H207"/><path d="M344 105H364"/><path d="M501 105H521"/></g>
    <path d="M121 156V218H592V156" class="atlas-grid"/><rect x="192" y="218" width="336" height="120" rx="60" class="atlas-panel"/>
    <text x="360" y="257" text-anchor="middle" class="atlas-label atlas-label-strong">PROVISIONAL CONFIDENCE UPDATE</text><text x="360" y="283" text-anchor="middle" class="atlas-small">SUPPORTED · CONTRADICTED · UNRESOLVED</text><text x="360" y="312" text-anchor="middle" class="atlas-small atlas-warn-text">ANECDOTE COUNT ≠ LIKELIHOOD</text>
    <path d="M360 338V381" class="atlas-warn-line"/><text x="360" y="408" text-anchor="middle" class="atlas-label atlas-label-strong atlas-warn-text">DISCONFIRMING RESULT</text><text x="360" y="431" text-anchor="middle" class="atlas-small">FAILED DISCRIMINANT / BIAS / ORDINARY FIT</text>
  </svg>`,
  instrument: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <defs><marker id="instrument-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="atlas-accent-fill"/></marker></defs>
    <g class="atlas-pipeline"><rect x="42" y="164" width="110" height="92" rx="8"/><rect x="178" y="164" width="110" height="92" rx="8"/><rect x="314" y="164" width="110" height="92" rx="8"/><rect x="450" y="164" width="110" height="92" rx="8"/><rect x="586" y="164" width="92" height="92" rx="8"/></g>
    <g class="atlas-label atlas-label-strong" text-anchor="middle"><text x="97" y="197">SOURCES</text><text x="233" y="197">QC</text><text x="369" y="197">MEASURED</text><text x="505" y="197">DERIVED</text><text x="632" y="197">OVERLAY</text></g>
    <g class="atlas-small" text-anchor="middle"><text x="97" y="222">IERS · ARGO</text><text x="97" y="239">IGRF · USGS</text><text x="233" y="222">FRESHNESS</text><text x="233" y="239">MISSINGNESS</text><text x="369" y="222">VALUE ± σ</text><text x="369" y="239">UTC</text><text x="505" y="222">VERSIONED</text><text x="505" y="239">MODEL</text><text x="632" y="222">OPT-IN</text><text x="632" y="239">ECDO</text></g>
    <g class="atlas-connectors" marker-end="url(#instrument-arrow)"><path d="M152 210H173"/><path d="M288 210H309"/><path d="M424 210H445"/><path d="M560 210H581"/></g>
    <path d="M436 120V300" class="atlas-warn-line"/><text x="436" y="95" text-anchor="middle" class="atlas-label atlas-label-strong atlas-warn-text">MEASUREMENT BOUNDARY</text>
    <rect x="289" y="330" width="294" height="58" rx="29" class="atlas-dash-box"/><text x="436" y="355" text-anchor="middle" class="atlas-small atlas-warn-text">EXPLORATORY LAYER CANNOT ENTER</text><text x="436" y="375" text-anchor="middle" class="atlas-small atlas-warn-text">THE MEASURED LOBBY SILENTLY</text>
  </svg>`,
  sources: `<svg viewBox="0 0 720 460" aria-hidden="true" focusable="false">
    <defs><marker id="sources-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="atlas-accent-fill"/></marker></defs>
    <g class="atlas-source-node"><rect x="48" y="56" width="150" height="72" rx="8"/><rect x="285" y="56" width="150" height="72" rx="8"/><rect x="522" y="56" width="150" height="72" rx="8"/><rect x="48" y="328" width="150" height="72" rx="8"/><rect x="285" y="328" width="150" height="72" rx="8"/><rect x="522" y="328" width="150" height="72" rx="8"/></g>
    <g class="atlas-label atlas-label-strong" text-anchor="middle"><text x="123" y="87">PROPONENT</text><text x="123" y="107">PRIMARY</text><text x="360" y="87">PEER-REVIEWED</text><text x="360" y="107">MECHANICS</text><text x="597" y="87">MEASUREMENT</text><text x="597" y="107">CATALOG</text><text x="123" y="359">QUOTATION</text><text x="123" y="379">/ PARAPHRASE</text><text x="360" y="359">LAB SYNTHESIS</text><text x="360" y="379">/ CALCULATION</text><text x="597" y="359">CORRECTION</text><text x="597" y="379">/ VERSION</text></g>
    <circle cx="360" cy="228" r="72" class="atlas-panel"/><text x="360" y="217" text-anchor="middle" class="atlas-label atlas-label-strong">CLAIM ID</text><text x="360" y="241" text-anchor="middle" class="atlas-small">ROUTE · SECTION · LINE</text><text x="360" y="263" text-anchor="middle" class="atlas-small atlas-accent-text">BIDIRECTIONAL</text>
    <g class="atlas-connectors" marker-end="url(#sources-arrow)"><path d="M178 128L302 190"/><path d="M360 128V151"/><path d="M542 128L418 190"/><path d="M302 266L178 328"/><path d="M360 300V323"/><path d="M418 266L542 328"/></g>
    <text x="360" y="438" text-anchor="middle" class="atlas-small atlas-warn-text">ORIGIN · TRANSFORMATION · CONFLICT · ACCESS DATE</text>
  </svg>`,
};

function normalize(value) {
  return value.toLowerCase().trim().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, '');
}

function moveChildren(source, target) {
  while (source?.firstChild) target.append(source.firstChild);
}

function moveCellRange(cells, start, target) {
  cells.slice(start).forEach((cell) => moveChildren(cell, target));
}

function createHeader(row, mode) {
  const cells = [...row.children];
  const header = document.createElement('div');
  header.className = 'interpretive-atlas-header';

  const kicker = document.createElement('p');
  kicker.className = 'interpretive-atlas-kicker';
  kicker.textContent = `${mode.replace('-', ' ')} / interpretive plate`;
  header.append(kicker);
  moveChildren(cells[1] || cells[0], header);

  if (cells.length > 2) {
    const status = document.createElement('div');
    status.className = 'interpretive-atlas-status';
    moveCellRange(cells, 2, status);
    header.append(status);
  }
  return header;
}

function createFigure(mode, captionText) {
  const figure = document.createElement('figure');
  figure.className = 'interpretive-atlas-visual';
  figure.innerHTML = VISUALS[mode];
  const caption = document.createElement('figcaption');
  caption.textContent = captionText;
  figure.append(caption);
  return figure;
}

function createNode(row, index) {
  const cells = [...row.children];
  const node = document.createElement('li');
  node.className = 'interpretive-atlas-node';
  const kicker = document.createElement('p');
  kicker.className = 'interpretive-atlas-node-kicker';
  kicker.textContent = `${String(index + 1).padStart(2, '0')} · ${cells[0]?.textContent.trim() || 'Reading'}`;
  node.append(kicker);
  moveChildren(cells[1] || cells[0], node);
  if (cells.length > 2) {
    const burden = document.createElement('div');
    burden.className = 'interpretive-atlas-burden';
    moveCellRange(cells, 2, burden);
    node.append(burden);
  }
  return node;
}

export default function decorate(block) {
  const rows = [...block.children].filter((row) => row.textContent.trim());
  const mode = normalize(rows[0]?.firstElementChild?.textContent || '');
  if (!VISUALS[mode]) {
    block.classList.add('interpretive-atlas-invalid');
    return;
  }

  const header = createHeader(rows[0], mode);
  const body = document.createElement('div');
  body.className = 'interpretive-atlas-body';
  const caption = header.querySelector('h2')?.textContent || `${mode} interpretive plate`;
  body.append(createFigure(mode, `${caption} — conceptual synthesis, not measured or simulated output.`));

  const list = document.createElement('ol');
  list.className = 'interpretive-atlas-list';
  rows.slice(1).forEach((row, index) => list.append(createNode(row, index)));
  body.append(list);
  block.classList.add(`interpretive-atlas-${mode}`);
  block.replaceChildren(header, body);
}
