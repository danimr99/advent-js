from collections import Counter

def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    received_count = Counter(received)
    expected_count = Counter(expected)

    missing = {}
    extra = {}

    # Check for missing gifts
    for gift, count in expected_count.items():
        missing_quantity = count - received_count.get(gift, 0)
        if missing_quantity > 0:
            missing[gift] = missing_quantity

    # Check for extra gifts
    for gift, count in received_count.items():
        extra_quantity = count - expected_count.get(gift, 0)
        if extra_quantity > 0:
            extra[gift] = extra_quantity

    return {'missing': missing, 'extra': extra}
