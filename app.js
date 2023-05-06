 const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
dotenv.config()
const categorieRouter =require("./routes/categorie.route")
const produitRouter =require("./routes/produit.route") 
const app = express();




//Les cors 
app.use(cors())
//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASECLOUD,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {console.log("Connexion à la base de données réussie");
    }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
    });
    app.use('/api/categories', categorieRouter);
    app.use('/api/produits', produitRouter); 
    app.get("/",(req,res)=>{
    res.send("bonjour");
    });
    app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports = app;
    