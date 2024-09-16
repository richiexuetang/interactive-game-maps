/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger/plugin": { "models": [[import("./users/entities/user.entity"), { "User": { email: { required: true, type: () => String }, firstName: { required: false, type: () => String }, lastName: { required: false, type: () => String }, photoUrl: { required: false, type: () => String }, foundLocations: { required: false, type: () => [Number], nullable: true } } }]], "controllers": [] }, "@nestjs/graphql/plugin": { "models": [[import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./regions/models/sub-region.model"), { "SubRegion": { latitude: {}, longitude: {}, name: {}, parentRegionId: {} } }], [import("./regions/models/region.model"), { "Region": { slug: {}, title: {}, thumbnailUrl: {}, minZoom: {}, maxZoom: {}, zoom: {}, tilePath: {}, gameSlug: {}, center: {}, order: {}, subRegions: {} } }], [import("./markers/models/media.model"), { "Media": { title: {}, fileName: { nullable: true }, url: { nullable: true }, type: { nullable: true }, mimeType: { nullable: true }, markerLocation: { nullable: true }, markerLocationId: { nullable: true } } }], [import("./markers/models/marker-location.model"), { "MarkerLocation": { title: {}, description: { nullable: true }, latitude: {}, longitude: {}, category: { nullable: true }, categoryId: { nullable: true }, region: { nullable: true }, regionSlug: { nullable: true }, media: { nullable: true } } }], [import("./markers/models/marker-category.model"), { "MarkerCategory": { title: {}, icon: { nullable: true }, template: { nullable: true }, info: { nullable: true }, locations: { nullable: true } } }], [import("./markers/models/marker-group.model"), { "MarkerGroup": { title: {}, game: { nullable: true }, gameSlug: { nullable: true }, categories: { nullable: true } } }], [import("./games/models/game.model"), { "Game": { slug: {}, title: {}, thumbnailUrl: {}, previewUrl: {}, iconUrl: {}, description: {}, regions: { nullable: true }, groups: { nullable: true } } }], [import("./regions/dto/region-order.input"), { "RegionOrder": { field: {} } }], [import("./users/models/app-user.model"), { "AppUser": { email: {}, firstName: { nullable: true }, lastName: { nullable: true }, photoUrl: { nullable: true }, foundLocations: { nullable: true } } }], [import("./users/dto/create-user.input"), { "CreateUserInput": { email: {}, firstName: { nullable: true }, lastName: { nullable: true }, photoUrl: { nullable: true } } }], [import("./users/dto/update-found-location.input"), { "UpdateFoundLocationInput": { email: {}, location: {} } }], [import("./users/entities/user.entity"), { "User": { email: {}, firstName: { nullable: true }, lastName: { nullable: true }, photoUrl: { nullable: true }, foundLocations: { nullable: true } } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }]] } };
};