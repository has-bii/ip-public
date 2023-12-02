import nodemailer from 'nodemailer'

export default function sendEmail(text : string) {
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
        subject: 'IP Has Changed',
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