function fact(n) {
   // code de la fonction
  var i, n, f = 1;
  for(i = 1; i <= n; i++){
    f *= i;   // ou f *= i;
  }  
  return f;
}

function applique(f, tab) {
  const tableau = tab.map(item => {
      return f(item);
  })
  return tableau;
}

msgs = [
  { "msg" : "Hello World" },
  { "msg" : "Blah Blah" },
  { "msg" : "I love cats" }
];

function update(messages = msgs) {
  RemoveMessage();
  for (let i=0; i<messages.length; i++) {
    AddMessage('<li class="msg_child"> ' + messages[i].msg + '</li>');
  }
}

function AddMessage(message) {
	var chat_messages = document.getElementById("msg_list");
	chat_messages.insertAdjacentHTML("beforeend", message);
}

function RemoveMessage() {
  const elements = document.getElementsByClassName("msg_child");
  while (elements.length > 0) elements[0].remove();
}

function update_v_bg(msg) {
  var msg = document.getElementById("myTextarea").value;
  AddMessage('<li class="msg_child"> ' + msg + '</li>')
}