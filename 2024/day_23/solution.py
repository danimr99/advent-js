def find_missing_numbers(nums):
    # Get the maximum boundary (highest number)
    max_num = max(nums) if nums else 0
    
    # Convert input list to set for O(1) lookups
    num_set = set(nums)
    
    # Use list comprehension to find missing numbers
    return [i for i in range(1, max_num + 1) if i not in num_set]
