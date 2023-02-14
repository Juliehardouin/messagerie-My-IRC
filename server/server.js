const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

http.listen(3001, () => {
  console.log("SERVER STARTED");
})
    
const users = {};

// à chaque connection, on envoie le username à tout le monde
// On écoute l'évenement "connection" de socket.io
io.on("connection", (socket) => {
  console.log("Utilisateur connecté :", socket.id)

  io.emit("user_connected", socket.id);

  // réponds à l'envoi des données : le message + le nom du username est transmis à l'autre user
  socket.on("send", message => {
    // console.log(users, socket.id)
    io.emit("message", {
      text: message,
      user: users[socket.id]
    });
  });

    // quand un nouvel utilisateur créé son username, la variable user va garder en mémoire son nom et son id
    socket.on("username", username => {
      const user = {
        name: username,
        id: socket.id
      };

      // on entre les données (nom+id) du user dans le tableau "users"
      users[socket.id] = user;

      // on envoie sur tous les navigateurs que ce user est connecté
      io.emit("connected", user);
      
      // on envoie sur tous les navigateurs la liste de tous les users connectés
      io.emit("users", Object.values(users));
    });
    
    socket.on("disconnect", () => {
      delete users[socket.id];
      io.emit("disconnected", socket.id);
      console.log("Un utilisateur s'est déconnecté");
    });
})



