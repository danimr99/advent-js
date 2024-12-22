from typing import List

def generate_gift_sets(gifts: List[str]) -> List[List[str]]:
    result = []

    # Helper function to generate combinations of size k
    def generate_combinations(start: int, current_combo: List[str], size: int):
        if len(current_combo) == size:
            result.append(current_combo[:])
            return

        for i in range(start, len(gifts)):
            current_combo.append(gifts[i])
            generate_combinations(i + 1, current_combo, size)
            current_combo.pop()

    # Generate combinations of all sizes from 1 to n
    for size in range(1, len(gifts) + 1):
        generate_combinations(0, [], size)

    return result
