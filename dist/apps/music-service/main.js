/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/music-service/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/music-service/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.index();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/music-service/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const app_controller_1 = __webpack_require__("./apps/music-service/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/music-service/src/app/app.service.ts");
const artist_module_1 = __webpack_require__("./apps/music-service/src/app/modules/artist/artist.module.ts");
const song_module_1 = __webpack_require__("./apps/music-service/src/app/modules/song/song.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`),
            artist_module_1.ArtistModule,
            song_module_1.SongModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/music-service/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    index() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return {
                message: 'This is only an index',
                links: { songs: '/songs', artists: '/artists' },
            };
        });
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/music-service/src/app/models/artist.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistSchema = exports.ArtistMongo = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let ArtistMongo = class ArtistMongo {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId }),
    tslib_1.__metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], ArtistMongo.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ArtistMongo.prototype, "image", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    tslib_1.__metadata("design:type", String)
], ArtistMongo.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ArtistMongo.prototype, "alias", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: false }),
    tslib_1.__metadata("design:type", Array)
], ArtistMongo.prototype, "songs", void 0);
ArtistMongo = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], ArtistMongo);
exports.ArtistMongo = ArtistMongo;
exports.ArtistSchema = mongoose_1.SchemaFactory.createForClass(ArtistMongo);


/***/ }),

/***/ "./apps/music-service/src/app/models/song.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SongSchema = exports.SongMongo = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let SongMongo = class SongMongo {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId }),
    tslib_1.__metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], SongMongo.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], SongMongo.prototype, "image", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], SongMongo.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", Number)
], SongMongo.prototype, "publish_year", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _b : Object)
], SongMongo.prototype, "artist", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], SongMongo.prototype, "url", void 0);
SongMongo = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], SongMongo);
exports.SongMongo = SongMongo;
exports.SongSchema = mongoose_1.SchemaFactory.createForClass(SongMongo);


/***/ }),

/***/ "./apps/music-service/src/app/modules/artist/artist.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistController = void 0;
const tslib_1 = __webpack_require__("tslib");
const definitions_1 = __webpack_require__("./libs/definitions/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const artist_service_1 = __webpack_require__("./apps/music-service/src/app/modules/artist/artist.service.ts");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.artistService.getAll();
        });
    }
    create(createArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.artistService.create(createArtistDTO);
        });
    }
    updateById(updateArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.artistService.updateById(updateArtistDTO);
        });
    }
    deleteById(deleteArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.artistService.deleteById(deleteArtistDTO);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ArtistController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof definitions_1.CreateArtistDTO !== "undefined" && definitions_1.CreateArtistDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ArtistController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof definitions_1.UpdateArtistDTO !== "undefined" && definitions_1.UpdateArtistDTO) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ArtistController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof definitions_1.DeleteArtistDTO !== "undefined" && definitions_1.DeleteArtistDTO) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ArtistController.prototype, "deleteById", null);
ArtistController = tslib_1.__decorate([
    (0, common_1.Controller)('artists'),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof artist_service_1.ArtistService !== "undefined" && artist_service_1.ArtistService) === "function" ? _h : Object])
], ArtistController);
exports.ArtistController = ArtistController;


/***/ }),

/***/ "./apps/music-service/src/app/modules/artist/artist.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const artist_1 = __webpack_require__("./apps/music-service/src/app/models/artist.ts");
const artist_controller_1 = __webpack_require__("./apps/music-service/src/app/modules/artist/artist.controller.ts");
const artist_service_1 = __webpack_require__("./apps/music-service/src/app/modules/artist/artist.service.ts");
let ArtistModule = class ArtistModule {
};
ArtistModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Artist', schema: artist_1.ArtistSchema }]),
        ],
        controllers: [artist_controller_1.ArtistController],
        providers: [artist_service_1.ArtistService],
    })
], ArtistModule);
exports.ArtistModule = ArtistModule;


/***/ }),

/***/ "./apps/music-service/src/app/modules/artist/artist.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let ArtistService = class ArtistService {
    constructor(artistModel) {
        this.artistModel = artistModel;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.artistModel.find();
            }
            catch (error) {
                return error;
            }
        });
    }
    create(createArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield this.artistModel.create(Object.assign(Object.assign({}, createArtistDTO), { _id: new mongoose_2.Types.ObjectId() }));
                return createdUser;
            }
            catch (error) {
                return error;
            }
        });
    }
    updateById(updateArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!updateArtistDTO._id) {
                throw new common_1.BadRequestException({
                    errors: { message: 'Path `_id` is required.' },
                });
            }
            if (!(yield this.artistModel.findById(new mongoose_2.Types.ObjectId(updateArtistDTO._id)))) {
                throw new common_1.NotFoundException({
                    errors: {
                        message: `An Artist with ${'`'}_id${'`'}: ${'`'}${updateArtistDTO._id}${'`'} was not found`,
                    },
                });
            }
            const { _id } = updateArtistDTO, cleanArtist = tslib_1.__rest(updateArtistDTO, ["_id"]);
            return yield this.artistModel.findByIdAndUpdate(new mongoose_2.Types.ObjectId(updateArtistDTO._id), cleanArtist);
        });
    }
    deleteById(deleteArtistDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!deleteArtistDTO._id) {
                throw new common_1.BadRequestException({
                    errors: { message: 'Path `_id` is required.' },
                });
            }
            if (!(yield this.artistModel.findById(new mongoose_2.Types.ObjectId(deleteArtistDTO._id)))) {
                throw new common_1.NotFoundException({
                    errors: {
                        message: `An Artist with ${'`'}_id${'`'}: ${'`'}${deleteArtistDTO._id}${'`'} was not found`,
                    },
                });
            }
            return yield this.artistModel.findByIdAndDelete(deleteArtistDTO._id);
        });
    }
};
ArtistService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('Artist')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ArtistService);
exports.ArtistService = ArtistService;


