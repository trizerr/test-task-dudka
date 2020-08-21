// Hello!

import * as JQuery from "jquery";
window.$ = JQuery.default;
console.log('s');
const buttons = document.querySelectorAll(".show");
console.log(buttons);
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        console.log('click');
        if(button.innerText==='\u2193 Show more'){
            console.log('s');
            button.innerText="\u2191 Show less";
        }else{
            console.log('ss');
            button.innerText='\u2193 Show more';
        }
    });
}
