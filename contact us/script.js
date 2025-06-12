function showContactForm() {
  const envelope = document.getElementById("envelope");
  const contactForm = document.getElementById("contactFormContainer");

  envelope.classList.add("open");
  setTimeout(() => {
    contactForm.style.display = "block";
    envelope.style.display = "none";
  }, 500);
}

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_047prfv", "template_mr3whqe", parms)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS", response);
        })
        .catch(function(error) {
            alert("Failed to send email.");
            console.error("FAILED", error);
        });
}
