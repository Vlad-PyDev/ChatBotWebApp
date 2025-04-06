function enterApp(){
  window.location.href = "main.html";
}

function sendMessage(){
  const input = document.getElementById('userMessage');
  const message = input.value;
  if(message.trim() === "") return;
  const chatWindow = document.getElementById('chatWindow');
  const userDiv = document.createElement('div');
  userDiv.textContent = "Вы: " + message;
  chatWindow.appendChild(userDiv);
  eel.get_response(message)(function(response){
    const botDiv = document.createElement('div');
    botDiv.textContent = response;
    chatWindow.appendChild(botDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
  input.value = "";
}