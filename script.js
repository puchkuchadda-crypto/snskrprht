function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === "080606") {

        document.getElementById("message").innerHTML =
        "✨ Welcome to your birthday adventure ❤️";

        setTimeout(() => {
            window.location.href = "balloon.html";
        }, 2000);

    } else {

        document.getElementById("message").innerHTML =
        "🤭 Wrong Password. Hint: Your DOB ❤️";

    }
}