// import  express  from 'express';

// const app=express()
// const port=3000

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_RMSMZ9FyWt6ImW4Ooj0suRxLNbmd');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));




// app.get('/',(req,res)=>{
// res.send("hygh")
// })
// rnd_b2JZFpRsYji4DMjXtN4t7rig5S5J
