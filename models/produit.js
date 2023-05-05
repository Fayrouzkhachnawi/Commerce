const mongoose =require("mongoose")
const Categorie =require("./categorie.js");
const produitSchema=mongoose.Schema({
reference:{ type: String, required: true,unique:true },
designation:{ type: String, required: true,unique:true },
prix:{ type: Number, required: false },
marque:{ type: String, required: true },
quantite:{ type: Number, required: false },
image:{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,
ref:Categorie}
})
module.exports=mongoose.model('produit',produitSchema)
