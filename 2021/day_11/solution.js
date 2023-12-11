export default function shouldBuyFidelity(times) {
  const TICKET_PRICE = 12;
  const FIDELITY_PRICE = 250;
  const FIDELITY_DISCOUNT = 0.75;

  let fidelityTicketsPrice = 0;

  for (let i = 1; i < times; i++) {
    fidelityTicketsPrice += TICKET_PRICE * FIDELITY_DISCOUNT ** i;
  }

  return times * TICKET_PRICE > fidelityTicketsPrice + FIDELITY_PRICE;
}

console.log(shouldBuyFidelity(1)); // false
console.log(shouldBuyFidelity(100)); // true
