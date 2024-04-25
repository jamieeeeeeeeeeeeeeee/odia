import { handler } from "./build/handler.js";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
app.use(express.json());

// Create socket.io server
const server = createServer(app);
const socket = new Server(server, { cors: { origin: "*" }, cookie: true });

const modes = new Map([
    ["trumps", {
        defaultState: {

        }
    }]
]);
const rooms = new Map();

socket.on("connection", async (client) => {
    console.log("Client connected");

    client.on("join", (roomID) => {
        if (rooms.has(roomID)) {
            client.join(roomID);
            client.emit("room", { http: 200, info: rooms.get(roomID) });
            return;
        }
        client.emit("room", { http: 404, info: "Room not found" });  
    });

    client.on("create", (mode) => {
        if (!modes.has(mode)) {
            client.emit("room", { http: 400, info: "Invalid mode" });
            return;
        }
        let roomID = uuidv4();
        let attemtps = 0;

        while (rooms.has(roomID) && attemtps < 10) {
            roomID = uuidv4();
            attemtps++;
        }

        if (rooms.has(roomID)) {
            client.emit("room", { http: 303, info: "Room creation timed out" });
            return;
        }

        rooms.set(roomID, { users: [], host: client.id, mode: mode, state: modes.get(mode).defaultState });
        client.join(roomID);
        client.emit("room", { http: 201, info: roomID });
    });

    client.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

app.use(handler);

/* This is being hosted using Azure Web App Service */
const port = 8080;
app.listen(port, () => {
  console.log(`Server is correctly running on port ${port}`);
});