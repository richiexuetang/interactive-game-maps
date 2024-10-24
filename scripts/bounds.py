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

base = {
    "bounds": {
        "8": {
            "min_x": 127,
            "min_y": 127,
            "max_x": 8,
            "max_y": 8
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
        }
    }
}

maps = {
    "god-of-war-2018": {
        "helheim": dict(base, **{"subpath": "/default-v2/"}),
        "midgard": dict(base, **{
            "bounds": {
                "15": {
                    "min_x": 16256,
                    "min_y": 16256,
                    "max_x": 16383,
                    "max_y": 16383
                },
            }
        }, **{"subpath": "/default-v3/"}),
        "alfheim": {
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
            },
            "subpath": "/default-v2/"
        },
        "jotunheim": dict(base, **{"subpath": "/default-v2/"}),
        "muspelheim": dict(base, **{"subpath": "/default-v2/"}),
        "niflheim": dict(base, **{"subpath": "/default-v2/"}),
    },
    "god-of-war-ragnarok": {
        "sindris-house": {
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
            },
            "subpath": "/default-v1/"
        },
        "vanaheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "alfheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "muspelheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "midgard": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "svartalfheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "helheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        },
        "niflheim": {
            "subpath": "/default-v1/",
            **dict(ragnarokBounds),
        }
    },
    "black-myth-wukong": {
        "chapter-1": {
            "subpath": "/paper-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        },
        "chapter-2": {
            "subpath": "/paper-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        },
        "chapter-3": {
            "subpath": "/paper-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        },
        "chapter-4": {
            "subpath": "/default-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        },
        "chapter-5": {
            "subpath": "/paper-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        },
        "chapter-6": {
            "subpath": "/paper-v1/",
            **dict({i: base[i] for i in base if i != "8"}),
        }
    },
    "elden-ring": {},
    "witcher-3": {},
    "hogwarts-legacy": {},
    "zelda-tears-of-the-kingdom": {},
}
