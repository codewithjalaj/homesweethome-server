"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Viewer_1 = require("./Viewer");
const User_1 = require("./User");
const Listing_1 = require("./Listing");
const Booking_1 = require("./Booking");
exports.resolvers = lodash_merge_1.default(Viewer_1.ViewerResolver, User_1.UserResolvers, Listing_1.ListingResolvers, Booking_1.BookingResolvers);
