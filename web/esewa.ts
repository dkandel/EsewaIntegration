import { eSewaConfig } from "./esewa-config";

class EsewaUI{
//#region Esewa
selectEsewa() {
    var path = eSewaConfig.eSewaUrl;
    const productId = "UNIQUE_PRODUCT_ID";
    var params = {
      amt: "AMOUNT_TO_BE_CHARGED",
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: "AMOUNT_TO_BE_CHARGED",
      pid: productId,
      scd: eSewaConfig.eSewaMerchant,
      su: `${eSewaConfig.redirectBaseUrl}/success?type=esewa`,
      fu: `${eSewaConfig.redirectBaseUrl}/failure?type=esewa`,
    };
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }
    //since you are redirected to a new page, you will need to store the checkout information
    //you will need it to confirm payment
    sessionStorage.setItem("esewaPayment", JSON.stringify("YOUR_CART_DETAIL")); 
    document.body.appendChild(form);
    form.submit();
  }
  //#endregion
}