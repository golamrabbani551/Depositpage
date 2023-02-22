
function getWithdrawInputValueById(withdrawid){
    const withdrawInputValue = document.getElementById(withdrawid);
    const withdrawValueString = withdrawInputValue.value;
    const withdrawValue = parseFloat(withdrawValueString);
    withdrawInputValue.value = '';
    return withdrawValue;
}
function getWithdrawPreviousValueById(previousId){
    const withdrawFeild = document.getElementById(previousId);
    const withdrawFieldAmountString = withdrawFeild.innerText;
    const withdrawAmountField = parseFloat(withdrawFieldAmountString);
    return withdrawAmountField;
}

function getTextElementValueById(previousId , newValue){
    const textElement = document.getElementById(previousId);
    textElement.innerText = newValue;
}









 document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputAmount = getWithdrawInputValueById('inpte-withdraw');
    const withdrawFieldValue = getWithdrawPreviousValueById('withdraw-tk');
    const totalWithdraw = withdrawInputAmount + withdrawFieldValue;
    const getTextElementWithdraw = getTextElementValueById('withdraw-tk', totalWithdraw);
    const finalAmountValue = getWithdrawPreviousValueById('total-balance');
    const FinalValue = finalAmountValue - totalWithdraw;
    const getTextElementBalance = getTextElementValueById('total-balance', FinalValue);



})