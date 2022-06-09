//Functional bank handle deposit part


document.getElementById('Deposit-button').addEventListener('click',function(){

const depositInput = document.getElementById('Deposit-input');
const depositAmount = depositInput.value;

//current deposit value
const depositTotal =document.getElementById('Deposit-total');
const previousDeposit = depositTotal.innerText;

// deposit money can not be negative or zero
const checkingMinusDeposit= parseFloat(depositAmount);
if(checkingMinusDeposit>0)
{
    depositTotal.innerText= parseFloat(depositAmount)+parseFloat(previousDeposit);
}
else
{
    alert('Money can not be Negative or Zero');
}

// clearing input field
depositInput= '';
})