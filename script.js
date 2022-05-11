// JJWebDesign
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

(function(){ emailjs.init("96AWZh30TPMx1W2dr"); })();

function sendMessage() {

    const name = document.getElementById(`name`).value;
    const fromEmail = document.getElementById(`email`).value;
    const fromPhone = document.getElementById(`phone`).value;
    const message  = document.getElementById(`comments`).value;

    if ((name == ``) || (email == ``) || (phone == ``))
    {
        alert(`Contact information cannot be left blank`);
        return;
    }

    if (message == ``)
    {
        message = `No message sent`;
    }

    let contents = {

        from_name: name,
        email: fromEmail,
        phone: fromPhone,
        message: message
    };

    emailjs.send(`service_6hv457q`, `template_i1lnmis`, contents).then(function() {alert(`Message Sent`)});

}

function navBarChange () {

    let nav = document.getElementById(`navBar`);
    let rect = document.getElementById(`about`).getBoundingClientRect();

    nav.style.backgroundColor = `rgba(255, 193, 112, 0.5)`;
    nav.style.height = `20px`;

    if (rect.top < 0)
    {
        nav.style.position = `fixed`;

    }
    else
    {
        nav.style.position = `sticky`;

    }

    setTimeout(() => {
        
        nav.style.backgroundColor = `rgb(255, 193, 112)`; 
        
        nav.style.height = `40px`;        

    }, 750);

}