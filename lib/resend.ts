import 'server-only';
import { Resend } from 'resend';

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export const RESEND_FROM = 'Fee The Developer <contact@feethedeveloper.com>';

export async function sendConfirmationEmail(options: {
  to: string;
  subject: string;
  text: string;
}) {
  const resend = getResendClient();
  return resend.emails.send({
    from: RESEND_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
  });
}
