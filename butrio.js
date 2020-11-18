function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "бу3о") {
    return true;
   }
   alert("Доступ запрещён! Неправильный пароль!");
   return false;
   }