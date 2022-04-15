// In functions/hello/[name].js
export default (req, res) => {
    res.status(200).send(`Hello ${req.query.name}!`)
  }



// async function handler(req, res) {

//   // Check webhook secret to make sure the request is valid
//   if (
//     req.headers['nhost-webhook-secret'] !== process.env.NHOST_WEBHOOK_SECRET
//   ) {
//     return res.status(400).send('Incorrect webhook secret')
//   }

//   // Do something
//   // Example:
//   // - Send an email
//   // - Create a subscription in Stripe
//   // - Generate a PDF
//   // - Send a message to Slack or Discord
//   // - Update some data in the database

//   console.log(JSON.stringify(req.body, null, 2))

//   return res.status(200).send(`Hello ${req.query.name}!`)
// }
// export default handler;
