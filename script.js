const buttonE1 = document.getElementById("roll_button");

const diceE1 = document.getElementById("dice");

const rollHistoryE1 = document.getElementById("roll_history");


let historyList = [];

function rolldice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceface(rollResult);
    diceE1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
     rollHistoryE1.innerHTML = "";
     for (let i = 0; i < historyList.length; i++) {
        const lestItem = document.createElement("li");
        lestItem.classList.add("liElement");
        lestItem.innerHTML = `
        <p class="bg-[#EFEFEF] w-[500%] h-12 rounded-lg flex items-center justify-between"> Roll ${
          i + 1
        }: <span class="text-4xl">${getDiceface(historyList[i])}</span></p>`;
        rollHistoryE1.appendChild(lestItem);
     }
}

function getDiceface(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "Invalid roll result";
    }
}

buttonE1.addEventListener("click", ()=> {
   rolldice();
})