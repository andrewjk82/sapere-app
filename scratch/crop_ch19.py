import os
from PIL import Image

# Directories
base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch19'
os.makedirs(output_dir, exist_ok=True)

# Image path
img_path = os.path.join(base_dir, 'media__1779089878433.png')
img = Image.open(img_path)
w, h = img.size # 724, 1024

# Handspan diagram (Q4): y = 730 to 980, x = 450 to 710
hand_crop = img.crop((450, 730, 710, 980))
hand_crop.save(os.path.join(output_dir, 'q4_hand.png'))
print("Handspan diagram cropped and saved successfully!")
