const buttonsArray = Array.from(document.getElementsByClassName('clickable'));
const answersArray = Array.from(document.getElementsByClassName('answer'));
const buttonsVisibilityValuesArray = [true,true,true,true,true];

function toggleVisibility(item){
    let thisItem = buttonsArray[item];
    let itemVisibility = buttonsVisibilityValuesArray[item];
    let answer = answersArray[item];

    if(itemVisibility){
        answer.style.display = "none";
        buttonsVisibilityValuesArray[item] = false;
        return;
    } else {
        answer.style.display = "block";
        buttonsVisibilityValuesArray[item] = true;
        return;
    }
};

for (var item=0 ; item < buttonsArray.length; item++ ) { 
    buttonsArray[item].style.display = "block";
    let thisElement = item;
    buttonsArray[item].addEventListener("click", () => toggleVisibility(thisElement));
}
