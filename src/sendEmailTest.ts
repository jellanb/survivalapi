import nodemailer from 'nodemailer'
//gmail services, markdownd


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'jellansystem@gmail.com',
        pass: '9684150jellan'
    }
});

const mailOptions = {
    from: 'jellansystem@gmail.com',
    to: 'jellan_15@hotmail.com',
    subject: 'Sending Email using node.js',
    text: 'That was easy test'
};

export const  sendEmail = () =>{
    transporter.sendMail(mailOptions, (error, info) =>{
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent : ${info.response}`);
        }
    })
}
