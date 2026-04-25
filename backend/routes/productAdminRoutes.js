const express = require("express")
const Product = require("../models/Product")
const {protect, admin} = require("../middleware/authMiddleware")

const router = express.Router();

//@route GET /api/admin/products
//@desc Get all products (Admin Only)
//@access Private/Admin

router.get("/", protect , admin , async(req,res)=>{

  try {

    const products = await Product.find({})
    res.json(products);

} catch (error) {

    console.error(error);

    res.status(500).json({message:"Server Error"});
    
  }

});



//@route PUT /api/admin/products/:id
//@desc Update a product by id (Admin Only)
//@access Private/Admin

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});



//@route DELETE /api/admin/products/:id
//@desc Delete a product by id (Admin Only)
//@access Private/Admin


router.delete("/:id", protect, admin, async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;


