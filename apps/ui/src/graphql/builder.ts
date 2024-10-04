/* eslint-disable no-unused-vars */
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import PrismaUtils from "@pothos/plugin-prisma-utils";
import RelayPlugin from "@pothos/plugin-relay";
// import { createContext } from "./context";
import prisma from "../lib/prisma";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin, PrismaUtils],
  prisma: {
    client: prisma,
  },
  // @ts-ignore
  defaultFieldNullability: false,
});

const Game = builder.prismaObject("Game", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    slug: t.exposeString("slug"),
    maxZoom: t.exposeInt("maxZoom"),
    minZoom: t.exposeInt("minZoom"),
    zoom: t.exposeInt("zoom"),
    center: t.field({
      type: ["Float"],
      resolve: (parent) => parent.center as any,
    }),
    maps: t.relation("maps"),
    groups: t.relation("groups"),
  }),
});

const Map = builder.prismaObject("Map", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    slug: t.exposeString("slug"),
    tilePath: t.exposeString("tilePath"),
    order: t.exposeInt("order"),
    gameSlug: t.exposeString("gameSlug"),
    thumbnailUrl: t.exposeString("thumbnailUrl", { nullable: true }),
    game: t.relation("game"),
    locations: t.relation("locations", { nullable: true }),
    regions: t.relation("regions", { nullable: true }),
  }),
});

const Group = builder.prismaObject("Group", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    gameSlug: t.exposeString("gameSlug"),
    game: t.relation("game"),
    expandable: t.exposeBoolean("expandable"),
    categories: t.relation("categories"),
  }),
});

const Category = builder.prismaObject("Category", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    icon: t.exposeString("icon"),
    info: t.exposeString("info", { nullable: true }),
    isChecklist: t.exposeBoolean("isChecklist"),
    defaultHidden: t.exposeBoolean("defaultHidden"),
    group: t.relation("group"),
  }),
});

const Location = builder.prismaObject("Location", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    latitude: t.field({
      type: "Float",
      resolve: (parent) => parent.latitude as any,
    }),
    longitude: t.field({
      type: "Float",
      resolve: (parent) => parent.longitude as any,
    }),
    category: t.relation("category"),
    map: t.relation("map"),
    mapSlug: t.exposeString("mapSlug"),
    media: t.relation("media", { nullable: true }),
    categoryId: t.exposeInt("categoryId"),
    // category: t.relation("category"),
    description: t.field({
      type: "String",
      nullable: true,
      resolve: () => null,
    }),
  }),
});

const Region = builder.prismaObject("Region", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    // @ts-ignore
    coordinates: t.expose("coordinates", {
      type: [[["Float"]]],
    }),
  }),
});

const Media = builder.prismaObject("Media", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    url: t.exposeString("url"),
    type: t.exposeString("type"),
    location: t.relation("location"),
  }),
});

const User = builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email"),
    username: t.exposeString("username", { nullable: true }),
    hideFound: t.exposeBoolean("hideFound"),
    noteMarkers: t.relation("noteMarkers"),
    foundLocations: t.field({
      type: ["Int"],
      resolve: async (parent) => {
        return parent.foundLocations;
      },
    }),
  }),
});

const NoteMarker = builder.prismaObject("NoteMarker", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    title: t.exposeString("title"),
    latitude: t.field({
      type: "Float",
      resolve: (parent) => parent.latitude as any,
    }),
    longitude: t.field({
      type: "Float",
      resolve: (parent) => parent.longitude as any,
    }),
    map: t.relation("map"),
    mapSlug: t.exposeString("mapSlug"),
    description: t.exposeString("description"),
    userEmail: t.exposeString("userEmail"),
    user: t.relation("user"),
  }),
});

builder.queryFields((t) => ({
  games: t.field({
    type: [Game],
    resolve: () => prisma.game.findMany({}),
  }),
}));

builder.queryField("game", (t) =>
  t.prismaField({
    type: "Game",
    nullable: true,
    args: {
      slug: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, args, _info) =>
      prisma.game.findUnique({
        ...query,
        where: {
          slug: args.slug,
        },
      }),
  })
);

