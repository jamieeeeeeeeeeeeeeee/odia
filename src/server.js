import { handler } from "../build/handler.js";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
app.use(express.json());

/**
 * Creates an HTTP server for the Express app and sets up a socket.io server
 * with CORS enabled for any origin.
 */
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

/** @type {string[]} List of available game modes. */
const gameModes = ["trumps"];

/** @type {Room[]} Array to store the room instances. */
const rooms = [];

/** @type {Object.<string, string>} Object to keep track of users. */
const users = {};

/**
 * Class to manage a room in the game.
 */
class Room {
  /**
   * Creates an instance of a Room.
   * @param {string} roomId Unique identifier for the room.
   * @param {string} gameMode The game mode of the room.
   * @param {string} host The ID of the host user.
   */
  constructor(roomId, gameMode, host) {
    this.roomId = roomId;
    this.gameMode = gameMode;
    this.users = [];
    this.host = "";
  }

  /**
   * Checks if a user is already in the room.
   * @param {string} userId The ID of the user.
   * @returns {boolean} True if the user is in the room, false otherwise.
   */
  hasUser(userId) {
    return this.users.includes(userId);
  }

  /**
   * Adds a user to the room.
   * @param {string} userId The ID of the user to add.
   */
  addUser(userId) {
    this.users.push(userId);
  }

  getHost() {
    return this.host;
  }

  /**
   * Removes a user from the room.
   * @param {string} userId The ID of the user to remove.
   */
  removeUser(userId) {
    if (this.host === userId) {
      // replace host with another user or null.
      // if null, close the room.
    }

    this.users = this.users.filter((id) => id !== userId);
  }

  /**
   * Closes the room, removing all users.
   */
  close() {
    this.users = [];
  }
}

/**
 * Sets up the connection event for the socket.io server to handle new connections.
 * @param {Socket} socket The socket instance.
 */
io.on("connection", (socket) => {
  /**
   * Sets up an event listener for a socket to join a room.
   */
  socket.on("join", (roomId) => {
    if (rooms[roomId]) {
      rooms[roomId].addUser(socket.id);
    } else {
      socket.emit("bad-room-id");
    }
  });

  // Host will start the game
  /* socket.on("pick-trump") => {
  }*/

});


app.use(handler);

app.listen(process.env.port || 5073, () => {
    console.log("Listening on port" + process.env.port || 5073);
});
