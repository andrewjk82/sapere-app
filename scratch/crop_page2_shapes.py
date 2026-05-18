import os
from PIL import Image

base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch20'
os.makedirs(output_dir, exist_ok=True)

# Load Page 2
img2 = Image.open(os.path.join(base_dir, 'media__1779091149077.png'))
w2, h2 = img2.size # 784, 1024

def find_colored_shape_bbox(img_crop, padding=15):
    w_crop, h_crop = img_crop.size
    left, top, right, bottom = w_crop, h_crop, 0, 0
    found = False
    
    for y in range(h_crop):
        for x in range(w_crop):
            rgb = img_crop.getpixel((x, y))
            r, g, b = rgb[0], rgb[1], rgb[2]
            
            if r > 240 and g > 240 and b > 240:
                continue
                
            is_blue = (b > 120 and b > r * 1.15 and r < 165)
            is_red = (r > 120 and r > b * 1.15 and b < 165)
            
            if is_blue or is_red:
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
                found = True
                
    if found:
        left = max(0, left - padding)
        top = max(0, top - padding)
        right = min(w_crop, right + padding)
        bottom = min(h_crop, bottom + padding)
        return (left, top, right, bottom)
    return None

# --- Q4 Prisms Band: y in [30, 240] ---
q4_area = img2.crop((30, 30, 750, 240))
q4_bbox = find_colored_shape_bbox(q4_area)
if q4_bbox:
    bx0, by0, bx1, by1 = q4_bbox
    q4_final = img2.crop((30 + bx0, 30 + by0, 30 + bx1, 30 + by1))
    q4_final.save(os.path.join(output_dir, 'q4_prisms.png'))
    print(f"Perfect Q4 prisms cropped at {(30 + bx0, 30 + by0, 30 + bx1, 30 + by1)} with size {q4_final.size}")

# --- Q5 Pyramids Band: y in [580, 780] ---
q5_area = img2.crop((30, 580, 750, 780))
q5_bbox = find_colored_shape_bbox(q5_area)
if q5_bbox:
    bx0, by0, bx1, by1 = q5_bbox
    q5_final = img2.crop((30 + bx0, 580 + by0, 30 + bx1, 580 + by1))
    q5_final.save(os.path.join(output_dir, 'q5_pyramids.png'))
    print(f"Perfect Q5 pyramids cropped at {(30 + bx0, 580 + by0, 30 + bx1, 580 + by1)} with size {q5_final.size}")
