const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

function organizeChristmasDinner(dishes) {
  const ingredients = [...new Set(dishes.flatMap((dish) => dish.slice(1)))];

  return ingredients
    .map((ingredient) => {
      const recipes = dishes
        .filter((dish) => dish.includes(ingredient))
        .map((dish) => dish[0])
        .sort();

      return [ingredient, ...recipes];
    })
    .filter((recipe) => recipe.length > 2)
    .sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(organizeChristmasDinner(dishes));
