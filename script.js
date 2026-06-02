function checkPassword(){

    let password =
        document.getElementById("password").value;

    if(password === "080606"){

        document.getElementById("message").innerHTML =
        "❤️ Correct Password ❤️";

    }
    else{

        document.getElementById("message").innerHTML =
        "🤭 Wrong Password. Hint: Your DOB ❤️";

    }
}