const allButtons = document.getElementsByClassName('buttonRating');

    for (let i=0; i < allButtons.length; i++) {
        let button = allButtons[i];
        button.addEventListener("click", selectionRating);        
    }

    function selectionRating(event) {
        for (let i=0; i < allButtons.length; i++) {
            let button = allButtons[i];
            button.classList.remove("buttonSelected");
        }

        let selectedButton = event.target;
        selectedButton.classList.add("buttonSelected");

        let numberSelected = selectedButton.innerText;
        document.getElementsByClassName("userRating")[0].innerHTML = numberSelected;
    }

    const submitButton = document.getElementsByClassName("submitButton")[0];
    submitButton.addEventListener("click", processRating);
    
    function processRating() {
        let firstCard = document.getElementsByClassName("firstCard")[0];
        let secondCard = document.getElementsByClassName("secondCard")[0];
                
        firstCard.classList.add("hide");
        secondCard.classList.add("show");
    }