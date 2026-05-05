import sys
import re

def check_jsx(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    # Simple tag balancer
    stack = []
    # Find all <tag and </tag
    tags = re.findall(r'<(motion\.div|div)|</(motion\.div|div)>', content)
    
    # But wait, we need to handle self-closing tags
    # Let's use a better approach: find all occurrences and check if they have />
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        # This is a very rough check
        openings = re.finditer(r'<(motion\.div|div)', line)
        for match in openings:
            tag = match.group(1)
            # Check if this line or following lines close it with />
            # Very hard with regex. 
            pass

check_jsx('src/components/DailyChallenge.jsx')
