import urllib.request
import os

zoom_start = 11
zoom_end = 13

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

# "fablesphere"
regions = [ "04_ziyunshan"]
game = "elden-ring"
dir_name = "/Users/richardtang/Desktop/repos/ritcher-map-v2/apps/ui/public/tiles"
for z in range(zoom_start, zoom_end+1):
    for x in range(x_low_map[z], x_high_map[z] + 1):
        for y in range(y_low_map[z], y_high_map[z] + 1):
            for region in regions:
            #  https://tiles.mapgenie.io/games/elden-ring/the-lands-between/default-v3
            # https://tiles.mapgenie.io/games/zelda-tears-of-the-kingdom/{region}/default-v2/{z}/{y}/{x}.jpg
            # https://tiles.mapgenie.io/games/witcher-3/white-orchard/default/
            # https://tiles.mapgenie.io/games/elden-ring/the-shadow-lands/asdnlkkveao-v1
                uri = "https://image.gamersky.com/webimg13/db/game_map/black_myth_wukong/{region}/{z}/{y}_{x}.webp".format(region=region, z=z, x=x, y=y)
                directory = '{dir}/black-myth-wukong/{region}/{z}/{x}'.format(game=game, dir=dir_name, region=region, z=z, x=x)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                print(x, y, z, region)
                urllib.request.urlretrieve(uri, directory + "/{y}.jpg".format(y=y))