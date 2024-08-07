const words  = [
    {
        word : "Bic",
        indice : "Basique, je sers à écrire"
    } ,
    {
        word  : "Parallele" ,
        indice : "Je ne croise jamais mon frère , je suis issue de la géométrie"
    } ,
    {
        word  : "Anticonstitutionellement" ,
        indice : "Je fus le plus long mot de l'alphabet francais"
    },
    {
        word  : "Ingurgiter" ,
        indice : "je suis un synonyme du mot ENGLOUTIR"
    } ,
    {
        word  : "Senegal" ,
        indice : "j'ai été champion d'Afrique en 2021"
    } ,
];

document.addEventListener('DOMContentLoaded',()=>{
    let tentatives = 6;
    let goodResponse = 0;
    let pendu = 1;
    let displayContainer = document.querySelector(".display");
    let indiceContent = document.querySelector(".indice-content");
    let missedContent = document.querySelector(".missed-content");


    let randomNumber = Math.floor(Math.random() * words.length);
    let randomWord = words[randomNumber].word.toLowerCase();
    indiceContent.textContent = words[randomNumber].indice;
    for (let index = 0; index < randomWord.length; index++) {
       let displayItem = document.createElement("div");
       displayItem.classList = "display-item";
       displayContainer.appendChild(displayItem);     
    }

    let buttons = document.querySelectorAll('.button-container input');
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click",()=>{
            buttons[index].disabled =  true;
            let fullCases = document.querySelectorAll(".display .display-item");
            let letter = buttons[index].value.toLowerCase();

            for (let i = 0; i < randomWord.length; i++) {
                if(randomWord[i] === letter )
                {
                    goodResponse+=1;
                    fullCases[i].textContent = letter.toUpperCase();   
                    continue;    
                } 
            }

            if (goodResponse === randomWord.length) {
                setTimeout(() => {
                    alert("CONGRATULATIONS! Le mot à deviner était effectivement : "+randomWord.toUpperCase());
                    history.go(0);
                }, 100);
            }  

            if(randomWord.includes(letter) === false)
            {
                let missedContentItem = document.createElement("span");
                    missedContentItem.classList = "missed-content-item";
                    missedContentItem.textContent = letter.toUpperCase();
                    missedContent.appendChild(missedContentItem); 
                    pendu+=1;
                    document.querySelector(".pendu").src = `./assets/${pendu}.png`;
                    tentatives-=1;
            }

            
            document.querySelector(".tentatives").textContent = tentatives;
            if (tentatives === 0) {
                setTimeout(() => {
                    alert("Game over , le mot à deviner était : "+randomWord.toUpperCase());
                    history.go(0);
                }, 100);
            }
        })
        
    }

})


