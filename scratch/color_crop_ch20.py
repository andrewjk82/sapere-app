import os
from PIL import Image, ImageDraw

base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch20'
os.makedirs(output_dir, exist_ok=True)

img = Image.open(os.path.join(base_dir, 'media__1779091135905.png'))
w, h = img.size # 758, 1024

def find_colored_shape_bbox(img_crop, padding=12):
    w_crop, h_crop = img_crop.size
    left, top, right, bottom = w_crop, h_crop, 0, 0
    found = False
    
    for y in range(h_crop):
        for x in range(w_crop):
            rgb = img_crop.getpixel((x, y))
            r, g, b = rgb[0], rgb[1], rgb[2]
            
            # Skip white/near-white pixels
            if r > 240 and g > 240 and b > 240:
                continue
                
            # Color-based classification:
            # 1. Blue solid lines: high blue, low red
            is_blue = (b > 120 and b > r * 1.15 and r < 160)
            # 2. Red dashed lines: high red, low blue
            is_red = (r > 120 and r > b * 1.15 and b < 160)
            
            if is_blue or is_red:
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
                found = True
                
    if found:
        # Apply padding to ensure no parts are cut off
        left = max(0, left - padding)
        top = max(0, top - padding)
        right = min(w_crop, right + padding)
        bottom = min(h_crop, bottom + padding)
        return (left, top, right, bottom)
    return None

# We can afford to expand the search cells widely, because the color filter will ONLY find the colored shapes!
# E.g., we can search the entire horizontal bands of the page!
# Q1 Band: y in [20, 290]
# Q2 Band: y in [290, 560]
# Q3 Band: y in [560, 990]

q1_cells = {
    'q1_a': (40, 20, 300, 150),
    'q1_b': (280, 20, 510, 150),
    'q1_c': (490, 20, 710, 150),
    'q1_d': (40, 130, 300, 290),
    'q1_e': (280, 130, 510, 290),
    'q1_f': (490, 130, 710, 290)
}

q2_cells = {
    'q2_a': (40, 290, 300, 440),
    'q2_b': (280, 290, 510, 445),
    'q2_c': (490, 290, 710, 440),
    'q2_d': (40, 420, 300, 570),
    'q2_e': (280, 420, 510, 570)
}

q3_cells = {
    'q3_a': (40, 560, 300, 730),
    'q3_b': (280, 560, 510, 730),
    'q3_c': (490, 560, 710, 735),
    'q3_d': (40, 710, 300, 875),
    'q3_e': (280, 710, 510, 875),
    'q3_f': (490, 710, 710, 860),
    'q3_g': (40, 840, 300, 995)
}

all_cells = {**q1_cells, **q2_cells, **q3_cells}

bboxes = {}

for name, cell in all_cells.items():
    x0, y0, x1, y1 = cell
    crop_area = img.crop((x0, y0, x1, y1))
    
    bbox = find_colored_shape_bbox(crop_area)
    if bbox:
        bx0, by0, bx1, by1 = bbox
        abs_bbox = (x0 + bx0, y0 + by0, x0 + bx1, y0 + by1)
        bboxes[name] = abs_bbox
        final_crop = img.crop(abs_bbox)
        final_crop.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Color Cropped {name} perfectly at {abs_bbox} (size: {final_crop.size})")
    else:
        # Fallback
        bboxes[name] = cell
        crop_area.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Fallback crop for {name} at {cell}")

# Save debug image
img_debug = Image.open(os.path.join(base_dir, 'media__1779091135905.png'))
draw = ImageDraw.Draw(img_debug)
for name, box in bboxes.items():
    draw.rectangle(box, outline="red", width=2)
img_debug.save('/Users/andrewkim/Desktop/sapere1/scratch/debug_color_page1.png')
print("Debug color image saved successfully!")
