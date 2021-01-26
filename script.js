let enter = document.getElementById('login');
enter.addEventListener('click', function(){
    const loginAria = document.getElementById('login-aria');
    loginAria.style.display = "none";
    const transactionAria = document.getElementById('transaction-aria');
    transactionAria.style.display = "block";
})