let input = document.getElementById('input');
let btn = document.querySelectorAll('button');

let string = '';

const arr = Array.from(btn);

arr.forEach((button)=>{
    button.addEventListener('click' , (e) => {
        const action = e.target.innerHTML;
        if (action === 'x'){
            string += '*';
            input.value = string;
        }
        else if (action === '/'){
            string += '/';
            input.value = string;
        }
        else if (action === '-'){
            string += '-';
            input.value = string;
        }
        else if (action === '+'){
            string += '+';
            input.value = string;
        }
        else if (action === '='){
            string = eval(string);
            input.value = string;
        }
        else if (action === 'C')
        {
            string = '';
            input.value = string;
        }
        else if (action === '↵'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += action ;
            input.value = string;  
        }
    });
})
