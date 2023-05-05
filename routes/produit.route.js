const express = require('express'); 
const router = express.Router(); 
const Produit=require("../models/produit") 
// afficher la liste des articles.
router.get('/', async (req, res, )=> { 
 try { 
 const produits = await Produit.find(); 
 
 res.status(200).json(produits); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// créer un nouvel article
router.post('/', async (req, res) => { 
 
 const nouvproduit = new Produit(req.body) 
 try { 
 await nouvproduit.save(); 
 res.status(200).json(nouvproduit ); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// chercher un article
router.get('/:produitId',async(req, res)=>{ 
 try { 
 const art = await Produit.findById(req.params.produitId); 
 
 res.status(200).json(art); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// modifier un article
router.put('/:produitId', async (req, res)=> { 
 const { reference, 
designation,prix,marque,quantite,image,categorieID} = req.body; 
 const id = req.params.produitId; 
 try { const art1 = { 
    reference:reference,designation:designation,prix:prix,marque:marque,quantite:quantite,image:image,categorieID:categorieID, _id:id }; 
     await Produit.findByIdAndUpdate(id, art1); 
     res.json(art1); 
     } catch (error) { 
     res.status(404).json({ message: error.message }); 
     } 
    }); 
    // Supprimer un article
    router.delete('/:produitId', async (req, res)=> { 
     const id = req.params.produitId; 
     await Produit.findByIdAndDelete(id); 
     res.json({ message: "article deleted successfully." }); 
    }); 
    module.exports = router; 