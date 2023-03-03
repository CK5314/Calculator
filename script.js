let string="";
let buttons=document.querySelectorAll('.button');
var memory=0;
var value=0;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
           
            value=string;
    
        }
        else if(e.target.innerHTML=='C')
        {
            string="";
            document.querySelector('input').value=string;
            memory=value;
            value=0;
        }
        else if(e.target.innerHTML == 'm+')
        {
            string= eval(string) -  memory ;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'm-'){
            string= eval(string) -  memory ;
            document.querySelector('input').value=string;
        }
        else{
        string=string+ e.target.innerHTML;
        document.querySelector('input').value=string;
    }
    })
})