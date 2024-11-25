const socket = io("ws://localhost:3500");
const input = document.getElementById("message-input");
const form = document.getElementById("form");
const messageList = document.getElementById("message-list");
const chatActivity = document.getElementById("chat-activity");

function sendMessage(e) {
  e.preventDefault();
  const message = input.value;
  // check if input is empty
  if (message === "") return;
  // send message
  socket.emit("message", message);
  // clear input value
  input.value = "";

  input.focus();
}

// Listen for submitting message sendMessage function
form.addEventListener("submit", sendMessage);

// Listen for messages coming in
socket.on("message", (data) => {
  // clear activity display before the next message
  chatActivity.textContent = "";
  // create list of messages element
  const list = document.createElement("p");
  list.textContent = data;
  messageList.appendChild(list);
});

// Listen for user activity
input.addEventListener("keypress", () => {
  socket.emit("activity", socket.id.substring(0, 5));
});

// When user is typing
let activityTimer;
socket.on("activity", (name) => {
  chatActivity.textContent = `${name} is typing...`;

  // clear timer 3 seconds after user stops typing
  clearTimeout(activityTimer);
  activityTimer = setTimeout(() => {
    chatActivity.textContent = "";
  }, 3000);
});
