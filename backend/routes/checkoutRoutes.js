const express = require ("express")
const Checkout = require("../models/Checkout")
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const Order = require("../models/Order")
const {protect} = require("../middleware/authMiddleware")


const router = express.Router();


//@route POST /api/checkout
//@desc Create a new checkout session
//@access Private

router.post("/", protect, async (req, res) => {

  const { checkoutItems, shippingAddress, paymentMethod } = req.body;

  

  //  Cart items check
  if (!checkoutItems?.length) {
    return res.status(400).json({ message: "No items in checkout" });
  }

  //  Payment method check
  if (!paymentMethod) {
    return res.status(400).json({ message: "paymentMethod is required" });
  }

 

  // ONLY AFTER ALL CHECKS
  try {
     
    const validatedItems = await Promise.all(
          
      checkoutItems.map(async (item) => {
           
      const product = await Product.findById(item.productId);
      
        if(!product){
         
          throw new Error(`Product not found : ${item.productId}`) ;

      }

      
        
      return {
        productId:product._id,
        name:product.name,
        image:product.images[0]?.url,
        price: product.price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      };
      })
  );

   const calculatedTotal = validatedItems.reduce((total, item) => total + item.price*item.quantity, 0);


    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems: validatedItems,
      shippingAddress,
      paymentMethod,
      totalPrice: calculatedTotal,
      paymentStatus: "Pending",
      isPaid: false,
    });

    
    res.status(201).json(newCheckout);

  } catch (error) {
    console.error("Checkout Error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
});



//@route PUT /api/checkout/:id/pay
//@desc Upgrade checkout to mark as paid after successful payment 
//@access Private


router.put("/:id/pay", protect , async(req,res)=>{

    const {paymentStatus, paymentDetails } = req.body;


    try {

        const checkout = await Checkout.findById(req.params.id);

        if(!checkout){

           return res.status(404).json({ message: "Checkout not found" });

        }

        if(paymentStatus === "paid"){

            checkout.isPaid = true;
            checkout.paymentStatus = paymentStatus;
            checkout.paymentDetails = paymentDetails;
            checkout.paidAt = Date.now();

            await checkout.save();

            res.status(200).json(checkout);

        }else{

         res.status(400).json({message : "Invalid Payment Status"});

        }

          
    } catch (error) {


     console.error(error);
     res.status(500).json({message: "Server Error"});


}

});




// @route POST /api/checkout/:id/finalize
// @route Finalise checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect , async(req,res) => {

    try {

        const checkout = await Checkout.findById(req.params.id);

        if(!checkout){

            return res.status(404).json({message: "Checkout not found"})


        }


        if (checkout.user.toString() !== req.user._id.toString()) {
             return res.status(401).json({ message: "Not authorized" });
        }


        if(checkout.isPaid && !checkout.isFinalised){
             
            //Create final order based on checkout details


     const finalOrder = await Order.create({
    user: checkout.user,
    orderItems: checkout.checkoutItems,           
    shippingAddress: checkout.shippingAddress,    
    paymentMethod: checkout.paymentMethod,
    totalPrice: checkout.totalPrice,
    isPaid: true,
    paidAt: checkout.paidAt || Date.now(),     
    isDelivered: false,
    paymentStatus: "paid",
    paymentDetails: checkout.paymentDetails,
    
});


  //Mark the checkout as finalized


  checkout.isFinalised = true;


  checkout.finalisedAt = Date.now();


  await checkout.save();



  //Delete the cart asscociated with the user 

  await Cart.findOneAndDelete({ user: checkout.user })

  res.status(201).json(finalOrder)


}else if(checkout.isFinalised) {

    res.status(400).json({message:"Checkout already finalized"})



}else{

    res.status(400).json({message:"Checkout is not paid"})

}
        
    } catch (error) {

        console.error(error);

        res.status(500).json({message:"Server Error"});
        
    }

});


module.exports = router;








