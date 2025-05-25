const items = [
    ["Otrivin neusspray", 7.39, 4.2, "./img/otrivin_neusspray.png", "otrivin neusspray", true],
    ["Kruidvat tissues", 1.49, 2.8, "./img/kruidvat_tissues.png", "tissues", true],
    ["Vicks vaporub", 10.14, 5, "./img/vicks_vaporub.png", "vicks vaporub", true]];


let itemCount = 0;
itemCounter = document.getElementById("tissuebox__itemCount");

const productDummy = document.getElementsByClassName("cards__shop-item")[0];
productDummy.remove();
const productContainer = document.getElementsByClassName("grid-container")[0];


for (let i = 0; i < items.length; i++) {
    if (items[i][4] === false) {
        console.log(items[i][0] + " is onbeschikbaar");
        var element = document.querySelector("#cards__shop-item" + i);
        element.classList.replace("cards__shop-item--leverbaar", "cards__shop-item--onleverbaar");
    }
}

items.forEach((product, i) => {
    const clone = productDummy.cloneNode(true);
    const productName = clone.querySelector(".itemNaam");
    const productImage = clone.querySelector(".cards__product-image");
    const productPrice = clone.querySelector(".cards__price");
    const productRating = clone.querySelector(".cards__rating");

    clone.setAttribute("id", "product_" + i);

    productName.innerText = product[0];
    productImage.setAttribute("src",product[3]);
    productPrice.textContent = "€"+product[1];
    productRating.textContent = product[2]+"/5";

    const btn = clone.querySelector(".addButton");
    btn.setAttribute('onclick','addToTissuebox('+i+')');
    productContainer.appendChild(clone);
    }
)

function addToTissuebox(i) {
    itemCount++;
    console.log(itemCount);
    itemCounter.innerHTML = itemCount;
    // console.log("naam: ", items[i][0]);
    // console.log("prijs: ", items[i][1]);
    // console.log("beschrijving: ", items[i][4]);
    // console.log("beschikbaar: ", items[i][5]);
    // console.log("--------------------");

    const li = document.createElement("li");
    const winkelmandjeContent = document.createTextNode(items[i][0]);
    li.appendChild(winkelmandjeContent);
    li.classList.add('item1');
    document.getElementById("winkelmandjeContent").appendChild(li);
    
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    removeBtn.setAttribute('class','removeButton')
    removeBtn.onclick = function() {
        removeFromTissuebox(items[i][0]);
    };

    li.appendChild(removeBtn);
    document.getElementById("winkelmandjeContent").appendChild(li);
};

// function removeFromTissuebox() {
//     const items = document.getElementsByClassName("item1");
//     itemCount--;
//     if (itemCount < 0) {
//         itemCount = 0;
//     }
//     itemCounter.innerHTML = itemCount;
//     if (items.length > 0) {
//         const item = items[i];
//         const ul = document.getElementById("winkelmandjeContent");
//         if (ul.contains(items[0] === itemNameIndex)){
//             ul.removeChild(item);
//         }
//     }
// };

function removeFromTissuebox(itemName) {
        itemCount--;
    if (itemCount < 0) {
        itemCount = 0;
    }
    const items = document.getElementsByClassName("item1");
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === itemName) {
            items[i].parentNode.removeChild(items[i]); // remove the matching item
            itemCount--;
            if (itemCount < 0) {
                itemCount = 0;
            }
            itemCounter.innerHTML = itemCount;
            break; // stop after removing one match
        }
    }
}

let observer = new IntersectionObserver(
        function(entries){
            if(entries[0].isIntersecting === true){
                document.getElementsByTagName("main")[0].classList.add("a-popup");
                observer.disconnect;
            }
        }, {
            threshold: 0.25,
        }
    );

observer.observe(document.getElementsByTagName("main")[0]);