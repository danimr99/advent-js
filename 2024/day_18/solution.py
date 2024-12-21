from typing import Dict, Optional
import re

def find_in_agenda(agenda: str, phone: str) -> Optional[Dict[str, str]]:
    lines = agenda.split("\n")
    result = None

    for line in lines:
        phone_match = re.search(r'\+\d{1,2}-\d{3}-\d{3}-\d{3}', line)
        name_match = re.search(r'<([^>]+)>', line)

        if phone_match and name_match and phone in phone_match.group(0):
            address = line
            address = address.replace(phone_match.group(0), "")
            address = address.replace(name_match.group(0), "")
            address = address.strip()

            # Cannot have multiple matches
            if result:
                return None

            result = {"name": name_match.group(1), "address": address}

    return result
