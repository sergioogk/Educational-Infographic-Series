# Contact sheet helper: python3 tools/sheet.py out.png cols width file1 file2 ...
import sys
from PIL import Image
out, cols, tw = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
ims = [Image.open(f).convert('RGB') for f in sys.argv[4:]]
th = max(int(im.height * tw / im.width) for im in ims)
rows = (len(ims) + cols - 1) // cols
sheet = Image.new('RGB', (cols * tw + (cols + 1) * 8, rows * th + (rows + 1) * 8), (255, 255, 255))
for i, im in enumerate(ims):
    im = im.resize((tw, int(im.height * tw / im.width)), Image.LANCZOS)
    sheet.paste(im, (8 + (i % cols) * (tw + 8), 8 + (i // cols) * (th + 8)))
sheet.save(out)
