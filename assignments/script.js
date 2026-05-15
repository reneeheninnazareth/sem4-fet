let correctPassword = "admin123";
let attempts = 0;

function checkPassword(){

    let userPass =
    document.getElementById("pass").value;

    let result =
    document.getElementById("result");

    // Using do while loop
    do{

        if(userPass === correctPassword){

            result.innerHTML =
            "Login Successful";
            return;
        }

        attempts++;

        result.innerHTML =
        "Wrong Password! Attempts Left: "
        + (3 - attempts);

    }while(false);

    // Using while loop
    while(attempts >= 3){

        result.innerHTML =
        "Access Blocked";

        document.getElementById("pass").disabled = true;

        break;
    }
}
