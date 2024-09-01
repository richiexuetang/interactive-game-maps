import urllib.request
import os

zoom = 14
x_low, x_high = 8130, 8179
y_low, y_high = 8130, 8179

for x in range(x_low, x_high+1):
    for y in range(y_low, y_high+1):
        uri = 'https://tiles.mapgenie.io/games/black-myth-wukong/chapter-2/paper-v1/{zoom}/{x}/{y}.jpg'.format(zoom=zoom, x=x, y=y)
        directory = '/Users/richardtang/Desktop/repos/ritcher-map-v2/tiles/black-myth/chapter-2/{zoom}/{x}'.format(zoom=zoom, x=x)

        if not os.path.exists(directory):
            os.makedirs(directory)
        urllib.request.urlretrieve(uri, directory + "/{y}.jpg".format(y=y))