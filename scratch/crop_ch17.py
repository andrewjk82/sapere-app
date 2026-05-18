import os
from PIL import Image

# Directories
base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch17'
os.makedirs(output_dir, exist_ok=True)

# Image 1 (Q1 & Q2)
img1_path = os.path.join(base_dir, 'media__1779084863052.png')
img1 = Image.open(img1_path)
w1, h1 = img1.size  # 952, 1024

# Let's crop Q1 diagrams
# Row 1: y = 50 to 280. Row 2: y = 280 to 510.
# Col 1: x = 20 to 325. Col 2: x = 325 to 640. Col 3: x = 640 to 940.
q1_crops = {
    'q1a': (20, 45, 325, 275),
    'q1b': (325, 45, 640, 275),
    'q1c': (640, 45, 940, 275),
    'q1d': (20, 275, 325, 510),
    'q1e': (325, 275, 640, 510),
    'q1f': (640, 275, 940, 510)
}

for name, box in q1_crops.items():
    cropped = img1.crop(box)
    cropped.save(os.path.join(output_dir, f'{name}.png'))
    print(f'Cropped {name} successfully.')

# Let's crop Q2 diagrams
# We have a 2x2 grid.
# Question 2 starts at y = 530.
# Row 1 (a, b): y = 575 to 800. Row 2 (c, d): y = 800 to 1024.
# Col 1 (a, c): x = 20 to 480. Col 2 (b, d): x = 480 to 940.
q2_crops = {
    'q2a': (20, 575, 480, 800),
    'q2b': (480, 575, 940, 800),
    'q2c': (20, 800, 480, 1024),
    'q2d': (480, 800, 940, 1024)
}

for name, box in q2_crops.items():
    cropped = img1.crop(box)
    cropped.save(os.path.join(output_dir, f'{name}.png'))
    print(f'Cropped {name} successfully.')

# Image 2 (Q3 & Q4)
img2_path = os.path.join(base_dir, 'media__1779084874520.png')
img2 = Image.open(img2_path)
w2, h2 = img2.size  # 763, 1024

# Let's crop Q3 and Q4 diagrams
# Q3 diagram is at the top: y = 50 to 250, x = 60 to 700.
# Q4 diagram is in the middle: y = 475 to 675, x = 60 to 700.
q3_q4_crops = {
    'q3': (60, 50, 700, 250),
    'q4': (60, 480, 700, 680)
}

for name, box in q3_q4_crops.items():
    cropped = img2.crop(box)
    cropped.save(os.path.join(output_dir, f'{name}.png'))
    print(f'Cropped {name} successfully.')

print("All crops completed successfully!")
