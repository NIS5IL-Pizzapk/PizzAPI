
exports.sendMailTest = (mail) => {
var nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    host: "smtp.hotmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "unavitatest2@outlook.fr",
        pass: "4fpTQ7W6nyaQ78"
    }
})

let mailDetails = {
    from: "unavitatest2@outlook.fr",
    to: mail,
    body:"test",
} 

mailTransporter.sendMail(mailDetails, function(err, info) {
    if(err) {
        
        console.log(err);
    } else {
        console.log("Sent : " + info.response);
    }
});



}