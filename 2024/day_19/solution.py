def distribute_weight(weight: int) -> str:
    # Box representations with proper spacing
    box_representations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }
    
    # Available weights in descending order
    weights = [10, 5, 2, 1]
    boxes = []
    
    # Get required boxes using greedy approach
    for w in weights:
        while weight >= w:
            weight -= w
            boxes.append(list(box_representations[w]))
    
    # Reverse to get ascending order (smaller boxes on top)
    boxes.reverse()
    
    if not boxes:
        return ""
        
    # Start with first box
    stack = "\n".join(boxes[0])
    
    # Stack remaining boxes
    for i in range(1, len(boxes)):
        box = boxes[i]
        # Remove overlap with previous box
        box[0] = box[0][len(boxes[i-1][0]):]
        # Join lines and trim right whitespace
        stack = f"{stack[:-1]}{[line.rstrip() for line in box]}"
    
    return stack
