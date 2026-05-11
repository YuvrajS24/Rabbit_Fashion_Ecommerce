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

    const {
      name,description,price,countInStock,sku,category,brand,sizes,colors,collections,material,gender,images,
    } = req.body;

    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (countInStock !== undefined) product.countInStock = countInStock;
    if (sku !== undefined) product.sku = sku;
    if (category !== undefined) product.category = category;
    if (brand !== undefined) product.brand = brand;
    if (sizes !== undefined) product.sizes = sizes;
    if (colors !== undefined) product.colors = colors;
    if (collections !== undefined) product.collections = collections;
    if (material !== undefined) product.material = material;
    if (gender !== undefined) product.gender = gender;
    if (images !== undefined) product.images = images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
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


