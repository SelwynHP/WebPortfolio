function validate_user() {
    var n = document.forms["form1"]["user_name"].value;
    if ((n == "") || (n == "your name")) {
        alert("Name must be filled out");
        return false;
    }
    else {
        if (!(/^[A-Z]([a-z]|([ ]+[A-Z]))*$/.test(n))) {
            alert("Invalid name");
            return false;
        }
        else {
            document.forms["form1"]["user_name"].value = n.replace(/[ ][ ]+/g, ' ');     // remove repeated blanks 

            var n = document.forms["form1"]["user_email"].value;
            if ((n == "") || (n == "your email")) {
            alert("Email must be filled out");
            return false;
            }
            
            var n = document.forms["form1"]["user_subject"].value;
            if ((n == "") || (n == "your subject")) {
            alert("Subject must be filled out");
            return false;
            }               

               var p=document.forms["form1"]["user_phone"].value;
                if(p =="")
                {
                alert("Phone Number must be filled out");
                 return false;
                } 
                else if(!/^([1-9]\d{0,2}-)?(\(\d{3}\)|\d{3})-\d{3}-\d{4}$/.test(p)) 
                {
                alert("Invalid Phone Number");
                }
                else
                {
                alert("Your Form Successfully Submitted! Please Wait For Responds, Bye~");
                return true;
                }
           
        }
        
    }
}