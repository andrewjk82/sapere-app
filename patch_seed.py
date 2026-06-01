import json

with open('src/constants/seedYear12aCh6Questions.js', 'r') as f:
    content = f.read()

# Replace the specific circles arrays
content = content.replace('"circles": [\n          {\n            "center": "O",\n            "through": "A",\n            "dashed": true\n          }\n        ],', '')

# Remove empty lines if any
with open('src/constants/seedYear12aCh6Questions.js', 'w') as f:
    f.write(content)
print("seed patched")
