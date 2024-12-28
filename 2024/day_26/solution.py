def get_completed(time_worked: str, total_time: str) -> str:
    def to_seconds(time_str: str) -> int:
        h, m, s = map(int, time_str.split(':'))
        return h * 3600 + m * 60 + s
    
    def gcd(a: int, b: int) -> int:
        while b:
            a, b = b, a % b
        return a
    
    worked_seconds = to_seconds(time_worked)
    total_seconds = to_seconds(total_time)
    
    # Calculate percentage and round to nearest int
    percentage = round((worked_seconds / total_seconds) * 100)
    
    return f"{percentage}%"
