(() => {
  function drawTable(data: Array<Record<string, string | number>>): string {
    if (!data.length) {
      return "";
    }

    const columns = Object.keys(data[0]);
    const columnWidths = columns.map((col) =>
      Math.max(col.length, ...data.map((row) => String(row[col]).length))
    );

    const border = `+${columnWidths
      .map((width) => "-".repeat(width + 2))
      .join("+")}+`;

    const headerRow = `| ${columns
      .map((col, i) => {
        const cell = col[0].toUpperCase() + col.slice(1);
        return cell.padEnd(columnWidths[i]);
      })
      .join(" | ")} |`;

    const rows = data.map((row) => {
      return `| ${columns
        .map((col, i) => {
          const cell = String(row[col]);
          return cell.padEnd(columnWidths[i]);
        })
        .join(" | ")} |`;
    });

    return [border, headerRow, border, ...rows, border].join("\n");
  }

  console.log(
    drawTable([
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
      { name: "Charlie", city: "New York" },
    ])
  );

  console.log(
    drawTable([
      { gift: "Doll", quantity: 10 },
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
    ])
  );
})();
