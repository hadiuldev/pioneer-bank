//login btn handaler
let enter = document.getElementById('login');
enter.addEventListener('click', function(){
    const loginAria = document.getElementById('login-aria');
    loginAria.style.display = "none";
    const transactionAria = document.getElementById('transaction-aria');
    transactionAria.style.display = "block";
})
//deposit btn handaler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    const depositAmaount = document.getElementById('depositAmaount').value;
    const dipositNumber =parseFloat(depositAmaount);
    
    updateSpanText("currentDeposit", dipositNumber)
    updateSpanText("currentBalance", dipositNumber)

    document.getElementById('depositAmaount').value = "";

})

//withdraw btn handaler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    const withdrawAmaount = document.getElementById('withdrawAmount').value;
    const withdrawNumber =parseFloat(withdrawAmaount);

    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1*withdrawNumber)

    document.getElementById('withdrawAmount').value = "";
})

function updateSpanText (id, dipositNumber){
    const presentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber =parseFloat(presentBalance);
    const totalBalance = dipositNumber + currentBalanceNumber;
    document.getElementById(id).innerText= totalBalance;
}