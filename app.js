const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: process.env.PORT, path: "/myapp" });
