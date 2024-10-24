import numpy as np
from urllib.request import urlopen
import cv2
import os
from pathlib import Path
from bounds import maps

current_path = os.getcwd()

dir_name = ("/Users/richardtang/Desktop/repos/ritcher-map-v2/"
            "apps/ui/public/tiles/")


def downloadImage(url, directory):
    try:
        print("Downloading %s" % (url))
        resp = urlopen(url)
        image = np.asarray(bytearray(resp.read()), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        cv2.imwrite(directory, image)
    except Exception as error:
        print(error)


def downloadTileImages():
    basePath = "https://tiles.mapgenie.io/games/"

    for game, mapConfig in maps.items():
        for map, mapData in mapConfig.items():
            for zoom, bounds in mapData['bounds'].items():
                for x in range(int(bounds['min_x']),
                               int(bounds['max_x']) + 1):
                    for y in range(int(bounds['min_y']),
                                   int(bounds['max_y']) + 1):
                        uri = basePath + game + '/' + map + \
                            mapData['subpath'] + zoom + '/' + \
                            str(y) + '/' + str(x) + '.jpg'
                        dst = dir_name + game + '/' + map + '/' + zoom + \
                            '/' + str(x)
                        file_path = dst + ".jpg"

                        if not os.path.exists(dst):
                            os.makedirs(dst)

                        if (Path(file_path).is_file()):
                            print(file_path, "exists!")
                        else:
                            downloadImage(uri, dst + '/' + str(y) + ".jpg")


if __name__ == "__main__":
    downloadTileImages()
