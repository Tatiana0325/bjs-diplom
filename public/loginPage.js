'use strict';

const user = new UserForm();

//Вход в систему
user.loginFormCallback = (data) => {
    ApiConnector.login(data, response => {
        if (response.success) {
            location.reload(true);
        } else{ 
            user.setLoginErrorMessage('Неверный логин или пароль');
        }
    });
}

//Регистрация в системе
user.registerFormCallback = (data) => {
    ApiConnector.register(data, response => {
        if (response.success) {
            location.reload(true);
        } else {
            user.setRegisterErrorMessage('Такой пользователь существует!');
        }
    });
}