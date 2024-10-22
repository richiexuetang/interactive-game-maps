import numpy as np
from urllib.request import urlopen
import cv2
import os
from pathlib import Path
current_path = os.getcwd()

zoom_start = 1
zoom_end = 7

lows = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    # 8: 127,
    8: 7,
    # 9: 254,
    9: 17,
    # 10: 508,
    10: 31,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8136,
    15: 16293,
    16: 32683,
    17: 65095
}

highs = {
    1: 1,
    2: 3,
    3: 7,
    4: 15,
    5: 31,
    6: 63,
    7: 127,
    8: 8,
    # 8: 127,
    # 9: 255,
    9: 17,
    # 10: 511,
    10: 35,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8184,
    15: 16360,
    16: 32689,
    17: 65444
}

y_lows = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 7,
    9: 15,
    # 9: 254,
    # 10: 508,
    10: 31,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8136,
    15: 16293,
    16: 32548,
    17: 65095
}
y_highs = {
    1: 1,
    2: 2,
    3: 5,
    4: 11,
    5: 23,
    6: 46,
    7: 92,
    8: 8,
    9: 17,
    # 9: 255,
    10: 35,
    # 10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8184,
    15: 16360,
    16: 32731,
    17: 65445
}
regions = [
    # "hyrule/",
    # "white-orchard",
    # "velen-novigrad",
    # "skellige",
    # "kaer-morhen",
    # "toussaint",
    # "chapter-1",
    # "chapter-2",
    # "chapter-3",
    # "chapter-4",
    # "chapter-5",
    # "chapter-6",
    # "sindris-house/",
    # "vanaheim/",
    # "alfheim/",
    # "muspelheim/",
    # "midgard/",
    # "niflheim/",
    # "svartalfheim/",
    # "helheim/",
    # "world/default-v2/",
    # "hogwarts/default-v1/",
    # "hogsmeade/derp-v1/",
    "world/atlas-dark-v1/"
]
# rdr2/world/atlas-v1/
dir_name = ("/Users/richardtang/Desktop/repos/ritcher-map-v2/"
            "apps/ui/public/tiles")
            
game_name = "rdr2"

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

                directory = "{dir}/{game_name}/{region}/{z}/{y}".format(
                    dir=dir_name, region=region, z=z, y=y, game_name=game_name)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                file_path = directory + str(y) + ".jpg"
                if (Path(file_path).is_file()):
                    print(file_path, "exists!")
                else:
                    downloadImage(uri, directory + "/{x}.jpg".format(x=x))
