function organizeChristmasDinner(dishes) {
  let ingredients = new Map();

  for (const dish of dishes) {
    for (const elem of dish.slice(1)) {
      let arr = ingredients.get(elem);

      arr ||= [];
      arr.push(dish[0]);
      ingredients.set(elem, arr);
    }
  }

  let result = [];

  for (const ingredient of ingredients) {
    if (ingredient.flat().length > 2) {
      ingredient[1].sort();
      result.push(ingredient.flat());
    }
  }

  result.sort();

  return result;
}
