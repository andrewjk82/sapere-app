import os
from PIL import Image, ImageDraw

base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
img_path = os.path.join(base_dir, 'media__1779091135905.png')
img = Image.open(img_path)
draw = ImageDraw.Draw(img)

# We will read the perfect bboxes printed by auto_crop_ch20.py:
bboxes = {
    'q1_a': (72, 20, 290, 125),
    'q1_b': (312, 20, 474, 147),
    'q1_c': (534, 34, 647, 99),
    'q1_d': (72, 146, 173, 290),
    'q1_e': (308, 140, 409, 258),
    'q1_f': (534, 147, 652, 244),
    
    'q2_a': (55, 293, 290, 430),
    'q2_b': (292, 293, 500, 440),
    'q2_c': (527, 293, 647, 415),
    'q2_d': (55, 430, 193, 570),
    'q2_e': (291, 430, 429, 567),
    
    'q3_a': (55, 570, 290, 720),
    'q3_b': (292, 609, 418, 720),
    'q3_c': (527, 610, 613, 730),
    'q3_d': (55, 767, 186, 870),
    'q3_e': (291, 720, 429, 870),
    'q3_f': (527, 720, 683, 826),
    'q3_g': (72, 870, 193, 990)
}

for name, box in bboxes.items():
    draw.rectangle(box, outline="red", width=2)

img.save('/Users/andrewkim/Desktop/sapere1/scratch/debug_page1.png')
print("Debug image page1 saved successfully!")
