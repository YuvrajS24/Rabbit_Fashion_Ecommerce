const express = require('express')
const Cart = require('../models/Cart.js')
const Product = require('../models/Product')
const {protect} =require('../middleware/authMiddleware.js')


const router = express.Router()


//Helper function to get a cart by user Id or guest Id

const getCart = async (userId, guestId) => {

    if(userId){
        return await Cart.findOne({user: userId});

    }else if (guestId){

        return await Cart.findOne({ guestId });
    }

    return null;
}













//@route POST /api/cart 
//@desc Add a product to the cart for a guest or logged in user
//@access Public


router.post("/", async (req,res)=> {

    const {productId, quantity , size, color, guestId, userId} = req.body;

    
    try {

        const product = await Product.findById(productId);

        if(!product) return res.status(404).json({message: "Product not found"});


        //Determine if the user is loggedin or guest

        let cart = await getCart(userId, guestId);

        //If the cart exists , update it

        if(cart){

            const productIndex = cart.products.findIndex(
                (p)=>p.productId.toString() === productId &&
                 p.size === size &&
                  p.color === color );

                     if( productIndex > -1){

                  //if the product already exists , update the quantity 


                  cart.products[productIndex].quantity += quantity;

                       
              }else{

                //add a new product 

                cart.products.push({

                    productId,
                    name:product.name,
                    image : product.images[0].url,
                    price : product.price,
                    size,
                    color,
                    quantity,

                });
              }

        }

        //Recalculate the total price 

        cart.totalPrice = cart.products.reduce((acc,item) => acc + item.price *item.quantity, 0)


     
        
    } catch (error) {
        
    }

})


