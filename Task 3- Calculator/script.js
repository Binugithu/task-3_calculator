let input=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button')

let string = "";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML=='AC') {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }
    })

});

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (/[0-9]/.test(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')' || key === '%') {
        string += key;
        updateInput(string);
    } else if (key == 'Enter') {
        string = eval(string);
        updateInput(string);
    } else if (key == 'Backspace') {
        string = string.slice(0, -1);
        updateInput(string);
    } else if (key === 'Enter') {
        try {
            const result = new Function('return ' + string)();
            string = result;
            updateInput(string);
        } catch (error) {
            updateInput('Error');
        }
    }
       else if (key === 'Escape') {
            string = "";
        updateInput(string);
       }
});