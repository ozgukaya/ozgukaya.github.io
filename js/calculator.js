function formvalidation() {

    var firstname = document.forms["RegForm"]["FirstName"];
    var lastname = document.forms["RegForm"]["LastName"];   
    var email = document.forms["RegForm"]["Email"];   
    var birthdate = document.forms["RegForm"]["BirthDate"]; 
    var password = document.forms["RegForm"]["Password"];
    var letter = /^[a-zA-Z]+$/;
    var passwordrgx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/;
    var dateformat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (firstname.value == "" || (!firstname.value.match(letter)))                                   
    {
        window.alert("Please enter your name with only letters.");
        firstname.focus();
        return false;
    }
    
   
    if (lastname.value == ""  || (!lastname.value.match(letter)))                                 
    {
        window.alert("Please enter your lastname with only letters.");
        lastname.focus();
        return false;
    }
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
   if (!password.value.match(passwordrgx) )                       
    {
        window.alert("Please enter valid password");
        password.focus();
        return false;
    }
     if (!birthdate.value.match(dateformat) )                       
    {
        window.alert("Please enter valid date please dd/mm/yyyy");
        password.focus();
        return false;
    }
    
   return true;
}