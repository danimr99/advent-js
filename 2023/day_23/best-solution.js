function organizeChristmasDinner(dishes) {
  const ingredients = new Map();

  for (const dish of dishes) {
    const dishName = dish[0];
    const dishIngredients = dish.slice(1);

    for (const ingredient of dishIngredients) {
      if (ingredients.has(ingredient)) {
        ingredients.get(ingredient).push(dishName);
      } else {
        ingredients.set(ingredient, [dishName]);
      }
    }
  }

  const organizedDishes = [];

  for (const [ingredient, dishes] of ingredients) {
    if (dishes.length >= 2) {
      organizedDishes.push([ingredient, ...dishes.sort()]);
    }
  }

  organizedDishes.sort();

  return organizedDishes;
}
