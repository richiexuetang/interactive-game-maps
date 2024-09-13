import urllib.request
import os

zoom_start = 9
zoom_end = 15

x_low_map = {
    8: 127,
    9: 254,
    10: 508,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8128,
    15: 16260,
    16: 32512
}
x_high_map = {
    8: 127,
    9: 255,
    10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8191,
    15:16380,
    16: 32767
}
y_low_map = x_low_map
y_high_map = x_high_map

regions = ["hyrule"]

dir_name = "/Users/richardtang/Desktop/repos/ritcher-map-v2/apps/ui/public/tiles"
for region in regions:
    for z in range(zoom_start, zoom_end+1):
        for x in range(x_low_map[z], x_high_map[z] + 1):
            for y in range(y_low_map[z], y_high_map[z] + 1):
                uri = "https://tiles.mapgenie.io/games/zelda-tears-of-the-kingdom/{region}/default-v2/{z}/{y}/{x}.jpg".format(region=region, z=z, x=x, y=y)
                directory = '{dir}/totk/{region}/{z}/{x}'.format(dir=dir_name, region=region, z=z, x=x)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                print(x, y, z)
                urllib.request.urlretrieve(uri, directory + "/{y}.jpg".format(y=y))