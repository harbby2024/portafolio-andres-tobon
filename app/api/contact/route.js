import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'andres.disenoydesarrollo@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: email,
      to: 'andres.disenoydesarrollo@gmail.com',
      subject: `Nuevo mensaje: ${subject}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ message: 'Correo enviado exitosamente' })
  } catch (error) {
    console.error(error)
    return Response.json(
      { message: 'Error al enviar correo' },
      { status: 500 }
    )
  }
}
