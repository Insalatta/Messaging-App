var textbox= document.getElementById("textbox");
var messages= document.getElementById("messages");
var sendbutton= document.getElementById("sendbutton");
sendbutton.addEventListener("click", function(){
  if(textbox.value.trim() != ""){
      var newMessage = document.createElement("p");
      newMessage.innerHTML = textbox.value;
      messages.appendChild(newMessage);
      textbox.value="";
  }{
      textbox.value="";
  }
});
