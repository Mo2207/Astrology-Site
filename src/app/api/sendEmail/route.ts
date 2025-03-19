
// import { EmailTemplate } from '../../components/emailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Mariya Kovalenko <onboarding@resend.dev>', // Mariya email
//       to: ['gabemorris1042@gmail.com'], // Users email
//       subject: 'Your Intensive Course Link!',
//       react: EmailTemplate({ courseLink: "examlpe-link" }) as React.ReactElement,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }