import os
from PIL import Image

base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch20'
os.makedirs(output_dir, exist_ok=True)

# Load Page 1
img1 = Image.open(os.path.join(base_dir, 'media__1779091135905.png'))
w1, h1 = img1.size

# --- Q1 Bounding Boxes ---
# a: (80, 20, 280, 130)
img1.crop((80, 20, 280, 130)).save(os.path.join(output_dir, 'q1_a.png'))
# b: (300, 20, 480, 140)
img1.crop((300, 20, 480, 140)).save(os.path.join(output_dir, 'q1_b.png'))
# c: (500, 20, 680, 130)
img1.crop((500, 20, 680, 130)).save(os.path.join(output_dir, 'q1_c.png'))
# d: (80, 140, 280, 280)
img1.crop((80, 140, 280, 280)).save(os.path.join(output_dir, 'q1_d.png'))
# e: (300, 140, 480, 270)
img1.crop((300, 140, 480, 270)).save(os.path.join(output_dir, 'q1_e.png'))
# f: (500, 140, 680, 260)
img1.crop((500, 140, 680, 260)).save(os.path.join(output_dir, 'q1_f.png'))

# --- Q2 Bounding Boxes ---
# a: (80, 300, 280, 420)
img1.crop((80, 300, 280, 420)).save(os.path.join(output_dir, 'q2_a.png'))
# b: (300, 300, 480, 430)
img1.crop((300, 300, 480, 430)).save(os.path.join(output_dir, 'q2_b.png'))
# c: (500, 300, 680, 395)
img1.crop((500, 300, 680, 395)).save(os.path.join(output_dir, 'q2_c.png'))
# d: (80, 430, 280, 545)
img1.crop((80, 430, 280, 545)).save(os.path.join(output_dir, 'q2_d.png'))
# e: (300, 430, 480, 545)
img1.crop((300, 430, 480, 545)).save(os.path.join(output_dir, 'q2_e.png'))

# --- Q3 Bounding Boxes ---
# a: (80, 580, 280, 705)
img1.crop((80, 580, 280, 705)).save(os.path.join(output_dir, 'q3_a.png'))
# b: (300, 580, 480, 705)
img1.crop((300, 580, 480, 705)).save(os.path.join(output_dir, 'q3_b.png'))
# c: (500, 580, 680, 725)
img1.crop((500, 580, 680, 725)).save(os.path.join(output_dir, 'q3_c.png'))
# d: (80, 725, 280, 850)
img1.crop((80, 725, 280, 850)).save(os.path.join(output_dir, 'q3_d.png'))
# e: (300, 725, 480, 850)
img1.crop((300, 725, 480, 850)).save(os.path.join(output_dir, 'q3_e.png'))
# f: (500, 725, 680, 820)
img1.crop((500, 725, 680, 820)).save(os.path.join(output_dir, 'q3_f.png'))
# g: (80, 850, 280, 980)
img1.crop((80, 850, 280, 980)).save(os.path.join(output_dir, 'q3_g.png'))

print("All Page 1 shapes cropped successfully!")
