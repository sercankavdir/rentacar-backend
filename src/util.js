const mailer = require('nodemailer')

const sendMail = (formData, carData) => {
    const user = ''
    const pass = ''
    const to = formData.email
    const subject = 'Rent a Car App'
  
    const transporter = mailer.createTransport({
      auth: {
        user,
        pass
      },
      service: 'gmail'
    })
  
    const mailOptions = {
      from: user,
      to,
      subject,
      html: `<b>Merhaba ${formData.name}, ${carData.name} adlı aracı ${formData.date} tarihinde ${formData.dayCount} günlüğüne kiraladın.<br>
        Araba özellikleri <br>
        Koltuk Sayısı: ${carData.seatNumber}  Yakıt Tipi: ${carData.fuelType} Klima: ${carData.climate} Vites Tipi: ${carData.gear}<br>
        Fiyat:  ${carData.price} - For ${formData.dayCount} days TL</b> 
      `
    }
  
    transporter.sendMail(mailOptions, error => {
      if (error) throw new Error(error.message)
      console.log('Mail sent.')
    })
}

module.exports = sendMail;