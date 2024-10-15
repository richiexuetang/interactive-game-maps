/* eslint-disable */
export default async () => {
    const t = {
        ["./users/models/user.model"]: await import("./users/models/user.model")
    };
    return { "@nestjs/graphql/plugin": { "models": [[import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./games/models/markers/media.model"), { "Media": { url: {}, type: {}, location: { nullable: true }, locationId: { nullable: true } } }], [import("./maps/models/region.model"), { "Region": { coordinates: { nullable: true }, title: {}, mapSlug: {}, slug: {}, centerX: {}, centerY: {} } }], [import("./maps/models/map.model"), { "Map": { slug: {}, title: {}, gameSlug: { nullable: true }, game: { nullable: true }, order: {}, regions: { nullable: true }, locations: { nullable: true }, minZoom: {}, maxZoom: {}, zoom: {}, center: {} } }], [import("./games/models/markers/location.model"), { "Location": { title: {}, description: { nullable: true }, latitude: {}, longitude: {}, category: { nullable: true }, categoryId: { nullable: true }, type: {}, map: {}, mapSlug: {}, media: { nullable: true } } }], [import("./games/models/markers/category.model"), { "Category": { title: {}, icon: {}, info: { nullable: true }, locations: { nullable: true }, defaultHidden: { nullable: true } } }], [import("./games/models/markers/group.model"), { "Group": { title: {}, game: { nullable: true }, gameSlug: { nullable: true }, categories: { nullable: true } } }], [import("./games/models/game.model"), { "Game": { slug: {}, title: {}, maps: { nullable: true }, groups: { nullable: true } } }], [import("./maps/dto/map-order.input"), { "MapOrder": { field: {} } }], [import("./auth/models/token.model"), { "Token": { accessToken: {}, refreshToken: {} } }], [import("./users/models/note-marker.model"), { "NoteMarker": { title: {}, description: {}, mapSlug: {}, map: {}, latitude: {}, longitude: {} } }], [import("./users/models/user.model"), { "User": { id: {}, createdAt: {}, updatedAt: {}, email: {}, username: { nullable: true }, foundMarkers: { nullable: true }, hideFound: {}, noteMarkers: { nullable: true }, favoriteMaps: { nullable: true } } }], [import("./users/dto/add-note.input"), { "AddNoteInput": { email: {}, title: {}, description: {}, mapSlug: {}, latitude: {}, longitude: {} } }], [import("./users/dto/remove-note.input"), { "RemoveNoteInput": { id: {}, email: {} } }], [import("./users/dto/update-found-location.input"), { "UpdateFoundLocationInput": { email: {}, location: {} } }], [import("./users/dto/update-hide-found.input"), { "UpdateHideFoundInput": { email: {}, hide: {} } }], [import("./users/dto/update-note.input"), { "UpdateNoteInput": { id: {}, title: {}, description: {}, latitude: {}, longitude: {} } }], [import("./users/dto/add-favorite.input"), { "AddFavoriteInput": { email: {}, gameSlug: {} } }], [import("./auth/models/auth.model"), { "Auth": { user: { type: () => t["./users/models/user.model"].User } } }], [import("./checklist-guide/models/checklist-guide.model"), { "ChecklistGuide": { gameSlug: {}, title: {}, game: {}, categories: { nullable: true } } }], [import("./auth/dtos/refresh-token.input"), { "RefreshTokenInput": { token: {} } }]] } };
};