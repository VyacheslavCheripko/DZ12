window.onload = function () {
    document.getElementById('name').onkeydown = (event) => {
        if (parseInt(event.key)){
            return false;
        }
    }
    document.getElementById('username').onkeydown = (event) => {
        if (event.key === '.' || event.key === ','){
            return false;
        }
    }
    document.getElementById('terms').onchange = (event) => {
        if(event.target.checked){
            console.log('Согласен')
        }else{
            console.log('Не согласен')
        }
    }
    let popup = document.getElementById('popup');
    document.getElementById('action').onclick = () => {
        let inputs = document.getElementsByClassName('input');
        for (let i = 0; i < inputs.length; i++){
            if (!inputs[i].value){
                alert('Заполните поле' + inputs[i].previousSibling.previousSibling.innerHTML);
                return;
            }
        }
        if(document.getElementById('password').value.length < 8){
            alert('Длина пароля должна быть не менее восьми символов');
            return;
        }
        if(document.getElementById('password').value !== document.getElementById('password-repeat').value){
            alert('Пароли должны совпадать');
            return;
        }
        if(!document.getElementById('terms').checked){
            alert('Вы должны принять условия сервиса');
            return;
        }
        popup.style.display = 'flex';
    }
    function popupClose(){
        popup.style.display = 'none';
        document.getElementById('form-name').innerText = 'Log in to the system';
        document.getElementById('name-placeholder').remove();
        document.getElementById('name').remove();
        document.getElementById('email-placeholder').remove();
        document.getElementById('email').remove();
        document.getElementById('password-repeat-placeholder').remove();
        document.getElementById('password-repeat').remove();
        document.getElementsByClassName('terms')[0].remove();
        document.getElementsByClassName('has-account')[0].remove();
        document.getElementById('action').innerText = 'Sign In';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('action').onclick = () => {
            if (!document.getElementById('username').value){
                alert('Заполните поле Username'); return;
            }
            if (!document.getElementById('password').value){
                alert('Заполните поле Password'); return;
            }
            alert('Добро пожаловать, ' + document.getElementById('username').value);
        }
    }
    console.log('1');
    document.getElementById('popup-action').addEventListener('click', popupClose);
    document.getElementById('has-account').addEventListener('click', popupClose);
    console.log('1');
}