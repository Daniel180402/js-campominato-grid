// creazione griglia
const gridElement = document.getElementById("grid");
let difficulty = document.getElementById("difficulty")
let buttonplay = document.getElementById("btnplay")

buttonplay.addEventListener("click", function(){

    const createGridSquare = () => {
        const currentElement = document.createElement("div");
        
        if(difficulty.value == "facile"){
            currentElement.classList.add("square-element-big");
        }
        else if(difficulty.value == "intermedio"){
            currentElement.classList.add("square-element-medium");
        }
        else{
            currentElement.classList.add("square-element-small");
        }
        
    
        return currentElement
    }
    
    if(difficulty.value == "facile"){
        matchDifficulty = 100;
    }
    else if(difficulty.value == "intermedio"){
        matchDifficulty = 81;
    }
    else{
        matchDifficulty = 49;
    }

    for (let i = 1; i <= matchDifficulty ; i++){
        // creazione singolo quadrato
        const currentSquare = createGridSquare();
        currentSquare.innerHTML = [i];
        currentSquare.addEventListener("click", function(){
            console.log(this);
            this.classList.toggle("active");
        })
    
        //viene aggiunto al suo parent
        gridElement.appendChild(currentSquare);
    
    }

})

