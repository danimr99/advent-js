import re

def fix_packages(packages: str) -> str:
  while "(" in packages:
    packages = re.sub(r"\(([^()]*)\)", lambda m: m.group(1)[::-1], packages)
  
  return packages
