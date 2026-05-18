import os
from PIL import Image

# Directories
base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch18'
os.makedirs(output_dir, exist_ok=True)

# Image 1: media__1779088520739.png (736 x 1024)
# Contains Q3 resort table, Q4 tournament table, and Q4 summary table.
img1_path = os.path.join(base_dir, 'media__1779088520739.png')
img1 = Image.open(img1_path)
w1, h1 = img1.size

# resort table (Q3): y = 190 to 370, x = 60 to 680.
# tennis sets won table (Q4): y = 500 to 710, x = 60 to 680.
# tennis summary table (Q4): y = 730 to 900, x = 60 to 680.
q3_q4_crops = {
    'q3_resort_table': (60, 190, 680, 370),
    'q4_tournament_table': (60, 500, 680, 710),
    'q4_summary_table': (60, 730, 680, 900)
}

for name, box in q3_q4_crops.items():
    cropped = img1.crop(box)
    cropped.save(os.path.join(output_dir, f'{name}.png'))
    print(f'Cropped {name} successfully.')

# Image 2: media__1779088526320.png (649 x 1024)
# Contains Q1 males age table and Q2 nationalities table.
img2_path = os.path.join(base_dir, 'media__1779088526320.png')
img2 = Image.open(img2_path)
w2, h2 = img2.size

# age table (Q1): y = 175 to 500, x = 110 to 520.
# nationalities table (Q2): y = 680 to 1000, x = 100 to 550.
q1_q2_crops = {
    'q1_age_table': (110, 175, 520, 500),
    'q2_nationalities_table': (100, 680, 550, 1000)
}

for name, box in q1_q2_crops.items():
    cropped = img2.crop(box)
    cropped.save(os.path.join(output_dir, f'{name}.png'))
    print(f'Cropped {name} successfully.')

print("All crops completed successfully!")
