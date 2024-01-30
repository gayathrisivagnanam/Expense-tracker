const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = 3001
const Expense=require('./models/expense');
mongoose.connect('mongodb+srv://gayathri:gayathri235@cluster0.a1ayjip.mongodb.net/newDB?retryWrites=true&w=majority',{
  useUnifiedTopology: true
});
app.use(express.json())
app.get('/expense', async(req, res) => 
{
  const result= await Expense.find();
  res.send(result)
  });


// app.get('/expense/:id', async(req, res) => {
//   try{const id=req.params.id;
//   const result= await Expense.findById(id);
  
//   console.log(req.params);
//   // const result= await Expense.find();
//   if(result)
//   {res.send(result);

//   }else{
//     res.send("No Expense with that id")

//   }}catch(err){
//     res.send(err);
  // }})
app.use(express.json())
app.post('/expense', async(req, res) => {
  console.log(req.body);
  const newExpense=req.body;
  await Expense.create(newExpense);
  // const expense=await Expense.find();
    res.send('Create agiruchu doii');
  })


app.delete('/expense/:id', async(req, res) => {
  try{const id=req.params.id;
  const result= await Expense.findByIdAndDelete(id);
  
  console.log(req.params);
  // const result= await Expense.find();
  if(result)
  {res.send(result);

  }else{
    res.send("No Expense with that id")

  }}catch(err){
    res.send(err);
  }})

  app.put('/expense/:id', async(req, res) => {
    const id=req.params.id;
    const updateObject=req.body;
    const updatedObject= await Expense.findByIdAndUpdate(id,{$set:updateObject},{
      new:true})
    
  
    res.send(updatedObject);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})