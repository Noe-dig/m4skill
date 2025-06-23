function sendMail(){
    const formulier = document.querySelector(".contact__form");
    const mailToValue = formulier.querySelector('input[name="send_to_mail"]').value;
    const mailCCValue = formulier.querySelector('input[name="email"]').value;
    const naam = formulier.querySelector('input[name="naam"]').value;
    const bericht = formulier.querySelector('textarea[name="bericht"]').value;

    const subject = `Bericht van ${encodeURIComponent(naam)}`;
    const body = `Beste ${encodeURIComponent(mailToValue)}%0A%0A${encodeURIComponent(bericht)}}%0A%0A%0A Met vriendelijke groet, %0A${encodeURIComponent(naam)}`;

    const mailToLink = `mailto:${mailToValue}?cc=${mailCCValue}&subject=${subject}&body=${body}`;

    window.location.href = mailToLink;
    console.log("verzonden");
}

function nav_top() {
  document.documentElement.scrollTop = 0;
}
