const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./config/.env" });
// on exprote le middleware
module.exports = (req, res, next) => {
  const secretToken = process.env.TOKEN_SECRET;
  try {
    const token = req.headers.authorization.split(" ")[1];
    const tokenDecoded = jwt.verify(token, secretToken,);
    const userId = tokenDecoded.userId;
    console.log("-----> token :");
    console.log(token);
    
    console.log("-----> tokenDecoded :");
    console.log(tokenDecoded);

    console.log("-----> userId :");
    console.log(userId);


    if (req.body.userId && req.body.userId !== userId) {
    console.log("User ID non valable");
      throw "Le user ID n'est pas valable";
    } else {
      next();
    }
  } catch (err) {
    res.status(401).json({ err: "Requete non authentifiée !" });
  }
};
