import { loadStripe} from '@stripe/stripe-js'
export default function Subscribe(){
    const handlerClick = async e =>{
    const stripe = await loadStripe('pk_test_51K9SLSJViAryizK2T6YHY4DgVJrH1n5ku2J6zUef37V6WFIQbRCmxbPPV0jLnJWHMRcHEnpQBfarQqH2zw2WJeHP00XcEezLY2')
    const {error} = await stripe.redirectToCheckout({
       lineItems:[{
           price:'price_1K9T6wJViAryizK2NBLih2WY',
           quantity:1
       }],
       mode:'payment',
       successUrl:'http://localhost:3000',
       cancelUrl:'http://localhost:3000/cancel',
       customerEmail:"dan.menchen@gmail.com"
       })
    } 
 return (
     <button onClick={handlerClick}>get</button>
 )
}
