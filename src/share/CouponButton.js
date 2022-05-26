import {useState,useEffect}  from "react";
import Policy from "../General/Policy";
function CouponButton (){
    const [coupval,setCoupval]=useState("0");
    const [standardAmount,setStdAmount]=useState("38");
    const [expressAmount,setExpAmount]=useState("60");
    const saveInput=(e)=>setCoupval(e.target.value);
    //useEffect(()=>{} )
    var discnt = 0; // no default percent discount

    var coupons = new Array ( // place to put coupon codes
    "XVJ9",
    "XQR3" // 1st coupon value - comma seperated
    );
        function ChkCoup () { // check user coupon entry
        var i;
        discnt = 0; // assume the worst
        for (i=0; i<coupons.length; i++) {
            if (coupval == coupons[i]) {
                  //  discnt = coupdc[i]; // remember the discount amt
                    alert ("Valid coupon number! \n\n $3 discount now in effect.");
                    setStdAmount("35");
                    setExpAmount("57")
                    return;}  
                }
        alert ("'" + coupval + "' is not a valid code!");
    }
    
    return  <form action="https://www.paypal.com/cgi-bin/webscr" 
                 method="post" >
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="add" value="1" />
        <input type="hidden" name="business" value="SuperSharpTeam@gmail.com" />
        {/* <input type="hidden" name="business" value="NW9ZH88NEP8H8" /> */}
        <input type="hidden" name="item_name" value="SuperSharpG01" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="lc" value="C2"/>
        <input type="hidden" name="item_number" value="G01" />
        <input type="hidden" name="button_subtype" value="products"/>
        <input type="hidden" name="no_note" value="0"/>
        <input type="hidden" name="cn" value="Add special instructions to the seller:G01+"/>
        <input type="hidden" name="no_shipping" value="2"/>
        <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted"/>
        <table style={{"margin": "auto"}}>
            <tbody>
            <tr><td>
                <input type="hidden" name="on0" value="Shipping Type"/>Shipping type
                </td>
            </tr>
            <tr><td>
                <select name="os0">
                    <option value="Standard">Standard $38.00 USD</option>
                    <option value="Express">Express $60.00 USD</option>
                </select> 
                </td>
            </tr>
            </tbody>
        </table>
        <input type="hidden" name="option_select0" value="Standard"/>
        <input type="hidden" name="option_amount0" defaultValue={standardAmount}/>
        <input type="hidden" name="option_select1" value="Express"/>
        <input type="hidden" name="option_amount1" defaultValue={expressAmount}/>
        <input type="hidden" name="option_index" value="0"/>
        Have a Coupon?
        <input type = "text"
            size = "3"
            name = "coupcode" 
            onChange={saveInput}/>
        <input type="button" value="Apply" 
                onClick={ ChkCoup } />
        <p>Quantity    
            <input type="text" name="quantity" defaultValue="1" size="1" />
        </p>
        <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_SM.gif" 
            name="submit" alt="cart add" />
        <Policy/>
    </form>
}

export default CouponButton;

/***
<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" 
method="post" >
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="business" value="NW9ZH88NEP8H8">
<input type="hidden" name="lc" value="C2">
<input type="hidden" name="item_name" value="SUPER SHARP SCREEN G01">
<input type="hidden" name="item_number" value="G01">
<input type="hidden" name="button_subtype" value="products">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="cn" value="Add special instructions to the seller:">
<input type="hidden" name="no_shipping" value="2">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="add" value="1">
<input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHosted">
<table>
<tr><td><input type="hidden" name="on0" value="Shipping Type">Shipping Type</td></tr><tr><td><select name="os0">
	<option value="Standard">Standard $38.00 USD</option>
	<option value="Express">Express $60.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="option_select0" value="Standard">
<input type="hidden" name="option_amount0" value="38.00">
<input type="hidden" name="option_select1" value="Express">
<input type="hidden" name="option_amount1" value="60.00">
<input type="hidden" name="option_index" value="0">
<input type="image" 
src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" 
name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
***/