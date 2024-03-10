import mailSend from '@/utils/SendMail';
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        const data = await request.json()
        const mailData = {
            sender: 'shaharulsiyam0273@gmail.com',
            receiver: `shaharulsiyam56@gmail.com`,
            subject: `${data?.subject}`,
            msg: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #555;">
                <p>hello shaharul siyam,</p>
                <p>${data.msg}</p>
                <p>Best regards,<br>
                ${data.name}<br>
                <p> email : ${data?.email}</p>
                </p>
            </body>`,
        }
        await mailSend(mailData)
        return NextResponse.json({ success: true, msg: 'gmail sent' });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, msg: 'unable to send  mail' });
    }
}
