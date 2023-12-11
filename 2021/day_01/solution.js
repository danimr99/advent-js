const ovejas = Object.freeze([
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
]);

export default function contarOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().includes("a") &&
      oveja.name.toLowerCase().includes("n")
  );
}

console.log(contarOvejas(ovejas));