/***/ }),

/***/ "./apps/music-service/src/app/modules/song/song.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SongController = void 0;
const tslib_1 = __webpack_require__("tslib");
const definitions_1 = __webpack_require__("./libs/definitions/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const song_service_1 = __webpack_require__("./apps/music-service/src/app/modules/song/song.service.ts");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.songService.getAll();
        });
    }
    create(createSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.songService.create(createSongDTO);
        });
    }
    updateById(updateSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.songService.updateById(updateSongDTO);
        });
    }
    deleteById(deleteSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.songService.deleteById(deleteSongDTO);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], SongController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof definitions_1.CreateSongDTO !== "undefined" && definitions_1.CreateSongDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SongController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof definitions_1.UpdateSongDTO !== "undefined" && definitions_1.UpdateSongDTO) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], SongController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof definitions_1.DeleteSongDTO !== "undefined" && definitions_1.DeleteSongDTO) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SongController.prototype, "deleteById", null);
SongController = tslib_1.__decorate([
    (0, common_1.Controller)('songs'),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof song_service_1.SongService !== "undefined" && song_service_1.SongService) === "function" ? _h : Object])
], SongController);
exports.SongController = SongController;


/***/ }),

/***/ "./apps/music-service/src/app/modules/song/song.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SongModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const song_1 = __webpack_require__("./apps/music-service/src/app/models/song.ts");
const song_controller_1 = __webpack_require__("./apps/music-service/src/app/modules/song/song.controller.ts");
const song_service_1 = __webpack_require__("./apps/music-service/src/app/modules/song/song.service.ts");
let SongModule = class SongModule {
};
SongModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Song', schema: song_1.SongSchema }])],
        controllers: [song_controller_1.SongController],
        providers: [song_service_1.SongService],
    })
], SongModule);
exports.SongModule = SongModule;


/***/ }),

/***/ "./apps/music-service/src/app/modules/song/song.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SongService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let SongService = class SongService {
    constructor(songModel) {
        this.songModel = songModel;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.songModel.find();
            }
            catch (error) { }
        });
    }
    create(createSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.songModel.create(Object.assign(Object.assign({}, createSongDTO), { _id: new mongoose_2.Types.ObjectId() }));
            }
            catch (error) { }
        });
    }
    updateById(updateSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const oldSong = yield this.songModel.findById(updateSongDTO);
                return yield this.songModel.findByIdAndUpdate(updateSongDTO._id, Object.assign({}, updateSongDTO));
            }
            catch (error) { }
        });
    }
    deleteById(deleteSongDTO) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.songModel.findByIdAndDelete(deleteSongDTO._id);
            }
            catch (error) { }
        });
    }
};
SongService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('Song')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SongService);
exports.SongService = SongService;


/***/ }),

/***/ "./libs/definitions/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/song/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/artist/index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/localStorage/index.ts"), exports);


/***/ }),

/***/ "./libs/definitions/src/lib/artist/daos.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/definitions/src/lib/artist/dtos.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/definitions/src/lib/artist/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/artist/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/artist/daos.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/artist/dtos.ts"), exports);


/***/ }),

/***/ "./libs/definitions/src/lib/artist/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/definitions/src/lib/localStorage/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/localStorage/types.ts"), exports);


/***/ }),

/***/ "./libs/definitions/src/lib/localStorage/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOCAL_STORAGE_KEYS = void 0;
var LOCAL_STORAGE_KEYS;
(function (LOCAL_STORAGE_KEYS) {
    LOCAL_STORAGE_KEYS["SONG"] = "song";
    LOCAL_STORAGE_KEYS["SONG_ARRAY"] = "song_array";
    LOCAL_STORAGE_KEYS["ARTIST"] = "artist";
    LOCAL_STORAGE_KEYS["ARTIST_ARRAY"] = "artist_array";
})(LOCAL_STORAGE_KEYS = exports.LOCAL_STORAGE_KEYS || (exports.LOCAL_STORAGE_KEYS = {}));


/***/ }),

/***/ "./libs/definitions/src/lib/song/daos.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/definitions/src/lib/song/dtos.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/definitions/src/lib/song/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/song/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/song/daos.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/definitions/src/lib/song/dtos.ts"), exports);


/***/ }),

/***/ "./libs/definitions/src/lib/song/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/music-service/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('');
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map