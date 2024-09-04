import urllib.request
import os

# zoom = 9
# x_low, x_high = 254, 255
# y_low, y_high = 254, 255

# zoom = 10
# x_low, x_high = 508, 511
# y_low, y_high = 508, 511

# zoom = 11
# x_low, x_high = 1017, 1022
# y_low, y_high = 1017, 1022

zoom = 12
x_low, x_high = 2034, 2046
y_low, y_high = 2034, 2045

region_name = 'chapter-2'
for x in range(x_low, x_high+1):
    for y in range(y_low, y_high+1):
        uri = 'https://tiles.mapgenie.io/games/black-myth-wukong/{region}/paper-v1/{zoom}/{x}/{y}.jpg'.format(region=region_name, zoom=zoom, x=x, y=y)
        directory = '/Users/richardtang/Desktop/repos/ritcher-map-v2/tiles/black-myth/{region}/{zoom}/{x}'.format(region=region_name,zoom=zoom, x=x)

        if not os.path.exists(directory):
            os.makedirs(directory)
        urllib.request.urlretrieve(uri, directory + "/{y}.jpg".format(y=y))