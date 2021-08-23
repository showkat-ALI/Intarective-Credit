

    
const depositeError = document.getElementById('deposite-error-message');
    depositeError.style.display='none'

const withdrawError= document.getElementById('withdraw-error-message');
    withdrawError.style.display= 'none';

function getValue(inputField){
    const inputArea= document.getElementById(inputField);
    const inputAreaText = inputArea.value;
    const inputValue= parseFloat(inputAreaText);
    inputArea.value='';
    return inputValue;
}
function paisaShowcaseArea(showcaseField,amount){
    const showcase = document.getElementById(showcaseField);
    const showcaseText = showcase.innerText;
    const showcaseValue = parseFloat(showcaseText);
    showcase.innerText= showcaseValue+amount;

}
function getGrandTotal(){
    const grandTotalField = document.getElementById('total-amount');
    const grandTotalText = grandTotalField.innerText;
    const grandTotalValue = parseFloat(grandTotalText);
    return grandTotalValue;

}
function updateGrandTotal(ammount,isAdding){
    
    const grandTotalValue= getGrandTotal();
    if(isAdding==true){
    document.getElementById('total-amount').innerText= grandTotalValue+ammount;
}
else{
    document.getElementById('total-amount').innerText=grandTotalValue-ammount;

}

}
document.getElementById('deposite').addEventListener('click',function(){
    let depositvalue= getValue('deposite-input');
    if(depositvalue>0){
    paisaShowcaseArea('deposite-showcase',depositvalue);
    updateGrandTotal(depositvalue,true);
    const depositeError = document.getElementById('deposite-error-message');
    depositeError.style.display='none'
    
}
else{
    document.getElementById('deposite-error-message').style.display='block';
}
})
document.getElementById('withdraw').addEventListener('click',function(){
    let withdrawValue= getValue('withdraw-input');
    if(withdrawValue>0 && withdrawValue<=getGrandTotal()){
    paisaShowcaseArea('withdraw-showcase',withdrawValue);
    updateGrandTotal(withdrawValue,false);
    const withdrawError= document.getElementById('withdraw-error-message');
    withdrawError.style.display= 'none';

}
else{
    document.getElementById('withdraw-error-message').style.display='block';
}
})