builder.queryType({
  fields: (t) => ({
    maps: t.prismaField({
      type: [Map],
      args: {
        slug: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) =>
        prisma.map.findMany({
          ...query,
          where: { gameSlug: args.slug },
        }),
    }),
    map: t.prismaField({
      type: Map,
      args: {
        slug: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) =>
        prisma.map.findUniqueOrThrow({
          ...query,
          where: { slug: args.slug },
        }),
    }),
    region: t.prismaField({
      type: [Region],
      nullable: true,
      args: {
        slug: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) => {
        const subRegions: any[] =
          await prisma.$queryRaw`SELECT ST_AsGeoJSON(coordinates) as coordinates, title, "mapSlug" FROM "Region" WHERE "mapSlug"::text = ${args.slug}`;

        const result = [];
        for (let i = 0; i < subRegions?.length; i++) {
          const coords = JSON.parse(subRegions[i].coordinates as any);
          result.push({ ...subRegions[i], coordinates: coords.coordinates });
        }
        return result;
      },
    }),

    user: t.prismaField({
      type: User,
      args: {
        email: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) =>
        prisma.user.findUnique({
          ...query,
          where: { email: args.email },
          include: { noteMarkers: true },
        }),
    }),
    gameMap: t.prismaField({
      type: Game,
      args: {
        slug: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) => {
        const map = await prisma.map.findUniqueOrThrow({
          where: { slug: args.slug },
        });

        return prisma.game.findUniqueOrThrow({
          ...query,
          where: { slug: map.gameSlug },
          include: { groups: { include: { categories: true } } },
        });
      },
    }),
  }),
});

builder.mutationType({
  fields: (t) => ({
    createUser: t.field({
      type: User,
      args: {
        email: t.arg.string({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        const existing = await prisma.user.findUnique({
          where: { email: args.email },
          include: { noteMarkers: true },
        });

        if (existing) {
          return existing;
        }

        return await prisma.user.create({
          data: {
            email: args.email,
          },
        });
      },
    }),
    addFound: t.field({
      type: User,
      args: {
        email: t.arg.string({ required: true }),
        location: t.arg.int({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        const user = await prisma.user.findUniqueOrThrow({
          where: { email: args.email },
          include: { noteMarkers: true },
        });
        const locations = user.foundLocations;
        const newLocations = [...locations, args.location];
        return await prisma.user.update({
          data: { foundLocations: newLocations },
          where: {
            email: args.email,
          },
        });
      },
    }),
    removeNoteMarker: t.field({
      type: NoteMarker,
      args: {
        id: t.arg.int({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        return await prisma.noteMarker.delete({
          where: {
            id: args.id,
          },
        });
      },
    }),
    removeFound: t.field({
      type: User,
      args: {
        location: t.arg.int({ required: true }),
        email: t.arg.string({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        const user = await prisma.user.findUniqueOrThrow({
          where: { email: args.email },
        });
        const locations = user.foundLocations;
        const newLocations = locations.filter(
          (location) => location !== args.location
        );
        return await prisma.user.update({
          data: { foundLocations: newLocations },
          where: {
            email: args.email,
          },
        });
      },
    }),
    updateNoteMarker: t.field({
      type: NoteMarker,
      args: {
        id: t.arg.int({ required: true }),
        title: t.arg.string({ required: true }),
        description: t.arg.string({ required: true }),
        latitude: t.arg.float({ required: true }),
        longitude: t.arg.float({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        const { id, ...rest } = args;
        return await prisma.noteMarker.update({
          where: {
            id,
          },
          data: {
            ...rest,
          },
        });
      },
    }),
    toggleHideFoundSetting: t.field({
      type: User,
      args: {
        email: t.arg.string({ required: true }),
        hide: t.arg.boolean({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        return await prisma.user.update({
          data: { hideFound: args.hide },
          where: {
            email: args.email,
          },
        });
      },
    }),
    addNoteMarker: t.field({
      type: NoteMarker,
      args: {
        email: t.arg.string({ required: true }),
        title: t.arg.string({ required: true }),
        description: t.arg.string({ required: true }),
        mapSlug: t.arg.string({ required: true }),
        latitude: t.arg.float({ required: true }),
        longitude: t.arg.float({ required: true }),
      },
      resolve: async (_root, args, context, info) => {
        const { mapSlug, email, ...noteData } = args;
        return await prisma.noteMarker.create({
          data: {
            ...noteData,
            map: { connect: { slug: mapSlug } },
            user: { connect: { email } },
          },
        });
      },
    }),
  }),
});
