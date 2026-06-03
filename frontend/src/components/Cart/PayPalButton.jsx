import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError, onCancel}) => {


  return (

    <PayPalScriptProvider options={{"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID}}>



       <PayPalButtons style={{layout:"vertical"}}
             
             createOrder={(data , actions) => {

                return actions.order.create({
                    purchase_units:[{amount:{value:parseFloat(amount).toFixed(2), currency_code: "USD"}},]
          })
        }}

              onApprove={(data,actions)=>{

       return actions.order.capture().then(onSuccess)

      }}

                onError={(err) => {
                    console.error("PayPal Error:", err);
                    if (onError) onError(err);
                }}

                onCancel={() => {
                    console.log("Payment cancelled by user");
                    if (onCancel) onCancel();
                }}

   />

 
   </PayPalScriptProvider>



  
  )
}

export default PayPalButton



