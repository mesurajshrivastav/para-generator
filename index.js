const input = document.getElementById("noOfWords");

const container = document.querySelector(".container");

const generateWords = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < n; ++i) {
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text+= letters[random];
    }
    

    return text;
}



let noOfWords;
const generatePara = () => {
   noOfWords = Number(input.value);
   const para = document.createElement("p");

    let data = "";

   for(let i = 0; i<noOfWords; ++i) {
    const randomNumber = (Math.random()*15).toFixed(0);
     data += generateWords(randomNumber).toLowerCase();
     data += " ";
   }


   para.innerText = data;

   para.setAttribute("class", "paras");

   container.append(para);
}




