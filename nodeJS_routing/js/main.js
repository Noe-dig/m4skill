fetch("http://localhost:3000")
    .then(response => response.json())
    .then(realData => {
        console.log(realData);
        
        let output = "";

        for (let i = 0; i < realData.length; i++) {
            const taak = realData[i].taak;
            const gedaan = realData[i].gedaan;

            const color = gedaan ? "green" : "red";
            const status = gedaan ? "voltooid" : "onvoltooid";

            output += `<span style="color: ${color};">${taak} : ${status}</span><br>`;
        }

        document.getElementById("js--taskField").innerHTML = output;
    });
