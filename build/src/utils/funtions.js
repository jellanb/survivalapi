"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPrefix = void 0;
const withPrefix = (prefix) => (message) => `${prefix} ${message}`;
exports.withPrefix = withPrefix;
