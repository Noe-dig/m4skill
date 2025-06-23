const conversation = document.getElementById("conversation");

function addtoConvo(){
    let userPrompt = document.getElementById("prompt").value;
    console.log(userPrompt);
    let li = document.createElement("li");
    li.innerText = userPrompt;
    conversation.appendChild(li);
}

async function sendtoOllama(prompt){
    addtoConvo(prompt);
    const url = "http://localhost:11434/api/generate";
    const options = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "phi3",
            prompt: prompt,
            stream: false
        })
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    let li = document.createElement("li");
    li.innerText = data.response;
    conversation.appendChild(li);
}