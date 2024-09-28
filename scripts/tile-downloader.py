import urllib.request
import os

zoom_start = 15
zoom_end = 16

x_low_map = {
    8: 127,
    9: 254,
    10: 508,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8177,
    15: 16294,
    16: 32721
}

x_high_map = {
    8: 127,
    9: 255,
    10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8184,
    15: 16360,
    16: 32731
}
y_low_map = {
    8: 127,
    9: 254,
    10: 508,
    11: 1016,
    12: 2034,
    13: 4065,
    14: 8145,
    15: 16271,
    16: 32605
}
y_high_map = {
    8: 127,
    9: 255,
    10: 511,
    11: 1023,
    12: 2046,
    13: 4095,
    14: 8173,
    15: 16376,
    16: 32682
}

regions = [ "hyrule" ]
# regions = ["vanaheim", "alfheim", "muspelheim", "midgard", "asgard", "svartalfheim", "jotunheim", "helheim", "niflheim"]
# regions = ["world/default-v2", "hogwarts/default-v1", "hogsmeade/derp-v1"]
dir_name = "/Users/richardtang/Desktop/repos/ritcher-map-v2/apps/ui/public/tiles"
game_name = "zelda-tears-of-the-kingdom"

for z in range(zoom_start, zoom_end+1):
    for x in range(x_low_map[z], x_high_map[z] + 1):
        for y in range(y_low_map[z], y_high_map[z] + 1):
            for region in regions:
                # uri = "https://tiles.mapgenie.io/games/black-myth-wukong/{region}/paper-v1/{z}/{x}/{y}.jpg".format(region=region, z=z, x=x, y=y)
                # uri = "https://tiles.mapgenie.io/games/{game_name}/{region}/default-v3/{z}/{y}/{x}.jpg".format(region=region, z=z, x=x, y=y, game_name=game_name)
                uri = "https://tiles.mapgenie.io/games/zelda-tears-of-the-kingdom/{region}/default-v2/{z}/{y}/{x}.jpg".format(region=region, z=z, x=x, y=y)
                # uri = "https://tiles.mapgenie.io/games/{game_name}/{region}/{z}/{x}/{y}.jpg".format(region=region, z=z, x=x, y=y, game_name=game_name)
                # uri = "https://tiles.mapgenie.io/games/god-of-war-ragnarok/{region}/default-v1/{z}/{x}/{y}.jpg".format(region=region, z=z, x=x, y=y)
                # uri = "https://tiles.mapgenie.io/games/{game_name}/{region}/asdnlkkveao-v1/{z}/{y}/{x}.jpg".format(region=region, z=z, x=x, y=y, game_name=game_name)
                directory = '{dir}/{game_name}/{region}/{z}/{x}'.format(dir=dir_name, region=region, z=z, y=y, x=x, game_name=game_name)

                if not os.path.exists(directory):
                    os.makedirs(directory)
                print(x, y, z)
                urllib.request.urlretrieve(uri, directory + "/{y}.jpg".format(x=x, y=y))