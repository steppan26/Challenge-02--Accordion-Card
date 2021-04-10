const buttonsArray = Array.from(document.getElementsByClassName('clickable'));
const answersArray = Array.from(document.getElementsByClassName('answer'));
const arrowsArray = Array.from(document.getElementsByClassName('arrow'));
const questionsArray = Array.from(document.getElementsByClassName("question"))
const buttonsVisibilityValuesArray = [false,false,false,false,false];

function toggleVisibility(item){
    const itemVisibility = buttonsVisibilityValuesArray[item];
    const answer = answersArray[item];
    const arrow = arrowsArray[item];
    const question = questionsArray[item];

    
    closeAll();

    if(itemVisibility){
        answer.style.display = "none";
        question.style.fontWeight = "400";
        question.style.fontSize = "0.9em";
        arrow.style.rotate ="0deg";
        buttonsVisibilityValuesArray[item] = false;
        return;
    } else {
        answer.style.display = "block";
        question.style.fontWeight = "700";
        question.style.fontSize = "0.85em";
        arrow.style.rotate ="180deg";
        buttonsVisibilityValuesArray[item] = true;
        return;
    }
};

function resetMenuFonts(){
    
}

function closeAll(){
    for (var item=0 ; item < buttonsArray.length; item++ ) { 
        const answer = answersArray[item];
        const arrow = arrowsArray[item];
        const question = questionsArray[item];

        buttonsVisibilityValuesArray[item] = false;
        answer.style.display = "none";
        question.style.fontWeight = "400";
        question.style.fontSize = "0.9em";
        arrow.style.rotate ="0deg";
    }
}


closeAll();

for (var item=0 ; item < buttonsArray.length; item++ ) { 
    buttonsVisibilityValuesArray[item] = false;
    let thisElement = item;
    buttonsArray[item].addEventListener("click", () => toggleVisibility(thisElement));
}
