import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


const ses = new SESClient({ region: "us-east-1" });


const RECEIVER = "your email";
const SENDER = "your email";


export const handler = async (event) => {
 console.log("Received event:", event);


 const params = {
   Destination: { ToAddresses: [RECEIVER] },
   Message: {
     Body: {
       Text: {
         Data: `Full Name: ${event.name}
Phone: ${event.phone}
Email: ${event.email}
Message: ${event.message}`,
         Charset: "UTF-8",
       },
     },
     Subject: { Data: `Website Query Form: ${event.name}`, Charset: "UTF-8" },
   },
   Source: SENDER,
 };


 await ses.send(new SendEmailCommand(params));


 return {
   statusCode: 200,
   headers: {
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "*",
   },
   body: JSON.stringify({ result: "Success" }),
 };
};
