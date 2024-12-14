import re

def decode_filename(filename):
  match = re.match(r'^\d+_(.+?)\.[^.]+$', filename)
  
  if match:
    return match.group(1)
  return None
