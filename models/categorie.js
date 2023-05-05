const mongoose =require("mongoose")
const categorieSchema=mongoose.Schema({
nomcategorie:{ type: String, required: true},
imagecategorie :{ type: String, required: false }
})
module.exports=mongoose.model('categorie',categorieSchema)