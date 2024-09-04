/* eslint-disable */
export default async () => {
    const t = {
        ["./users/models/user.model"]: await import("./users/models/user.model")
    };
    return { "@nestjs/swagger/plugin": { "models": [], "controllers": [] }, "@nestjs/graphql/plugin": { "models": [[import("./auth/dto/signup.input"), { "SignupInput": { email: {}, password: {}, firstname: { nullable: true }, lastname: { nullable: true } } }], [import("./auth/models/token.model"), { "Token": { accessToken: {}, refreshToken: {} } }], [import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./posts/models/post.model"), { "Post": { title: {}, content: { nullable: true }, published: {}, author: { nullable: true } } }], [import("./users/models/user.model"), { "User": { email: {}, firstname: { nullable: true }, lastname: { nullable: true }, role: {}, posts: { nullable: true } } }], [import("./auth/models/auth.model"), { "Auth": { user: { type: () => t["./users/models/user.model"].User } } }], [import("./auth/dto/login.input"), { "LoginInput": { email: {}, password: {} } }], [import("./auth/dto/refresh-token.input"), { "RefreshTokenInput": { token: {} } }], [import("./users/dto/change-password.input"), { "ChangePasswordInput": { oldPassword: {}, newPassword: {} } }], [import("./users/dto/update-user.input"), { "UpdateUserInput": { firstname: { nullable: true }, lastname: { nullable: true } } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }], [import("./posts/args/post-id.args"), { "PostIdArgs": { postId: { type: () => String } } }], [import("./posts/args/user-id.args"), { "UserIdArgs": { userId: { type: () => String } } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }], [import("./posts/models/post-connection.model"), { "PostConnection": {} }], [import("./posts/dto/post-order.input"), { "PostOrder": { field: {} } }], [import("./posts/dto/createPost.input"), { "CreatePostInput": { content: {}, title: {} } }], [import("./games/models/game.model"), { "Game": { slug: {}, title: {}, thumbnailUrl: {} } }], [import("./regions/models/region.model"), { "Region": { slug: {}, title: {}, thumbnailUrl: {}, minZoom: {}, maxZoom: {}, defaultZoom: {}, tilePath: {}, gameSlug: {} } }], [import("./markers/models/marker-location.model"), { "MarkerLocation": { title: {}, description: { nullable: true }, latitude: {}, longitude: {}, region: { nullable: true }, regionSlug: { nullable: true } } }], [import("./markers/models/marker-group.model"), { "MarkerGroup": { title: {}, published: {}, game: { nullable: true }, gameSlug: { nullable: true }, categories: { nullable: true } } }], [import("./markers/models/marker-category.model"), { "MarkerCategory": { title: {}, icon: { nullable: true }, template: {}, markerGroup: { nullable: true }, markerGroupId: { nullable: true } } }]] } };
};