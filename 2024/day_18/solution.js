function findInAgenda(agenda, phone) {
  // Split agenda into lines
  const lines = agenda.split("\n");

  // Process each line
  const entries = lines
    .map((line) => {
      const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/);
      const nameMatch = line.match(/<([^>]+)>/);

      if (!phoneMatch || !nameMatch) return null;

      const phone = phoneMatch[0];
      const name = nameMatch[1];

      // Get address by removing phone and name
      const address = line.replace(phone, "").replace(nameMatch[0], "").trim();

      return { phone, name, address };
    })
    .filter(Boolean);

  // Find matching entries
  const matches = entries.filter((entry) => entry.phone.includes(phone));

  // Return null if no matches or multiple matches
  if (matches.length !== 1) return null;

  // Return formatted result
  return {
    name: matches[0].name,
    address: matches[0].address,
  };
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null

console.log(findInAgenda(agenda, "1"));
// null
