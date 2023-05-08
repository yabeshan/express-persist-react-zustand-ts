import express from "express";

import router from "./routes.js"

const app = express()
app.use(express.json())

app.use(router);

// app.use((req,res) => {
//   res.type('text/plain')
//   res.status(404)
//   res.send('404 - not found')
// })

// app.use((err,req,res,next) => {
//   console.log('____APP err____', err.message)
//   res.type('text/plain')
//   res.status(500)
//   res.send('500 - Server error :: ' + err.message)
// })

const port = process.env.PORT || 3000;
const start = async ()=>{
  try {
    // init DB
    app.listen(port, () => console.log('____start App port____', port) )
  } catch (err: any) {
    console.log('____start App error____', err.message);
    process.exit(1);
  }
};

start();
