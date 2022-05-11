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