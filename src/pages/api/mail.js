import Nodemailer from 'nodemailer'

function formatEnquiryEmail(enquiryDetails) {
    return(
        `An enquiry for a long term rental has been made. Details follow.
_________________________________________________________________
        
        Booking Details:
        -------------------------------
        Car:          ${enquiryDetails.car}
        Date:         ${enquiryDetails.pickupDate.split("T")[0]}
        Period:       ${enquiryDetails.period} months

        Delivery:     ${enquiryDetails.delivery}

        Client Details:
        -------------------------------
        Name:         ${enquiryDetails.name}
        Email:        ${enquiryDetails.email}
        Tel:          ${enquiryDetails.phone}
        Message:      ${enquiryDetails.message}
        `
    )
}

function formatConfirmEmail(enquiryDetails) {
    return `Hello ${enquiryDetails.name}!
Thank you for choosing Allure rent-a-car! 
We have received your enquiry and an agent will contact you soon.

_________________________________________________________________
        
    Booking Details:
    -------------------------------
    Car:          ${enquiryDetails.car}
    Date:         ${enquiryDetails.pickupDate.split("T")[0]}
    Period:       ${enquiryDetails.period} months

    Client Details:
    -------------------------------
    Name:         ${enquiryDetails.name}
    Email:        ${enquiryDetails.email}
    Tel:          ${enquiryDetails.phone}
    Message:      ${enquiryDetails.message}



Best regards,
Allure rent-a-car

+357 99 667777

www.allure-rent-a-car.com

Leoforos Amathous 32,
Zanna Complex Block 1 Shop 8,
Limassol, 4532
    `
}

export default function handler(req, res) {

    const transporter = Nodemailer.createTransport({
        host: "smtp.zoho.eu",
        secure: true,
        port: 465,
        auth: {
          user: "admin@allure-rent-a-car.com",
          pass: "5Hdt6LKkwKHb",
        },
      });

      if(req === "POST") {
        const enquiryMailOptions = {
            from: "admin@allure-rent-a-car.com",
            to: "kangkelidis@gmail.com",
            subject: `Leasing Enquiry - ${JSON.parse(req.body).car} - ${JSON.parse(req.body).name}`,
            text: formatEnquiryEmail(JSON.parse(req.body))
        }
    
        const confirmMailOptions = {
            from: "info@allure-rent-a-car.com",
            to: JSON.parse(req.body).email,
            subject: 'Long Term Booking Enquiry',
            text: formatConfirmEmail(JSON.parse(req.body)),
        }
    
        transporter.sendMail(enquiryMailOptions, (error, info) => {
            if (error) {
              return console.error(error);
            }
            console.log(info);
          })
        transporter.sendMail(confirmMailOptions, (error, info) => {
            if (error) {
              return console.error(error);
            }
            console.log(info);
          })
      }


      if(req === "GET") {
        const clientEmailOptions = {
          from: "info@allure-rent-a-car.com",
          to: JSON.parse(req.body).email,
          subject: `Enquiry - ${JSON.parse(req.body).name}`,
          text: formatClientEmail(JSON.parse(req.body))
        }
        const allureEmailOptions = {
          from: "admin@allure-rent-a-car.com",
          to: "kangkelidis@gmail.com",
          subject: `Enquiry - ${JSON.parse(req.body).name}`,
          text: formatClientEmail(JSON.parse(req.body))
        }
  
      }

    res.status(200).json({status: "ok"})
}