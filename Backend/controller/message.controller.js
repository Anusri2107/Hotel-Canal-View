import nodemailer from "nodemailer";

const PORT = process.env.PORT || 4000;

export const sendMessage = async (req, res) => {
  // try {
  //   const firstname = req.body.firstname;
  //   const lastname = req.body.lastname;
  //   const email = req.body.email;
  //   const subject = req.body.subject;
  //   const message = req.body.message;

  //   const mail = {
  //     from: firstname+lastname,
  //     to: process.env.EMAIL,
  //     subject: subject,
  //     text: message,
  //   };
  //   const transporter = nodemailer.createTransport({
  //     host: "gmail.com", //replace with your email provider
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: process.env.EMAIL,
  //       pass: process.env.PASSWORD,
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  //   // verify connection configuration
  //   transporter.verify(function (error, success) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //     }
  //   });

  //   transporter.sendMail(mail, (err, data) => {
  //     if (err) {
  //       res.json({
  //         status: "error",
  //       });
  //     } else {
  //       res.json(data);
  //     }
  //     // if (err) {
  //     //   console.log(err);
  //     //   res.status(500).json({message: "Internal Server Error"});
  //     // } else {
  //     //   res.status(200).json(data);
  //     // }
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
  const {firstname,lastname,email,subject,message} = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `${firstname} ${lastname} - ${subject}`,
      text: `Email: ${email}\n${message}`
    }
    transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
        console.log("Error",error);
      }
      else{
        console.log("Email sent" + info.response);
        res.status(201).json({status:201, info});
      }
    })
  } catch (error) {
    res.status(401).json({status:401,error});
  }
};
