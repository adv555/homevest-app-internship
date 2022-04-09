import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
} = process.env;

class MailService {
    transporter: nodeMailer.Transporter;
    constructor(){
        this.transporter = nodeMailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: true,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD
            }
        });
    }
    public async sendResetPasswordLink(to: string, link: string): Promise<void>{
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: 'Homevest Reset password',
            text: '',
            html: `
                    <div>
                        <h1>Follow the link bellow to reset your password</h1>
                        <h2><a href="http://localhost:3000/reset-password/${link}">Reset your password</a></h2>
                    </div>
            `
        })
    }
    public async sendActivationMail(to: string, link: string): Promise<void>{
        await this.transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: 'Homevest account activation',
            text: '',
            html: `
                    <div>
                        <h1>Activation code</h1>
                        <h2>${link}</h2>
                    </div>
            `
        })
    }    
}

export { MailService };
