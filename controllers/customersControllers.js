const pool=require("../db/db")

// ===== customerID  ======== //
const getcustomers=(req,res) => {
    console.log(`/api/customers/ endpoint was hit🎯`)
    console.log(req.body)
    // ====== Just do for checking customer status for future
    const query = `SELECT CustomerID FROM customers WHERE CustomerID = ?`;
    pool.execute(query,[req.body.customerID],(err,result)=>{
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({errorMessage: "An error occurred while fetching data from the database."})
      }
      // conditional statement that Handling the result
    if (result.length === 0 ){
      return res.sendStatus(401) //e.g invalid credential
    }
      // conditional statement that Handling the result
    if (result.length >= 1){
      return res.status(200).send(result);
    }
      console.log("Result", result)
      
    })
  }


  module.exports={getcustomers}