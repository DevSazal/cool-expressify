import 'dotenv/config';
import { Auth } from '@vonage/auth';
import { Vonage } from '@vonage/server-sdk';

const { VONAGE_API_KEY: apiKey, VONAGE_API_SECRET: apiSecret } = process.env;

const credentials = new Auth({
  apiKey,
  apiSecret,
});

const vonage = new Vonage(credentials);
const from = 'Vonage APIs';

export async function sendSMS(to: string, body: string): Promise<void> {
  console.log(body);
  await vonage.sms
    .send({ to, from, body })
    .then((resp: any) => {
      console.log('Message sent successfully');
      console.log(resp);
    })
    .catch((err: any) => {
      console.log('failed to send message!');
      // console.error(err);
    });
}
