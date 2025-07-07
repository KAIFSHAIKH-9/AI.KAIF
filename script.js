
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatOutput = document.getElementById("chatOutput");

    const response = getBotReply(userInput);
    const message = document.createElement("p");
    message.textContent = "SOVA: " + response;
    chatOutput.appendChild(message);

    speak(response);
}

function getBotReply(input) {
    input = input.toLowerCase();
    if (input.includes("eid")) return "Eid Mubarak! Check out our special deals!";
    if (input.includes("gift")) return "Here are some gift ideas: perfume, watch, or AI smart lamp.";
    if (input.includes("school")) return "Need school help? I can assist with math, English, or science!";
    return "I'm SOVA, your Urdu voice assistant. How can I help?";
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}
