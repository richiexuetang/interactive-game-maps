import numpy as np
from urllib.request import urlopen
import cv2
import os
from pathlib import Path
current_path = os.getcwd()
try:
    os.mkdir(current_path + "\\apps\\ui\\public\\tiles\\")
except FileExistsError:
    pass


zoom_start = 16
zoom_end = 17

lows = {
    # 8: 127,
    8: 8,
    # 9: 254,
    9: 16,
    # 10: 508
    10: 32,
    # 11: 1016
    11: 64,
    # 12: 2034
    12: 128,
    # 13: 4065
    13: 256,
    # 14: 8177
    14: 512,
    15: 16293,
    16: 32610,
    17: 65250
}

highs = {
    #     8: 127
    8: 8,
    #     9: 255
    9: 17,
    #     10: 511
    10: 36,
    #     11: 1023
    11: 70,
    #     12: 2046
    12: 140,
    #     13: 4095
    13: 280,
    #     14: 8184
    14: 561,
    15: 16360,
    16: 32668,
    17: 65346
}

y_lows = {
    16: 32548,
    17: 65095
}
y_highs = {
    16: 32722,
    17: 65445
}
regions = [
    "hyrule"
    # "white-orchard",
    # "velen-novigrad",
    # "skellige",
    # "kaer-morhen",
    # "toussaint",
    # "fablesphere",
    # "isle-of-mists"
]

dir_name = ("/Users/richardtang/Desktop/repos/ritcher-map-v2/"
            "apps/ui/public/tiles")

game_name = "zelda-tears-of-the-kingdom"

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
    for x in range(lows[z], highs[z] + 1):
        for y in range(y_lows[z], y_highs[z] + 1):
            for region in regions:
                uri = (base_uri + game_name + "/" + region + "/default-v2/"
                       + str(z) + "/" + str(x) + "/" + str(y) + ".jpg")

                directory = "{dir}/{game_name}/{region}/{z}/{y}".format(
                    dir=dir_name, region=region, z=z, y=y, game_name=game_name)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                file_path = directory + str(x) + ".jpg"
                if (Path(file_path).is_file()):
                    print(file_path, "exists!")
                else:
                    downloadImage(uri, directory + "/{x}.jpg".format(x=x))
