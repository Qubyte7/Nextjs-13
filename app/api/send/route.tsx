import { Resend } from "resend";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";



const resend = new Resend(process.env.RESEND_API_KEY);

export async function  POST(){
        await resend.sendEmail({
        from:"shamiinnocent123@gmail.com",
        to:"shamiinnocent123@gmail.com",
        subject:" welcoome",
        react:<WelcomeTemplate name="innocent"/>
    })
}


