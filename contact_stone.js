document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");
    const btn = document.getElementById("btn1");

    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("gmail").value.trim();
        const message = document.getElementById("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields ❌");
            return;
        }

        emailjs.send(
            "service_5dh9ivn", 
            "template_ofqj74g", 
            {
                from_name: name,
                from_email: email,
                message: message,
            }
        )
        .then(() => {
            alert("Email sent successfully ✅");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send email ❌");
            console.error("EmailJS Error:", error);
        });
    });

});
