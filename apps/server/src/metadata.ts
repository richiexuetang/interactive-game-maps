/* eslint-disable */
export default async () => {
    const t = {
        ["./users/models/user.model"]: await import("./users/models/user.model")
    };
    return { "@nestjs/swagger/plugin": { "models": [], "controllers": [] }, "@nestjs/graphql/plugin": { "models": [[import("./auth/dto/signup.input"), { "SignupInput": { email: {}, password: {}, firstName: { nullable: true }, lastName: { nullable: true } } }], [import("./auth/models/token.model"), { "Token": { accessToken: {}, refreshToken: {} } }], [import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./regions/models/region.model"), { "Region": { slug: {}, title: {}, thumbnailUrl: {}, minZoom: {}, maxZoom: {}, defaultZoom: {}, tilePath: {}, gameSlug: {}, center: {}, order: {} } }], [import("./markers/models/marker-category.model"), { "MarkerCategory": { title: {}, icon: { nullable: true }, template: { nullable: true }, info: { nullable: true }, locations: { nullable: true } } }], [import("./markers/models/media.model"), { "Media": { title: {}, fileName: { nullable: true }, url: { nullable: true }, type: { nullable: true }, mimeType: { nullable: true }, markerLocation: { nullable: true }, markerLocationId: { nullable: true } } }], [import("./markers/models/marker-location.model"), { "MarkerLocation": { title: {}, description: { nullable: true }, latitude: {}, longitude: {}, category: { nullable: true }, categoryId: { nullable: true }, region: { nullable: true }, regionSlug: { nullable: true }, media: { nullable: true } } }], [import("./users/models/user.model"), { "User": { email: {}, firstName: { nullable: true }, lastName: { nullable: true }, role: {}, locations: { nullable: true } } }], [import("./auth/models/auth.model"), { "Auth": { user: { type: () => t["./users/models/user.model"].User } } }], [import("./auth/dto/login.input"), { "LoginInput": { email: {}, password: {} } }], [import("./auth/dto/refresh-token.input"), { "RefreshTokenInput": { token: {} } }], [import("./users/dto/change-password.input"), { "ChangePasswordInput": { oldPassword: {}, newPassword: {} } }], [import("./users/dto/update-user.input"), { "UpdateUserInput": { firstName: { nullable: true }, lastName: { nullable: true } } }], [import("./markers/models/marker-group.model"), { "MarkerGroup": { title: {}, game: { nullable: true }, gameSlug: { nullable: true }, categories: { nullable: true } } }], [import("./games/models/game.model"), { "Game": { slug: {}, title: {}, thumbnailUrl: {}, previewUrl: {}, iconUrl: {}, description: {}, regions: { nullable: true }, groups: { nullable: true } } }], [import("./regions/dto/region-order.input"), { "RegionOrder": { field: {} } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }]] } };
};