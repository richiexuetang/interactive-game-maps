import numpy as np
from urllib.request import urlopen
import cv2
import os
from pathlib import Path
current_path = os.getcwd()

zoom_start = 15
zoom_end = 15

lows = {
    8: 127,
    9: 254,
    10: 508,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8136,
    15: 16293,
    16: 32610,
    17: 65250
}

highs = {
    8: 127,
    9: 255,
    10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8184,
    15: 16360,
    16: 32668,
    17: 65346
}

y_lows = {
    9: 254,
    10: 508,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8136,
    15: 16293,
    16: 32548,
    17: 65095
}
y_highs = {
    9: 255,
    10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8184,
    15: 16360,
    16: 32722,
    17: 65445
}
regions = [
    # "hyrule"
    # "white-orchard",
    # "velen-novigrad",
    # "skellige",
    # "kaer-morhen",
    # "toussaint",
    # "fablesphere",
    # "isle-of-mists"
    # "chapter-1",
    # "chapter-2",
    # "chapter-3",
    # "chapter-4",
    # "chapter-5",
    # "chapter-6",
    "sindris-house"
]
# rdr2/world/atlas-v1/
dir_name = ("/Users/richardtang/Desktop/repos/ritcher-map-v2/"
            "apps/ui/public/tiles")
            
game_name = "baldurs-gate-3"

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
                uri = (base_uri + game_name + "/" + region 
                       + str(z) + "/" + str(x) + "/" + str(y) + ".jpg")

                directory = "{dir}/{game_name}/{region}/{z}/{x}".format(
                    dir=dir_name, region=region, z=z, x=x, game_name=game_name)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                file_path = directory + str(y) + ".jpg"
                if (Path(file_path).is_file()):
                    print(file_path, "exists!")
                else:
                    downloadImage(uri, directory + "/{y}.jpg".format(y=y))
