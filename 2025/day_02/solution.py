def manufacture_gifts(gifts_to_produce: list[dict]) -> list[str]:
  result = []

  for item in gifts_to_produce:
    toy = item["toy"]
    quantity = item["quantity"]

    n = max(0, int(quantity))
    result.extend([toy] * n)

  return result