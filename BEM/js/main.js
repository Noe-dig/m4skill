const items = [
    ["Otrivin neusspray",7.39,"img/otrivin_neusspray.png","otrivin neusspray",true],
    ["Kruidvat tissues",1.49,"img/kruidvat_tissues.png","tissues",true],
    ["Vicks vaporub",10.14,"img/vicks_vaporub.png","vicks vaporub",true]]

let itemCount = 0;

itemCounter = document.getElementById("tissuebox__itemCount");

for(let i = 0; i < items.length; i++){
    if(items[i][4] === false){
        console.log(items[i][0] + " is onbeschikbaar");
            var element = document.querySelector("#cards__shop-item" + i);
            element.classList.replace("cards__shop-item--leverbaar", "cards__shop-item--onleverbaar");
    }
}
// function addToTissuebox(){
//     for(let i = 0; i < items.length; i++){
//         console.log("naam: ", items[i][0]);
//         console.log("prijs: ", items[i][1]);
//         console.log("beschrijving: ", items[i][3]);
//         console.log("beschikbaar: ", items[i][4]);
//         console.log("--------------------");
//     }
//     itemCount++;
//     itemCounter.innerHTML = itemCount;
// }

function add1ToTissuebox(){
    itemCount++;
    console.log(itemCount);
    itemCounter.innerHTML = itemCount;
    console.log("naam: ", items[0][0]);
    console.log("prijs: ", items[0][1]);
    console.log("beschrijving: ", items[0][3]);
    console.log("beschikbaar: ", items[0][4]);
    console.log("--------------------");
    
    const li = document.createElement("li");
    // const winkelmandjeContent = document.createTextNode("<img src='"+items[0][2]+"'>"+items[0][0]+"<button onclick='remove1FromCart()' class='remove1FromCart'>");
    const winkelmandjeContent = document.createTextNode(items[0][0]);
    li.appendChild(winkelmandjeContent);
    li.classList.add('item1');
    document.getElementById("winkelmandjeContent").appendChild(li);
};
function add2ToTissuebox(){
    itemCount++;
    console.log(itemCount);
    itemCounter.innerHTML = itemCount;
    console.log("naam: ", items[1][0]);
    console.log("prijs: ", items[1][1]);
    console.log("beschrijving: ", items[1][3]);
    console.log("beschikbaar: ", items[1][4]);
    console.log("--------------------");
    
    const li = document.createElement("li");
    const winkelmandjeContent = document.createTextNode(items[1][0]);
    li.appendChild(winkelmandjeContent);
    li.classList.add('item2');
    document.getElementById("winkelmandjeContent").appendChild(li);
};
function add3ToTissuebox(){
    itemCount++;
    console.log(itemCount);
    itemCounter.innerHTML = itemCount;
    console.log("naam: ", items[2][0]);
    console.log("prijs: ", items[2][1]);
    console.log("beschrijving: ", items[2][3]);
    console.log("beschikbaar: ", items[2][4]);
    console.log("--------------------");
    
    const li = document.createElement("li");
    const winkelmandjeContent = document.createTextNode(items[2][0]);
    li.appendChild(winkelmandjeContent);
    li.classList.add('item3');
    document.getElementById("winkelmandjeContent").appendChild(li);
};

function remove1FromTissuebox(){
    const items = document.getElementsByClassName("item1");
    itemCount--;
    if(itemCount < 0){
        itemCount = 0;
    }
    itemCounter.innerHTML = itemCount;
    if (items.length > 0) {
        const item = items[0];
        const ul = document.getElementById("winkelmandjeContent");
        if (ul.contains(item)) {
            ul.removeChild(item);
        }
    }
}
function remove2FromTissuebox(){
    const items = document.getElementsByClassName("item2");
    itemCount--;
    if(itemCount < 0){
        itemCount = 0;
    }
    itemCounter.innerHTML = itemCount;
    if (items.length > 0) {
        const item = items[0];
        const ul = document.getElementById("winkelmandjeContent");
        if (ul.contains(item)) {
            ul.removeChild(item);
        }
    }
}
function remove3FromTissuebox(){
    const items = document.getElementsByClassName("item3");
    itemCount--;
    if(itemCount < 0){
        itemCount = 0;
    }
    itemCounter.innerHTML = itemCount;
    if (items.length > 0) {
        const item = items[0];
        const ul = document.getElementById("winkelmandjeContent");
        if (ul.contains(item)) {
            ul.removeChild(item);
        }
    }
}