import os
from rembg import remove
from PIL import Image
import io

src_dir = 'e:/facette/public/assets/images/hero'
out_dir = 'e:/facette/public/assets/images/hero'

images = [
    'ring-master.jpg',
    'ring-three-quarter.jpg',
    'ring-front.jpg',
    'ring-detail.jpg',
    'ring-side.jpg',
    'ring-top.jpg',
    'ring-rear.jpg'
]

for img_name in images:
    src_path = os.path.join(src_dir, img_name)
    out_name = img_name.replace('.jpg', '.png')
    out_path = os.path.join(out_dir, out_name)
    
    if os.path.exists(src_path):
        print(f"Processing {img_name}...")
        with open(src_path, 'rb') as i:
            input_data = i.read()
            output_data = remove(input_data)
        
        with open(out_path, 'wb') as o:
            o.write(output_data)
        print(f"Saved {out_name}")
    else:
        print(f"File not found: {src_path}")
