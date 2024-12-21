function findInAgenda(agenda, phone) {
  const entries = agenda
    .split("\n")
    .map((line) => {
      const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/);
      const nameMatch = line.match(/<([^>]+)>/);

      if (!phoneMatch || !nameMatch) return null;

      return {
        phone: phoneMatch[0],
        name: nameMatch[1],
        address: line
          .replace(phoneMatch[0], "")
          .replace(nameMatch[0], "")
          .trim(),
      };
    })
    .filter(Boolean);

  const matches = entries.filter((entry) => entry.phone.includes(phone));

  return matches.length === 1
    ? { name: matches[0].name, address: matches[0].address }
    : null;
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
