function getPin() {
    const pin = Math.round(Math.random() * 10000); 
    const pinString = pin + ' ';
    if (pinString.length == 5) 
    {
        return pin; 
    } 
    else
     {
        return getPin();
    }
}

function generatePin()
{ 
   const pin= getPin();
document.getElementById('display-pin').value=pin;

// Clear Other Value 
const calc= document.getElementById('typed-numbers');
calc.value='';
document.getElementById('notify-fail').style.display='none';
       document.getElementById('notify-success').style.display='none';

}

document.getElementById('key-pad').addEventListener('click' ,function(event)
{
   const number= event.target.innerText;
   const calc= document.getElementById('typed-numbers');
   if(isNaN(number))
   {
if(number=='C')
{
    calc.value='';
}
   }
else{   
    const previousCalc=calc.value ;
    const newcalc=previousCalc+number;
    calc.value=newcalc;
}
});

function verifyPin()
{
    const pin=document.getElementById('display-pin').value;
    const typednumbers=document.getElementById('typed-numbers').value;
    if(pin == typednumbers )
    {
        document.getElementById('notify-success').style.display='block';
        document.getElementById('notify-fail').style.display='none';
    }
    else{
        document.getElementById('notify-fail').style.display='block';
        document.getElementById('notify-success').style.display='none';
    }
}