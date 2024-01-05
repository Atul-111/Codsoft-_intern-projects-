// creating a Variable and calling name of id
let input_box =  document.getElementById("input_box")

//use of querySelector for selecting all Buttons
let buttons =  document.querySelectorAll("button")

//creating a string which is empty for adding a value in their append in input_box
let string = ''

/*creating a for Each loop on button and passing a parameter
'element' together with arrow '=>' function*/
buttons.forEach(element =>{

/*Here I using  a eventListener property 'click'
on button with anonyms or arrow function with passing parameter 'b'*/
element.addEventListener('click',(b)=>{

//using if else condition with innerText and target on each buttons
    if(b.target.innerText == '='){

        // using a evaluate function for output and storing it in string and after input _box
        string = String(eval(string))
        input_box.value = string;
    }
    else if(b.target.innerText == 'AC'){
        string = ' '
        input_box.value=string;
    }
    else if(b.target.innerText == 'del.'){
        // Here I use a substring property of String to delete an element from input_box
        string = string.substring(0,string.length-1)
        input_box.value = string;
    }
    else if(b.target.innerText == 'minusPlus'){
        string = String(-eval(string))
        input_box_.value = string;
    }
    else{
        string +=  b.target.innerText
        input_box.value = string;
    }
})
})