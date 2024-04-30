import { handler } from "./build/handler.js";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
app.use(express.json());

// Create socket.io server
const server = createServer(app);
const socket = new Server(server, { cookie: true });

const modes = new Map([
    ["trumps", {
        defaultState: {

        }
    }]
]);
const clients = new Map();
const rooms = new Map();
const joinableRooms = [
    {
        "id": "1234",
        "players": ["player1", "player2"]
    }
];

class Room {
    constructor(id, mode, host) {
        this.id = id;
        this.mode = mode;
        this.users = [];
        this.state = {};
        this.addUser(host);
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }

        if (this.users.length === 0) {
            rooms.delete(this.id);
        }
    }      
}

socket.on("connection", async (client) => {
    console.log("Client connected");
    client.emit("joinableRooms", joinableRooms);

    client.on("create", (user, mode) => {
        if (user == "") {
            user = "user" + Math.floor(Math.random() * 1000);
        }

        console.log("Creating room.");
        if (!modes.has(mode)) {
            client.emit("room", { status: 400, body: "Invalid mode" });
            return;
        }
        let roomID = uuidv4();
        let attemtps = 0;

        while (rooms.has(roomID) && attemtps < 10) {
            roomID = uuidv4();
            attemtps++;
        }

        if (rooms.has(roomID)) {
            client.emit("room", { status: 303, body: "Room creation timed out" });
            return;
        }
        roomID = roomID.toString().substring(0, 5);

        const room = new Room(roomID, mode, user);
        rooms.set(roomID, room);
        client.join(roomID);
        client.emit("room", { status: 201, body: {
            room: room,
            host: true,
            user: user
        } });
        console.log("Room created. " + roomID);
    });

    client.on("join", (user, roomID) => {
        if (rooms.has(roomID)) {
            client.join(roomID);
            client.emit("room", { status: 200, body: rooms.get(roomID) });
            return;
        }
        client.emit("room", { status: 404, body: "Room not found" });  
    });


    client.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

app.use(handler);

// 8080 is HTTPS port, and used by Azure App Service
const port = 8080;
server.listen(port, () => {
  console.log(`Server is correctly running on port ${port}`);
});