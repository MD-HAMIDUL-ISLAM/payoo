document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked')
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '12345' && pinNumber === '678'){
        window.location.href = '/home.html'
    }
    else{
        console.log('wrong phone number or pin number')
    }
})