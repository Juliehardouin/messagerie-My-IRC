import io from "socket.io-client";
import { useEffect, useState } from "react";


// on doit choisir un username dès le début
let username = prompt("Please choose a username")

// on rend le username obligatoire pour passer au tchat
function requiredFunction() {
  if (!username) {
    username = prompt("Please choose a username")
    requiredFunction();
  }
}
requiredFunction();


export default function Chat() {
  
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();

  function init() {
    const socket = io()
    setSocket(socket)
    socket.on("connect", () => {
      socket.emit("username", username);
    });

  // réponds à l'envoi des données : à chaque nouveau message, on va modifier le tableau en le destructurant + insérant nouveau message
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });

    // à chaque connexion, on remplit le tableau users[]
    socket.on("users", users => {
      setUsers(users);
    });

    socket.on("disconnected", id => {
      setUsers(users => {
        return users.filter(user => user.id !== id);
      });
    });  
  }

  useEffect(init, []) // dès qu'un élement du tableau est modifié, la fonction est appelée
  
  let a = 1;
  let b = "1";
  
  

  const submit = event => {
    event.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };

  function handleClick() {
    console.log("in room clicked")
  }

  return (
    <div className="container-main">
      <div className="container-room" onClick={handleClick}>
        <h1>Rooms</h1>
        <ul id='tabs'>
          <li className='active' onClick={() => handleClick()}>Général</li>
          <li>Sport</li>
          <li>Cinéma</li>
          <li>Musique</li>
          <li>Littérature</li>
          <li>Humour</li>
        </ul>
        <h2>Bonjour {username}</h2>
      </div>

      <div className="container-chat">
        <div id="messages">
          {messages.map(({ user, text }) => (
            <p><strong>{user.name}</strong> : {text}</p>
          ))}
        </div>

        <form onSubmit={submit}>
          {/* on change text */}
          <input 
            type="text" 
            id="message" 
            placeholder="Message" 
            autoComplete='off'
            onChange={e => setMessage(e.currentTarget.value)}
            value={message}
          />
          <button className="neon_button">Send</button> 
        </form>
      </div>

      <div className="container-users">
        <h1>Users</h1>
        <div id="users">
          {users.map((user, index) => ( // , index
            <p key={index}>{user.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
