def filter_gifts(gifts: list[str]) -> list[str]:
    return [gift for gift in gifts if "#" not in gift]