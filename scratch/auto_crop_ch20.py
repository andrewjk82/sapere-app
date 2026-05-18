import os
from PIL import Image, ImageChops

base_dir = '/Users/andrewkim/.gemini/antigravity/brain/004064f3-b1b8-47fd-879a-3adff866d1b9'
output_dir = '/Users/andrewkim/Desktop/sapere1/public/images/ch20'
os.makedirs(output_dir, exist_ok=True)

img = Image.open(os.path.join(base_dir, 'media__1779091135905.png'))
w, h = img.size # 758, 1024

def find_content_bbox(img_crop, padding=6):
    # Convert crop to grayscale
    gray = img_crop.convert('L')
    # Find pixels that are not white (intensity < 250)
    # Let's find coordinates of all pixels that are drawn (intensity < 240)
    w_crop, h_crop = gray.size
    left, top, right, bottom = w_crop, h_crop, 0, 0
    found = False
    for y in range(h_crop):
        for x in range(w_crop):
            val = gray.getpixel((x, y))
            # We want to ignore the question letters like 'a', 'b', 'c', 'd', 'e', 'f', 'g'
            # and ignore textbook header/footer text if any.
            # Usually, the blue/red lines of the shapes have very distinct colors or are centrally located.
            # Let's count any pixel that is non-white
            if val < 245:
                # To filter out label text like 'a', 'b', 'c' which is usually at the top-left of the cell:
                # if x < 25 and y < 25, we can optionally skip it, but let's see.
                # Actually, let's just find the bounding box of the solid blue/red drawing.
                # Blue lines are highly colored (R < 150, G < 180, B > 200) or red dashed lines (R > 200, G < 100, B < 100).
                # Let's check color distance from white (255, 255, 255)
                rgb = img_crop.getpixel((x, y))
                dist = (255 - rgb[0])**2 + (255 - rgb[1])**2 + (255 - rgb[2])**2
                if dist > 800: # Significant color distance from white
                    # Ignore the small question label at the very top-left corner
                    if x < 40 and y < 45:
                        continue
                    left = min(left, x)
                    top = min(top, y)
                    right = max(right, x)
                    bottom = max(bottom, y)
                    found = True
    
    if found:
        # Apply padding
        left = max(0, left - padding)
        top = max(0, top - padding)
        right = min(w_crop, right + padding)
        bottom = min(h_crop, bottom + padding)
        return (left, top, right, bottom)
    return None

# Let's define the grid boundaries on the page
# Q1: 3 rows, 2 columns of shapes? No, it's:
# Row 1 (a, b, c): y in [20, 150]
# Row 2 (d, e, f): y in [140, 290]

q1_cells = {
    'q1_a': (50, 20, 290, 150),
    'q1_b': (290, 20, 500, 150),
    'q1_c': (500, 20, 710, 150),
    'q1_d': (50, 140, 290, 290),
    'q1_e': (290, 140, 500, 290),
    'q1_f': (500, 140, 710, 290)
}

q2_cells = {
    'q2_a': (50, 290, 290, 430),
    'q2_b': (290, 290, 500, 440),
    'q2_c': (500, 290, 710, 440),
    'q2_d': (50, 430, 290, 570),
    'q2_e': (290, 430, 500, 570)
}

q3_cells = {
    'q3_a': (50, 570, 290, 720),
    'q3_b': (290, 570, 500, 720),
    'q3_c': (500, 570, 710, 730),
    'q3_d': (50, 720, 290, 870),
    'q3_e': (290, 720, 500, 870),
    'q3_f': (500, 720, 710, 870),
    'q3_g': (50, 870, 290, 990)
}

all_cells = {**q1_cells, **q2_cells, **q3_cells}

for name, cell in all_cells.items():
    x0, y0, x1, y1 = cell
    crop_area = img.crop((x0, y0, x1, y1))
    
    # Find precise content bbox within the cropped area
    bbox = find_content_bbox(crop_area)
    if bbox:
        bx0, by0, bx1, by1 = bbox
        # Map back to absolute page coordinates
        abs_bbox = (x0 + bx0, y0 + by0, x0 + bx1, y0 + by1)
        final_crop = img.crop(abs_bbox)
        final_crop.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Cropped {name} perfectly at {abs_bbox} (size: {final_crop.size})")
    else:
        # Fallback to entire cell if detection fails
        crop_area.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Fallback crop for {name} at {cell}")
