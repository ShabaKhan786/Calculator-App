
let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');


for(let button of buttons){
    button.addEventListener('click',function(e){
        let btn=e.target.innerText;
        if(btn==='C'){
           input.value="";
        }

        else if(btn==='='){
         try{
            input.value=eval(input.value);
        }
        catch(e){
            input.value="invalid"
          }
        }
        else {
            input.value+=btn;
        }
    })
   
}

























