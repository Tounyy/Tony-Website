const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

<script src="https://smtpjs.com/v3/smtp.js">
</script>
    function sendEmail(){
      Email.send({
          Host : "smtp.gmail.com",
          Username : "tonyluu125576@gmail.com",
          Password : "pt030506",
          To : 'luutony82@gmail.com',
          From : "tonyluu125576@gmail.com",
          Subject : "New Contact Form Enquiry",
          Body : "And this is the body"
      }).then(
      message => alert(message)
      );
  } 