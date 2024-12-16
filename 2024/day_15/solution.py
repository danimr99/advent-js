def draw_table(data: list[dict[str, str | int]]) -> str:
    columns = []
    for i, row in enumerate(data):
        if not columns:
            columns = [[c.title(), len(c)] for c in row.keys()]
        j = 0
        for k, v in row.items():
            columns[j][1] = max(len(str(v)), columns[j][1])
            j += 1
    
    divider = "+"
    for col in columns:
        divider += "-" * (col[1] + 2) + "+"
    
    table = []
    table.append(divider)
    
    header = "|"
    for col, width in columns:
        header += " " + str(col).ljust(width) + " |"
    table.append(header)
    
    table.append(divider)
    
    for line in data:
        row = "|"
        c = 0
        for k, v in line.items():
            row += " " + str(v).ljust(columns[c][1]) + " |"
            c += 1
        table.append(row)
    
    table.append(divider)
    
    return '\n'.join(table)
