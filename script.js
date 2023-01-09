// Select all table rows
const rows = document.querySelectorAll('tr');

// Select the first row (the header row)
const headerRow = rows[0];

// Select the last cell in the header row
let lastHeaderCell = headerRow.querySelector('td:last-of-type');

// Check if there is a last cell in the header row
if (lastHeaderCell) {
  // If there is a last cell, create a new cell and add it after the last cell
  const totalHeaderCell = document.createElement('td');
  totalHeaderCell.textContent = 'Total';
  lastHeaderCell.insertAdjacentElement('afterend', totalHeaderCell);
} else {
  // If there is no last cell, add a new cell to the end of the row
  headerRow.insertAdjacentHTML('beforeend', '<td>Total</td>');
}

if (lastHeaderCell) {
  // If there is a last cell, create a new cell and add it after the last cell
  const rankHeaderCell = document.createElement('td');
  rankHeaderCell.textContent = 'Rank';
  lastHeaderCell.insertAdjacentElement('afterend', rankHeaderCell);
} else {
  // If there is no last cell, add a new cell to the end of the row
  const rankHeaderCell = document.createElement('td');
  rankHeaderCell.textContent = 'Rank';
  headerRow.insertAdjacentElement('beforeend', rankHeaderCell);
}

// Iterate over all rows
for (const row of rows) {
  // Select all cells in the row
  const cells = row.querySelectorAll('td');
  // Select all cells in the row except for the first one (which is the row label)
  const liftingCells = Array.from(cells).slice(1);
  // Calculate the total of the values in the cells
  const total = liftingCells.reduce(
    (acc, cell) => acc + parseInt(cell.textContent, 10),
    0
  );

  // Select the last cell in the row
  const lastCell = row.querySelector('td:last-of-type');
  if (lastCell) {
    // If there is a last cell, add a new cell after it with the total value
    lastCell.insertAdjacentHTML('afterend', `<td>${total}</td>`);
  } else {
    // If there is no last cell, add a new cell to the end of the row with the total value
    row.insertAdjacentHTML('beforeend', `<td>${total}</td>`);
  }
}

// Sort the rows in descending order based on the total value
const sortedRows = Array.from(rows).sort((row1, row2) => {
  const total1 = parseInt(
    row1.querySelector('td:last-of-type').textContent,
    10
  );
  const total2 = parseInt(
    row2.querySelector('td:last-of-type').textContent,
    10
  );
  return total2 - total1;
});

// Add rank values to each row
for (let i = 0; i < sortedRows.length; i++) {
  const row = sortedRows[i];
  const rank = i;
  const lastCell = row.querySelector('td:last-of-type');
  lastCell.insertAdjacentHTML('afterend', `<td>${rank}</td>`);
}

// Select all cells in the table
const cellsWithValue0 = document.querySelectorAll('td');
// Iterate over all cells
cellsWithValue0.forEach((cell) => {
  // If the cell has a value of 0, remove it
  if (cell.textContent === '0') {
    cell.remove();
  }
});

cellsWithValue0.forEach((cell) => {
  // If the cell has a value of 0, remove it
  if (cell.textContent === 'NaN') {
    cell.remove();
  }
});

// Sort the rows in descending order based on the rank
const sortedRows1 = Array.from(rows).sort((row1, row2) => {
  const rank1 = parseInt(row1.querySelector('td:last-of-type').textContent, 10);
  const rank2 = parseInt(row2.querySelector('td:last-of-type').textContent, 10);
  return rank1 - rank2;
});

// Add the sorted rows to the table
const table = document.querySelector('table');
sortedRows1.forEach((row) => table.appendChild(row));
