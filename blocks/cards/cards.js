import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* Support both standard row-per-card authoring and a legacy single card row. */
  const ul = document.createElement('ul');
  const rows = [...block.children];
  const firstRowCells = [...(rows[0]?.children || [])];
  const isCardGrid = rows.length === 1
    && firstRowCells.length > 2
    && firstRowCells.every((cell) => cell.querySelector('h2, h3, h4'));
  const cardRows = isCardGrid ? firstRowCells : rows;

  cardRows.forEach((row, index) => {
    const li = document.createElement('li');
    li.dataset.cardIndex = String(index + 1).padStart(2, '0');
    if (isCardGrid) li.append(row);
    else while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(ul);
}
