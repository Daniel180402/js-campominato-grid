// creazione griglia

const gridElement = document.getElementById("grid");

const createGridSquare = () => {
    const currentElement = document.createElement("div");
    currentElement.classList.add("square-element-big");

    return currentElement
}

for (let i = 1; i <= 100 ; i++){
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