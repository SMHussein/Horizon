// import FormData from 'form-data';
// import Mailgun from 'mailgun.js';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export const POST = async (req) => {
    const { message, phone, name, email } = await req.json();

    const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender('MS_73FeBk@airygarden.com', 'Contact Form');

    const recipients = [new Recipient('saif_hussein_94@outlook.com', 'Your Client')];

    const html = prepareHtml(name, email, phone, message);

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject('Message through website')
        .setHtml(html);

    try {
        await mailerSend.email.send(email2Params);
        return new Response('Email sent successfully!', { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to send email!', { status: 500 });
    }
};

const prepareHtml = (name, email, phone, message) => {
    return `
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }

                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .header {
                    text-align: center;
                    border-bottom: 1px solid #dddddd;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }

                .header h1 {
                    margin: 0;
                    color: #333333;
                }

                .content {
                    padding: 0 20px;
                }

                .content h2,
                .content h3 {
                    margin: 10px 0;
                    color: #555555;
                }

                .content p {
                    margin: 20px 0;
                    line-height: 1.6;
                    color: #666666;
                }

                .footer {
                    text-align: center;
                    padding: 10px 0;
                    margin-top: 20px;
                    border-top: 1px solid #dddddd;
                    color: #999999;
                }
            </style>
        </head>

        <body>
            <div class="email-container">
                <div class="header">
                    <h1>${name}</h1>
                </div>
                <div class="content">
                    <h2>Email: ${email}</h2>
                    <h3>Phone: ${phone}</h3>
                    <p>${message}</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Horizon. All rights reserved.</p>
                </div>
            </div>
        </body>
</html>
    `;
};
