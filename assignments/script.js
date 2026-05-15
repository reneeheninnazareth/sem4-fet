let savedPassword = "";
let attempts = 0;

function savePassword(){

    savedPassword =
    document.getElementById("createPassword").value;

    let result =
    document.getElementById("result");

    if(savedPassword === ""){

        result.innerHTML =
        "<span style='color:red;'>Please create a password</span>";

        return;
    }

    result.innerHTML =
    "<span style='color:green; font-weight:bold;'>"
    + "Password Created Successfully"
    + "</span>";

    // Hide create password section
    document.getElementById("createSection").style.display =
    "none";

    // Show login section
    document.getElementById("loginSection").style.display =
    "block";

    // Automatically move cursor to password box
    document.getElementById("checkPassword").focus();
}

function checkPassword(){

    let userPassword =
    document.getElementById("checkPassword").value;

    let result =
    document.getElementById("result");

    // Do While Loop
    do{

        if(userPassword === savedPassword){

            result.innerHTML =
            "<span style='color:green; font-weight:bold;'>"
            + "Correct Password<br><br>"
            + "Student Name : Renee<br>"
            + "Department : Computer Science<br>"
            + "Semester : 4th Semester<br>"
            + "Status : Active"
            + "</span>";

            return;
        }

        attempts++;

        result.innerHTML =
        "<span style='color:red; font-weight:bold;'>"
        + "Wrong Password<br>"
        + "Remaining Attempts : "
        + (3 - attempts)
        + "</span>";

    }while(false);

    // While Loop
    while(attempts >= 3){

        result.innerHTML =
        "<span style='color:red; font-weight:bold;'>"
        + "Access Blocked! Too many wrong attempts."
        + "</span>";

        document.getElementById("checkPassword").disabled = true;

        break;
    }
}
