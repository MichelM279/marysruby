import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as cors from 'cors';

const corsHandler = cors({ origin: true });
const transporter = nodemailer.createTransport('smtps://marysrubywebapp@gmail.com:MarysRubyKennel@smtp.gmail.com');

export const sendMail = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        req.method = 'POST';
        const subject: string = req.query.subject;
        const htmlString: string = req.body.html;
        const mailOptions = {
            to: 'marysruby17@gmail.com',
            subject: subject,
            html: htmlString
        }
        transporter.sendMail(mailOptions, function(err, response) {
            if (err) {
                res.end('Mail not sent. Subject: ' + subject + '. html: ' + htmlString );
            } else {
                res.end('Mail sent');
            }
        })
    })
});
