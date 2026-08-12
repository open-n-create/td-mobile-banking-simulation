from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/upload/search_images/3xCNgPCboXHs.jpg')
output_dir = Path('/home/ubuntu/td-mobile-banking-app/assets/images')
image = Image.open(source).convert('RGBA')
for filename in ('icon.png', 'splash-icon.png', 'favicon.png', 'android-icon-foreground.png'):
    image.save(output_dir / filename, format='PNG', optimize=True)
print('Converted TD icon assets to PNG')
