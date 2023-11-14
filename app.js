function talk() {
var know = {
    // key is the prompt recognised word from the user input
    // value is the response you get from the chat bot
    "Hello" : "hi there &#128540",
    "who are you ": "",
    "what can you do for me ": "not much for now, just keeping you busy",
    "ok " : " you are welcome ",
    "bye" : " chat later bye for now ",
    "tell me about yourself ": " i am just the smallanyana chatbot keeping you busy with HTML"

}
var user = document.getElementById('userBox').value;
document.getElementById('chatLog')
.innerHTML = user + "<br>"
if (user in know ){
    document.getElementById('chatLog').innerHTML =  [user]; + "<br>"
}
else{
    document.getElementById('chatLog').innerHTML = " sorry i dont understand <br>"

}
}