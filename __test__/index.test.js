import { getAllByRole, getByText, fireEvent, getByRole } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

function shouldExistDOM() { 
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="firstCard" role="firstCard">
        <article role="buttons">
            <button class="buttonRating">1</button>
            <button class="buttonRating">2</button>
            <button class="buttonRating">3</button>
            <button class="buttonRating">4</button>
            <button class="buttonRating">5</button>
        </article>
        <button class="submitButton" role="submit">Submit</button>
    </section>
    <section class="secondCard" role="secondCard">
        <img>
        <p>You selected <span class="userRating" role="userRating"></span>out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p> 
    </section>
    `

    const allButtons = div.getElementsByClassName('buttonRating');

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
        div.getElementsByClassName("userRating")[0].innerHTML = numberSelected;
    }

    const submitButton = div.getElementsByClassName("submitButton")[0];
    submitButton.addEventListener("click", processRating);
    
    function processRating() {
        let firstCard = div.getElementsByClassName("firstCard")[0];
        let secondCard = div.getElementsByClassName("secondCard")[0];
                
        firstCard.classList.add("hide");
        secondCard.classList.add("show");
    }

    return div;
}

describe("should be send a rating", function(){
    let container;

    beforeEach(function(){
        container = shouldExistDOM();
    })

    test("should exist dom five buttons", function(){
        const contentButtons = getByRole(container, 'buttons');
        const buttons = getAllByRole(contentButtons, 'button');

        expect(buttons).toBeDefined();

        expect(buttons.length).toBe(5);
    })

    test("should be select one button", function(){
        const selectedButton = getByText(container, '3');

        fireEvent.click(selectedButton);

        expect(Object.values(selectedButton.classList)).toContain('buttonSelected');
    })

    test("should be none of the other buttons hass been selected", function(){
        const firstSelectedButton = getByText(container, '3');
        const secondSelectedButton = getByText(container, '5');

        const othersButtonOne = getByText(container, '1');
        const othersButtonTwo = getByText(container, '2');
        const othersButtonFour = getByText(container, '4');

        fireEvent.click(firstSelectedButton);
        fireEvent.click(secondSelectedButton);

        expect(Object.values(othersButtonOne.classList)).not.toContain('buttonSelected');
        expect(Object.values(othersButtonTwo.classList)).not.toContain('buttonSelected');
        expect(Object.values(othersButtonFour.classList)).not.toContain('buttonSelected');
        expect(Object.values(firstSelectedButton.classList)).not.toContain('buttonSelected');
        expect(Object.values(secondSelectedButton.classList)).toContain('buttonSelected');
    })

    test("should be exist in dom the second card", function(){
        const contentSecondCard = getByRole(container, 'secondCard');

        expect(contentSecondCard).toBeDefined();
    })

    test("should be hide the first card when submit is clicked", function(){
        const submitButton = getByRole(container, 'submit');
        const contentFirstCard = getByRole(container, 'firstCard');
     
        fireEvent.click(submitButton);

        expect(Object.values(contentFirstCard.classList)).toContain('hide');
    })

    test("should show the second card when submit is clicked", function(){
        const submitButton = getByRole(container, 'submit');
        const contentSecondCard = getByRole(container, 'secondCard');
     
        fireEvent.click(submitButton);

        expect(Object.values(contentSecondCard.classList)).toContain('show');
    })
    
    test("should be exist user rating number", function(){
        const contentSecondCard = getByRole(container, 'secondCard');
        const userRating = getByRole(contentSecondCard, 'userRating');

        expect(userRating).toBeDefined();
    })

    test("should show number of the button selected in the second card",function(){
        const selectedButton = getByText(container, '3');
        const submitButton = getByRole(container, 'submit');
        const contentSecondCard = getByRole(container, 'secondCard');
        const userRating = getByRole(contentSecondCard, 'userRating');

        fireEvent.click(selectedButton);
        fireEvent.click(submitButton);

        expect(userRating.innerText).toBe(selectedButton.innerText);
    })
})