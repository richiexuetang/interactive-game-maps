# pip install Pillow
from PIL import Image, ImageFont, ImageDraw

# use a truetype font (.ttf)
font_path = "apps/ui/public/icons/"
font_name = "icon.ttf"
out_path = font_path

# px
font_size = 16
# HEX Black
font_color = "#ffffff"

# Create Font using PIL
font = ImageFont.truetype(font_path+font_name, font_size)

# Copy Desired Characters from Google Fonts Page and Paste into variable
desired_characters = "ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽ" \
                        "abcčćdđefghijklmnopqrsštuvwxyzž" \
                     "1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*"

# Loop through the characters needed and save to desired location
for character in desired_characters:

    # Get text size of character
    width, height = font.getsize(r"\uniE921")
    ascent, descent = font.getmetrics()
    print(ascent, descent)

    # Create PNG Image with that size
    # img = Image.new("RGBA", (width, height))
    img = Image.new(mode='L', size=(width, height), color=224)
    draw = ImageDraw.Draw(img)

    draw.line([0, ascent, 127, ascent], fill=128)
    draw.line([0, descent, 127, descent], fill=128)

    # Draw the character
    draw.text((-2, 0), r"\uniE921", font=font)

    # Save the character as png
    try:
        img.save(out_path + str(ord(character)) + ".png")
    except Exception:
        print(f"[-] Couldn't Save:\t{character}")
