from typing import List, Dict

def organize_inventory(
  inventory: List[Dict[str, str | int]]
) -> Dict[str, Dict[str, int]]:
  result: Dict[str, Dict[str, int]] = {}

  for item in inventory:
    name = item["name"]
    quantity = item["quantity"]
    category = item["category"]

    if category not in result:
      result[category] = {}
        
      result[category][name] = result[category].get(name, 0) + quantity

  return result
