totk = {
    "min_zoom": 8,
    "max_zoom": 17,
    "bounds": {
        "8": {
            "min_x": 127,
            "min_y": 127,
            "max_x": 127,
            "max_y": 127
        },
        "9": {
            "min_x": 254,
            "min_y": 254,
            "max_x": 255,
            "max_y": 255
        },
        "10": {
            "min_x": 508,
            "min_y": 508,
            "max_x": 511,
            "max_y": 511
        },
        "11": {
            "min_x": 1016,
            "min_y": 1016,
            "max_x": 1023,
            "max_y": 1023
        },
        "12": {
            "min_x": 2032,
            "min_y": 2032,
            "max_x": 2047,
            "max_y": 2047
        },
        "13": {
            "min_x": 4064,
            "min_y": 4064,
            "max_x": 4095,
            "max_y": 4095
        },
        "14": {
            "min_x": 8128,
            "min_y": 8128,
            "max_x": 8191,
            "max_y": 8191
        },
        "15": {
            "min_x": 16256,
            "min_y": 16256,
            "max_x": 16383,
            "max_y": 16383
        },
        "16": {
            "min_x": 32512,
            "min_y": 32512,
            "max_x": 32767,
            "max_y": 32767
        },
        "17": {
            "min_x": 65024,
            "min_y": 65024,
            "max_x": 65535,
            "max_y": 65535
        },
    }
}

# Ragnarok
ragnarokBounds = {
    "min_zoom": 9,
    "bounds": {
        "9": {
            "min_x": 254,
            "min_y": 254,
            "max_x": 255,
            "max_y": 255
        },
        "10": {
            "min_x": 508,
            "min_y": 508,
            "max_x": 511,
            "max_y": 511
        },
        "11": {
            "min_x": 1016,
            "min_y": 1016,
            "max_x": 1023,
            "max_y": 1023
        },
        "12": {
            "min_x": 2032,
            "min_y": 2032,
            "max_x": 2047,
            "max_y": 2047
        },
        "13": {
            "min_x": 4064,
            "min_y": 4064,
            "max_x": 4095,
            "max_y": 4095
        },
    }
}

sindrisHouse = dict(ragnarokBounds.copy(), **{
    "max_zoom": 11,
    "path": "god-of-war-ragnarok/sindris-house/default-v1"
})

vanaheim = dict(ragnarokBounds, **{
    "max_zoom": 13,
    "path": "god-of-war-ragnarok/vanaheim/default-v1"
})

alfheim = dict(ragnarokBounds, **{
    "max_zoom": 13,
    "path": "god-of-war-ragnarok/alfheim/default-v1"
})

muspelheim = dict(ragnarokBounds)

midgard = dict(ragnarokBounds)

svartalfheim = dict(ragnarokBounds)

helheim = dict(ragnarokBounds)

niflheim = dict(ragnarokBounds)

# Witcher 3
whiteOrchard = {
    "min_zoom": 8,
    "max_zoom": 14,
    "bounds": {
        "8": {
            "min_x": 7,
            "min_y": 7,
            "max_x": 8,
            "max_y": 8
        },
        "9": {
            "min_x": 15,
            "min_y": 15,
            "max_x": 17,
            "max_y": 17
        },
        "10": {
            "min_x": 31,
            "min_y": 31,
            "max_x": 35,
            "max_y": 35
        },
        "11": {
            "min_x": 64,
            "min_y": 64,
            "max_x": 69,
            "max_y": 69
        },
        "12": {
            "min_x": 128,
            "min_y": 128,
            "max_x": 141,
            "max_y": 141
        },
        "13": {
            "min_x": 257,
            "min_y": 257,
            "max_x": 277,
            "max_y": 277
        },
        "14": {
            "min_x": 515,
            "min_y": 515,
            "max_x": 555,
            "max_y": 555
        }
    }
}

configs = [
    {"zelda-tears-of-the-kingdom": dict(totk)},
    {"white-orchard": dict(whiteOrchard)},
    sindrisHouse,
    vanaheim,
    alfheim,
    muspelheim,
    midgard,
    svartalfheim,
    helheim,
    niflheim
]

gameMapConfigs = {
    "tiles_base_url": "https://tiles.mapgenie.io",
    "configs": configs
}


def main():
    print(gameMapConfigs)


if __name__ == "__main__":
    main()