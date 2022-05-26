import React, {useState}  from "react";
import {Link} from "react-router-dom";
interface IProps{
    price:number,
    exprice:number
}
function BuyButton (props:IProps){
    const [coupval,setCoupval]=useState("");
    const [standardPrice,setStdPrice]=useState(props.price);
    const [expressPrice,setExpPrice]=useState(props.exprice);
    const saveInput=(e:React.ChangeEvent<HTMLInputElement>)=>setCoupval(e.target.value);
    //useEffect(()=>{} )
    var discnt = 0; // no default percent discount

    var coupons = new Array ( // place to put coupon codes
    "XVJ8","XVJ9", "XQR3"// 1st coupon value - comma seperated
    );
        function ChkCoup () { // check user coupon entry
        var i;
        discnt = 0; // assume the worst
        for (i=0; i<coupons.length; i++) {
            if (coupval === coupons[i]) {
                  //  discnt = coupdc[i]; // remember the discount amt
                    alert ("Valid coupon number! \n\n $3 discount now in effect.");
                    setStdPrice(standardPrice-3);
                    setExpPrice(expressPrice-3)
                    return;}  
                }
        alert ("'" + coupval + "' is not a valid code!");
    }
    console.log(props.price,"sprice",props.exprice,"eprice")
    return  <form action="https://www.paypal.com/cgi-bin/webscr" 
                 method="post" >
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="add" value="1" />
        <input type="hidden" name="business" value="SuperSharpTeam@gmail.com" />
        {/* <input type="hidden" name="business" value="NW9ZH88NEP8H8" /> */}
        <input type="hidden" name="item_name" value="SuperSharpHB600" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="lc" value="C2"/>
        <input type="hidden" name="item_number" value="HB600" />
        <input type="hidden" name="button_subtype" value="products"/>
        <input type="hidden" name="no_note" value="0"/>
        <input type="hidden" name="cn" value="Add special instructions to the seller:G01+"/>
        <input type="hidden" name="no_shipping" value="2"/>
        <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted"/>
        <table style={{"margin": "auto"}}>
            <tbody>
            <tr><td>
                <input type="hidden" name="on0" value="Shipping Type"/>Shipping type
                <p className="note">* standrd 10-25days delivery </p>
                <p className="note">* express 5-8days delivery </p>
                </td>
            </tr>
            <tr><td>
                <select name="os0">
                    <option value="Standard">Standard US${standardPrice} </option>
                    <option value="Express">Express USD${expressPrice} </option>
                </select> 
                </td>
            </tr>
            </tbody>
        </table>
        <input type="hidden" name="option_select0" value="Standard"/>
        <input type="hidden" name="option_amount0" defaultValue={standardPrice}/>
        <input type="hidden" name="option_select1" value="Express"/>
        <input type="hidden" name="option_amount1" defaultValue={expressPrice}/>
        <input type="hidden" name="option_index" value="0"/>
        Have a Coupon?
        <input type = "text" size={30}
            name = "coupcode" 
            onChange={saveInput} />
        <input type="button" value="Apply" 
                onClick={ ChkCoup } />
        <p>Quantity    
            <input type="text" name="quantity" defaultValue="1" size={2} />
        </p>
        <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_SM.gif" 
            name="submit" alt="cart add" />
            <div>< Link to="/Contact" >Return & Return Policy</Link></div> 
    </form>
}

export default BuyButton;

