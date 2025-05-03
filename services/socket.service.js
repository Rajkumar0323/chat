let ownerSockets = {};
let currentBusyOwner = {};

export default function handleSocketEvents(io) {
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("registerOwner", (ownerId) => {
      ownerSockets[ownerId] = socket.id;
      console.log(`Owner ${ownerId} registered with socket ID ${socket.id}`);
    });

    socket.on("visitorRequest", ({ data, socketId }) => {
      const ownerSocketId = ownerSockets[data.ownerId];

      if (currentBusyOwner[data.ownerId]) {
        io.to(socketId).emit("lineBusy", {
          message: "Owner is busy. Please wait.",
        });
        return;
      }

      if (ownerSocketId) {
        currentBusyOwner[data.ownerId] = true;

        io.to(ownerSocketId).emit("newVisitor", {
          data,
          socketId,
        });
      }
    });

    socket.on("ownerResponse", (data) => {
      io.to(data.socketId).emit("visitorResponse", data);
      delete currentBusyOwner[data.ownerId];
    });

    socket.on("disconnect", () => {
      for (const [ownerId, sockId] of Object.entries(ownerSockets)) {
        if (sockId === socket.id) {
          delete ownerSockets[ownerId];
          delete currentBusyOwner[ownerId];
          break;
        }
      }
      console.log("A user disconnected:", socket.id);
    });
  });
}
