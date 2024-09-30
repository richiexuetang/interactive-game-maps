import numpy as np
from urllib.request import urlopen
import cv2
import os
current_path = os.getcwd()
try:
    os.mkdir(current_path + "\\apps\\ui\\public\\tiles\\")
except FileExistsError:
    pass


zoom_start = 13
zoom_end = 14

x_low_map = {
    8: 8,
    9: 16,
    10: 32,
    11: 64,
    12: 128,
    13: 256,
    14: 512,
}

x_high_map = {
    8: 8,
    9: 17,
    10: 34,
    11: 68,
    12: 140,
    13: 277,
    14: 554,
}
y_low_map = {
    8: 8,
    9: 16,
    10: 32,
    11: 64,
    12: 128,
    13: 256,
    14: 512,
}
y_high_map = {
    8: 8,
    9: 17,
    10: 34,
    11: 68,
    12: 136,
    13: 277,
    14: 554,
}
# x_low_map = {
#     8: 127,
#     9: 254,
#     10: 508,
#     11: 1016,
#     12: 2034,
#     13: 4065,
#     14: 8177,
#     15: 16294,
#     16: 32721
# }

# x_high_map = {
#     8: 127,
#     9: 255,
#     10: 511,
#     11: 1023,
#     12: 2046,
#     13: 4095,
#     14: 8184,
#     15: 16360,
#     16: 32731
# }
# y_low_map = {
#     8: 127,
#     9: 254,
#     10: 508,
#     11: 1016,
#     12: 2034,
#     13: 4065,
#     14: 8145,
#     15: 16271,
#     16: 32605
# }
# y_high_map = {
#     8: 127,
#     9: 255,
#     10: 511,
#     11: 1023,
#     12: 2046,
#     13: 4095,
#     14: 8173,
#     15: 16376,
#     16: 32682
# }

# regions = [ "hyrule" ]
regions = [
    "white-orchard",
    "velen-novigrad",
    "skellige",
    "kaer-morhen",
    "toussaint",
    # "fablesphere",
    "isle-of-mists"
]

games = [
    "witcher-3",
    "zelda-tears-of-the-kingdom",
    "god-of-war-ragnarok",
    "black-myth-wukong",
    "elden-ring",
    "hogwarts-legacy",
]

dir_name = ("/Users/richardtang/Desktop/repos/ritcher-map-v2/"
            "apps/ui/public/tiles")

game_name = "witcher-3"

base_uri = "https://tiles.mapgenie.io/games/"


def downloadImage(url, directory):
    try:
        print("Downloading %s" % (url))
        resp = urlopen(url)
        image = np.asarray(bytearray(resp.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        cv2.imwrite(directory, image)
    except Exception as error:
        print(error)


for z in range(zoom_start, zoom_end+1):
    for x in range(x_low_map[z], x_high_map[z] + 1):
        for y in range(y_low_map[z], y_high_map[z] + 1):
            for region in regions:
                uri = (base_uri + game_name + "/" + region + "/default/"
                       + str(z) + "/" + str(x) + "/" + str(y) + ".png")

                directory = "{dir}/{game_name}/{region}/{z}/{y}".format(
                    dir=dir_name, region=region, z=z, y=y, game_name=game_name)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                downloadImage(uri, directory + "/{x}.jpg".format(x=x))
