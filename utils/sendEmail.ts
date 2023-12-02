import nodemailer from 'nodemailer'

export default function sendEmail(subject : string,text : string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: Bun.env.EMAIL,
          pass: Bun.env.PASSWORD
        }
      });
      
      const mailOptions = {
        from: Bun.env.EMAIL,
        to: Bun.env.RECEIVER,
        subject: subject,
        text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          // do something useful
        }
      });
}