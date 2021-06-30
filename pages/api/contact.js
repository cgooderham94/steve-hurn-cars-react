const nodemailer = require("nodemailer");

const contact = (req, res) => {
    const transporter = nodemailer.createTransport({
        port: process.env.SMTP_PORT,
        host: process.env.SMTP_HOST,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        },
        secure: true
    });

    const referralPage = req.body.referralPage || '';
    const mailSubject = referralPage ? `You've received a new enquiry regarding '${referralPage}'` : `You've received a new general contact enquiry`;
    const mailText = `You've received a new enquiry:\r\nName: ${req.body?.fullName || ''}\r\nTelephone Number: ${req.body?.telephoneNumber || ''}\r\n\Email: ${req.body?.email}\r\nEnquiry: ${req.body?.enquiry || ''}`;
    const mailHtml = `<p>You've received a new enquiry:</p><ul><li>Name: ${req.body?.fullName || ''}</li><li>Telephone Number: ${req.body?.telephoneNumber || ''}</li><li>Email: ${req.body?.email || ''}</li><li>Enquiry: ${req.body?.enquiry || ''}</li></ul>`;

    const mailData = {
        from: process.env.SMTP_SENDER_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: mailSubject,
        text: encodeURIComponent(mailText),
        html: mailHtml
    }

    console.log(`Referral page is: ${referralPage}`);

    transporter.sendMail(mailData, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });

    res.status(200);
}

export default contact;