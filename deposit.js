

// document.getElementById('deposite-btn').addEventListener('click',function(){
//     // console.log('clicked')
//     const inputeValue = document.getElementById('input-filde');
//     const inputFieldValueString = inputeValue.value;
//     const inputField = parseFloat(inputFieldValueString);
//         // console.log(inputField);





//     // const depositInput = document.getElementById('deposit-input');
//     // const newDepositAmountText = depositInput.value;
//     // const newDepositAmount = parseFloat(newDepositAmountText);


//     const depositeValue = document.getElementById('previous-value');
//     const depositFieldValueString = depositeValue.innerText;
//     const depositField = parseFloat(depositFieldValueString);

    
//     const newDepositeValue = depositField + inputField;
//     depositeValue.innerText = newDepositeValue;



//     let totalBalance = document.getElementById('total-balance');
//     let totalBalanceString = totalBalance.innerText;
//     let finalTotalAmount = parseFloat(totalBalanceString);


//     let finalAmount = inputField + finalTotalAmount;
//     totalBalance.innerText =finalAmount;


// })


// document.getElementById('withdraw-btn').addEventListener('click', function(){
//     let withdrawInput = document.getElementById('inpte-withdraw');
//     let withdrawAmountString = withdrawInput.value;
//     let withdrawAmount = parseFloat(withdrawAmountString);


//     let withdrawField =document.getElementById('withdraw-tk');
//     let withDrawFieldString = withdrawField.innerText;
//     let withdrawFieldAmount = parseFloat(withDrawFieldString)

//     let withdrawFieldText = withdrawAmount + withdrawFieldAmount;
//     withdrawField.innerText = withdrawFieldText;

  
  
//     let totalBalance = document.getElementById('total-balance');
//     let totalBalanceString = totalBalance.innerText;
//     let finalTotalAmount = parseFloat(totalBalanceString);


//     let finalAmount = finalTotalAmount - withdrawAmount;
//     totalBalance.innerText =finalAmount;

  
  
  
  
  
//     // console.log(withdrawAmount);
// })


function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    inputField.value ='';
    return inputAmount;
}


function getDepositValueById(depositId){
    const depositField = document.getElementById(depositId);
    const depositAmountString = depositField.innerText;
    const depositAmount = parseFloat(depositAmountString);
    return depositAmount;
}

function setTextValueById(depositId , newValue){
    const setTextValue = document.getElementById(depositId);
    setTextValue.innerText = newValue;
}



document.getElementById('deposite-btn').addEventListener('click', function(){
    const inputFieldAmount = getInputValueById('input-filde');
    const depositFieldAmount = getDepositValueById('previous-value');
    const finalDepositAmount = inputFieldAmount + depositFieldAmount;
    const setTextValueAmount = setTextValueById('previous-value', finalDepositAmount );
    const finalAmountValue = getWithdrawPreviousValueById('total-balance');
    const FinalValue = finalAmountValue + finalDepositAmount;
    const setTextValueBalance = setTextValueById('total-balance', FinalValue);


    

})


