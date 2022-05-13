"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3002;
const app = (0, express_1.default)();
app.use((req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(PORT, () => console.log(`API listening on port ${PORT}!`));
