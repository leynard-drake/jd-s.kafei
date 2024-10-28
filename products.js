// LABAG SA LOOB KO TO !!!!!!!!!!!1

function clear(){
      document.getElementById("name-text").value="";
      document.getElementById("address-text").value="";
      document.getElementById("payment-text").value="";
      document.getElementById("change-text").value="";

}
// FUNCTION 1
function openForm1() {
 document.getElementById("checkout-container").style.display = "block";
 document.getElementById("checkout-container").style.position = "fixed";
 
 let name;
 let address;
 let flavor = document.getElementById("flavor-1").innerHTML;
 let  price = document.getElementById("price-1").innerHTML;
 let quantity = document.getElementById("checkbox1-quantity").value;
 let sum = parseFloat(quantity*price);

 let payment = document.getElementById("payment-text").value;
 document.getElementById("flavor-text").value = flavor;
 document.getElementById("price-text").value = sum;
}

function calculateChange1(){
  event.preventDefault();
  let  price = document.getElementById("price-1").innerHTML;
  const payment = document.getElementById("payment-text").value;
  
  let quantity = document.getElementById("checkbox1-quantity").value;
  let sum = parseFloat(quantity*price);
  let change = parseFloat(payment) - parseFloat(sum);
  // test if int yung input

  let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }

  if (Number.isNaN(payment)){
    alert ("Please input a valid payment")
  }else if(payment <0){
    alert ("Please input a valid payment")
    document.getElementById("change-text").value = null;
  }else if (parseFloat(payment) < parseInt(sum)){
    alert("Payment is not enough");
    document.getElementById("change-text").value = null;
  } else if (change >= 0){
    document.getElementById("change-text").value = parseFloat(change).toFixed(2);
  }


}

function receipt1(){
  event.preventDefault();
  let name=document.getElementById("name-text").value;
  let address = document.getElementById("address-text").value;
  let flavor = document.getElementById("flavor-1").innerHTML;
  let  price = document.getElementById("price-1").innerHTML;
  let payment = document.getElementById("payment-text").value;
  
  let quantity = document.getElementById("checkbox1-quantity").value;
  let sum = parseFloat(quantity*price);

  let change = parseFloat(payment) - parseFloat(sum);
  let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
   if (Number.isNaN(payment)){
    alert ("Please input a valid payment")
  }else if(parseFloat(payment) <0){
    alert ("Please input a valid payment")
    document.getElementById("change-text").value = null;

  }else if (parseInt(payment) < parseInt(price)){
    alert("Payment is not enough");
    document.getElementById("change-text").value = null;

  }else if(name==""|| address == "" || payment==""){
    alert("Please fill out the blank textfield.")
  }else if(document.getElementById('checkbox1-espresso-shots').value < 0 ){
    alert("Please input a valid amount of espresso shots")
  }else{
    document.getElementById("change-text").value = parseFloat(payment).toFixed(2);
   const checkedIngredients = [];

   if (document.getElementById('checkbox1-ice').checked) {
        checkedIngredients.push(document.getElementById('ingredients1-ice').innerHTML);
    }
    if (document.getElementById('checkbox1-sugar').checked) {
        checkedIngredients.push(document.getElementById('ingredients1-sugar').innerHTML);
    }
    if (document.getElementById('checkbox1-milk').checked) {
      checkedIngredients.push(document.getElementById('ingredients1-milk').innerHTML);
     }

    checkedIngredients.push(document.getElementById('ingredients1-espresso-shots').innerHTML+":   " +document.getElementById('checkbox1-espresso-shots').value);
    var dropdown = document.getElementById('ingredients1-espresso-roast');
    // hahahairapapsdadna;owe
    var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
    checkedIngredients.push("Espresso roast: "+selectedOption);

    alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
          "Flavor: " +flavor + "\n" + "Price: " +price +"\n"+
          "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2)+"\n"+
          "Quantity: " + quantity+ "\n"+
      "Ingredients: "+"\n" + checkedIngredients.join("\n"));

      clear(); // clear textfields
      closeForm();
      
  }
}
 // END OF 1



// FUnction 2
  function openForm2() {
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("checkout-container").style.position = "fixed";
    
    let name;
    let address;
    let flavor = document.getElementById("flavor-2").innerHTML;
    let  price = document.getElementById("price-2").innerHTML;
   
    let quantity = document.getElementById("checkbox2-quantity").value;
    let sum = parseFloat(quantity*price);

    let payment = document.getElementById("payment-text").value;
    document.getElementById("flavor-text").value = flavor;
    document.getElementById("price-text").value = sum;
    
   }

   function calculateChange2(){
     event.preventDefault();
     let  price = document.getElementById("price-2").innerHTML;
     let payment = document.getElementById("payment-text").value;

     let quantity = document.getElementById("checkbox2-quantity").value;
     let sum = parseFloat(quantity*price);
     let change = parseFloat(payment) - parseFloat(sum);
     let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
    
    if (Number.isNaN(payment)){
      alert ("Please input a valid payment")
    }else if(parseFloat(payment) <0){
      alert ("Please input a valid payment")
       document.getElementById("change-text").value = null;
     }else if (parseFloat(payment) < parseFloat(sum)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
     } else if (change >= 0){
       document.getElementById("change-text").value = parseFloat(change).toFixed(2);
     }
   }

   function receipt2(){
      event.preventDefault();
    let name=document.getElementById("name-text").value;
    let address = document.getElementById("address-text").value;
    let flavor = document.getElementById("flavor-2").innerHTML; //
    let  price = document.getElementById("price-2").innerHTML; //
    let payment = document.getElementById("payment-text").value;

    let quantity = document.getElementById("checkbox2-quantity").value;
    let sum = parseFloat(quantity*price);
    let change = parseFloat(payment) - parseFloat(sum);
    let loop = payment.length;
    let mali = false;
    for(let j = 0; j<loop; j++){
      if(payment.charAt(j)=='.'){
        continue;
      }else if(parseInt(payment.charAt(j)) % 1 != 0){
        alert ("Please input a valid payment")
        mali = true;
        event.preventDefault();
        return; 
      }
    }
  
    if(mali){
      return;
    }
    if (Number.isNaN(payment)){
      alert ("Please input a valid payment")
    }else if(parseFloat(payment) <0){
      alert ("Please input a valid payment")
      document.getElementById("change-text").value = null;
  
    }else if (parseInt(payment) < parseInt(price)){
      alert("Payment is not enough");
      document.getElementById("change-text").value = null;
  
    }else if(name==""|| address == "" || payment==""){
      alert("Please fill out the blank textfield.")
    }else if(document.getElementById('checkbox2-espresso-shots').value < 0 || document.getElementById('checkbox2-mocha-sauce').value <0){
      alert("Please input a valid amount of espresso shots or mocha pumps")
    }else{
      document.getElementById("change-text").value = change;
  
     const checkedIngredients = [];
     checkedIngredients.push("Quantity: "+document.getElementById("checkbox2-quantity").value)

     if (document.getElementById('checkbox2-ice').checked) {
          checkedIngredients.push(document.getElementById('ingredients2-ice').innerHTML);
      }
      if (document.getElementById('checkbox2-sugar').checked) {
          checkedIngredients.push(document.getElementById('ingredients2-sugar').innerHTML);
      }
      if (document.getElementById('checkbox2-milk').checked) {
        checkedIngredients.push(document.getElementById('ingredients2-milk').innerHTML);
       }

      checkedIngredients.push(document.getElementById('ingredients2-mocha-sauce').innerHTML+":   " +document.getElementById('checkbox2-mocha-sauce').value);
      checkedIngredients.push(document.getElementById('ingredients2-espresso-shots').innerHTML+":   " +document.getElementById('checkbox2-espresso-shots').value);
      
  
      var dropdown = document.getElementById('ingredients2-espresso-roast');
      // hahahairapapsdadna;owe
      var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
      checkedIngredients.push("Espresso roast: "+selectedOption);
  
      alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
            "Flavor: " +flavor + "\n" + "Price: " +sum +"\n"+
            "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2) +"\n"+
            "Quantity: " + quantity+ "\n"+
        "Ingredients: "+"\n" + checkedIngredients.join("\n"));
        clear(); // clear textfields
        closeForm();

      }
  }
//  ENDD FUnction 2

// FUnction 3
   function openForm3(){
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("checkout-container").style.position = "fixed";
    
    let name;
    let address;
    let flavor = document.getElementById("flavor-3").innerHTML; //
    let  price = document.getElementById("price-3").innerHTML; //
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox3-quantity").value;
    let sum = parseFloat(quantity*price);
    

    document.getElementById("flavor-text").value = flavor;
    document.getElementById("price-text").value = sum;
   }
   function calculateChange3(){
     event.preventDefault();
     let  price = document.getElementById("price-3").innerHTML; //
     let payment = document.getElementById("payment-text").value;
     let quantity = document.getElementById("checkbox3-quantity").value;
     let sum = parseFloat(quantity*price);
     let change = parseFloat(payment) - parseFloat(sum);
     let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
  
 if (Number.isNaN(payment)){
    alert ("Please input a valid payment")
  }else if(parseInt(payment) <0){
    alert ("Please input a valid payment")
       document.getElementById("change-text").value = null;
     }else if (parseFloat(payment) < parseFloat(price)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
     } else if (change >= 0){
       document.getElementById("change-text").value = parseFloat(change).toFixed(2);
     }
   }
   //receipt1!!

   function receipt3(){
    event.preventDefault();
     let name=document.getElementById("name-text").value; 
     let address = document.getElementById("address-text").value;
     let flavor = document.getElementById("flavor-3").innerHTML; //
     let  price = document.getElementById("price-3").innerHTML; //
     let payment = document.getElementById("payment-text").value;
     let quantity = document.getElementById("checkbox3-quantity").value;
     let sum = parseFloat(quantity*price);
     
     let change = parseFloat(payment) - parseFloat(sum);
     let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
   
       if (Number.isNaN(payment)){
          alert ("Please input a valid payment")
        }else if(parseInt(payment) <0){
      alert ("Please input a valid payment")
       document.getElementById("change-text").value = null;
   
     }else if (parseInt(payment) < parseInt(price)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
   
     }else if(name==""|| address == "" || payment==""){
       alert("Please fill out the blank textfield.")
     }else if(document.getElementById('checkbox3-espresso-shots').value < 0 ){
      alert("Please input a valid amount of espresso shots")
    }else{
       document.getElementById("change-text").value = change;
   
      const checkedIngredients = [];
      checkedIngredients.push("Quantity: "+document.getElementById("checkbox3-quantity").value)

      if (document.getElementById('checkbox3-ice').checked) { //
           checkedIngredients.push(document.getElementById('ingredients3-ice').innerHTML); //
       }
       if (document.getElementById('checkbox3-sugar').checked) { //
           checkedIngredients.push(document.getElementById('ingredients3-sugar').innerHTML); //
       }
       if (document.getElementById('checkbox3-milk').checked) {
         checkedIngredients.push(document.getElementById('ingredients3-milk').innerHTML); //
        }
   
       checkedIngredients.push(document.getElementById('ingredients3-espresso-shots').innerHTML+":   " +document.getElementById('checkbox3-espresso-shots').value); //
   
       var dropdown = document.getElementById('ingredients3-espresso-roast'); //
       // hahahairapapsdadna;owe  
       var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
       checkedIngredients.push("Espresso roast: "+selectedOption);
   
       alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
             "Flavor: " +flavor + "\n" + "Price: " +sum +"\n"+
             "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2) +"\n"+
             "Quantity: " + quantity+ "\n"+
         "Ingredients: "+"\n" + checkedIngredients.join("\n"));
         clear(); // clear textfields
         closeForm();

     }
   }// FUnction 3 ENDD

   // FUnction 4
   function openForm4() {
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("checkout-container").style.position = "fixed";
    
    let name;
    let address;
    let flavor = document.getElementById("flavor-4").innerHTML;
    let  price = document.getElementById("price-4").innerHTML;
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox4-quantity").value;
    let sum = parseFloat(quantity*price);

    document.getElementById("flavor-text").value = flavor;
    document.getElementById("price-text").value = sum;
   }
   
   function calculateChange4(){
    event.preventDefault();
     let  price = document.getElementById("price-4").innerHTML;
     let payment = document.getElementById("payment-text").value;
     let quantity = document.getElementById("checkbox4-quantity").value;
     let sum = parseFloat(quantity*price);
     let change = parseFloat(payment) - parseFloat(sum);
     let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
   
     if (Number.isNaN(payment)){
          alert ("Please input a valid payment")
        }else if(parseInt(payment) <0){
      alert ("Please input a payment")
       document.getElementById("change-text").value = null;
     }else if (parseFloat(payment) < parseFloat(price)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
     } else if (change >= 0){
      document.getElementById("change-text").value = parseFloat(change).toFixed(2);
     }
   }
   function receipt4(){
    event.preventDefault();

    let name=document.getElementById("name-text").value; 
    let address = document.getElementById("address-text").value;
    let flavor = document.getElementById("flavor-4").innerHTML; //
    let  price = document.getElementById("price-4").innerHTML; //
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox4-quantity").value;
    let sum = parseFloat(quantity*price);
    let change = parseFloat(payment) - parseFloat(sum);
    let loop = payment.length;
    let mali = false;
    for(let j = 0; j<loop; j++){
      if(payment.charAt(j)=='.'){
        continue;
      }else if(parseInt(payment.charAt(j)) % 1 != 0){
        alert ("Please input a valid payment")
        mali = true;
        event.preventDefault();
        return; 
      }
    }
  
    if(mali){
      return;
    }
  
   if (Number.isNaN(payment)){
          alert ("Please input a valid payment")
        }else if(parseInt(payment) <0){
    alert ("Please input a valid payment")
      document.getElementById("change-text").value = null;
  
    }else if (parseInt(payment) < parseInt(price)){
      alert("Payment is not enough");
      document.getElementById("change-text").value = null;
  
    }else if(name==""|| address == "" || payment==""){
      alert("Please fill out the blank textfield.")
    }else if(document.getElementById('checkbox4-espresso-shots').value < 0  || document.getElementById('checkbox4-mocha-sauce').value < 0){
      alert("Please input a valid amount of espresso shots or mocha sauce")
    }else{
      document.getElementById("change-text").value = change;
  
     const checkedIngredients = [];
     checkedIngredients.push("Quantity: "+document.getElementById("checkbox4-quantity").value)

     if (document.getElementById('checkbox4-ice').checked) { //
          checkedIngredients.push(document.getElementById('ingredients4-ice').innerHTML); //
      }
      if (document.getElementById('checkbox4-cola').checked) { //
          checkedIngredients.push(document.getElementById("ingredients4-cola").innerHTML); //
      }
      if (document.getElementById('checkbox4-choco-milk').checked) {
        checkedIngredients.push(document.getElementById('ingredients4-choco-milk').innerHTML); //
       }

       checkedIngredients.push(document.getElementById('ingredients4-mocha-sauce').innerHTML+":   " +document.getElementById('checkbox4-mocha-sauce').value);
      checkedIngredients.push(document.getElementById('ingredients4-espresso-shots').innerHTML+":   " +document.getElementById('checkbox4-espresso-shots').value); //
       
      var dropdown = document.getElementById('ingredients-espresso-roast'); 
      // hahahairapapsdadna;owe
      var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
      checkedIngredients.push("Espresso roast: "+selectedOption);
  
      alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
            "Flavor: " +flavor + "\n" + "Price: " +sum +"\n"+
            "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2)+"\n"+
            "Quantity: " + quantity+ "\n"+
        "Ingredients: "+"\n" + checkedIngredients.join("\n"));
        clear(); // clear textfields
        closeForm();

    }
  }
  // FUnction END 4

  // FUnction 5
  function openForm5() {
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("checkout-container").style.position = "fixed";
    
    let name;
    let address;
    let flavor = document.getElementById("flavor-5").innerHTML;
    let  price = document.getElementById("price-5").innerHTML;
    let payment = document.getElementById("payment-text").value;

    let quantity = document.getElementById("checkbox5-quantity").value;
    let sum = parseFloat(quantity*price);
    document.getElementById("flavor-text").value = flavor;
    document.getElementById("price-text").value = sum;
   }
   function calculateChange5(){
     event.preventDefault();
     let  price = document.getElementById("price-5").innerHTML;
     let payment = document.getElementById("payment-text").value;
     let quantity = document.getElementById("checkbox5-quantity").value;
     let sum = parseFloat(quantity*price);
     let change = parseFloat(payment) - parseFloat(sum);
    // test if may string
     let loop = payment.length;
  let mali = false;
  for(let j = 0; j<loop; j++){
    if(payment.charAt(j)=='.'){
      continue;
    }else if(parseInt(payment.charAt(j)) % 1 != 0){
      alert ("Please input a valid payment")
      mali = true;
      event.preventDefault();
      return; 
    }
  }

  if(mali){
    return;
  }
    if (Number.isNaN(payment)){
          alert ("Please input a valid payment")
        }else if(parseInt(payment) <0){
    alert ("Please input a valid payment")
       document.getElementById("change-text").value = null;
     }else if (parseFloat(payment) < parseFloat(price)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
     } else if (change >= 0){
       document.getElementById("change-text").value = parseFloat(change).toFixed(2);
     }
   }
  function receipt5(){
    event.preventDefault();

    let name=document.getElementById("name-text").value; 
    let address = document.getElementById("address-text").value;
    let flavor = document.getElementById("flavor-5").innerHTML; //
    let  price = document.getElementById("price-5").innerHTML; //
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox5-quantity").value;
    let sum = parseFloat(quantity*price);
    let change = parseFloat(payment) - parseFloat(sum);
    // test if may string
    let loop = payment.length;
    let mali = false;
    for(let j = 0; j<loop; j++){
      if(payment.charAt(j)=='.'){
        continue;
      }else if(parseInt(payment.charAt(j)) % 1 != 0){
        alert ("Please input a valid payment")
        mali = true;
        event.preventDefault();
        return; 
      }
    }
  
    if(mali){
      return;
    }

      if (Number.isNaN(payment)){
         alert ("Please input a valid payment")
       }else if(parseFloat(payment) <0){
    alert ("Please input a valid payment")
      document.getElementById("change-text").value = null;
  
    }else if (parseFloat(payment) < parseFloat(price)){
      alert("Payment is not enough");
      document.getElementById("change-text").value = null;
  
    }else if(name==""|| address == "" || payment==""){
      alert("Please fill out the blank textfield.");

    }else if(document.getElementById('checkbox5-espresso-shots').value < 0 ){
      alert("Please input a valid amount of espresso shots")
    }else{
      document.getElementById("change-text").value = change;
  
     const checkedIngredients = [];
     checkedIngredients.push("Quantity: "+document.getElementById("checkbox5-quantity").value)

     if (document.getElementById('checkbox5-ice').checked) { //
          checkedIngredients.push(document.getElementById('ingredients5-ice').innerHTML); //
      }
      if (document.getElementById('checkbox5-sugar').checked) { //
          checkedIngredients.push(document.getElementById('ingredients5-sugar').innerHTML); //
      }
      if (document.getElementById('checkbox5-milk').checked) {
        checkedIngredients.push(document.getElementById('ingredients5-milk').innerHTML); //
       }
  
      checkedIngredients.push(document.getElementById('ingredients5-espresso-shots').innerHTML+":   " +document.getElementById('checkbox5-espresso-shots').value); //
  
      var dropdown = document.getElementById('ingredients-espresso-roast'); //
      // hahahairapapsdadna;owe
      var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
      checkedIngredients.push("Espresso roast: "+selectedOption);
  
      alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
            "Flavor: " +flavor + "\n" + "Price: " +sum +"\n"+
            "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2)+"\n"+
            "Quantity: " + quantity+ "\n"+
        "Ingredients: "+"\n" + checkedIngredients.join("\n"));
        clear(); // clear textfields
        closeForm();

    }
  }
 // FUnction 5 ENDD

 // FUnction 6
    function openForm6() {
    document.getElementById("checkout-container").style.display = "block";
    document.getElementById("checkout-container").style.position = "fixed";
    
    let name;
    let address;
    let flavor = document.getElementById("flavor-6").innerHTML;
    let  price = document.getElementById("price-6").innerHTML;
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox6-quantity").value;
    let sum = parseFloat(quantity*price);
    let change = parseFloat(payment) - parseFloat(price);
    document.getElementById("flavor-text").value = flavor;
    document.getElementById("price-text").value = sum;
   }
   function calculateChange6(){
    event.preventDefault();
     let  price = document.getElementById("price-6").innerHTML;
     let payment = document.getElementById("payment-text").value;
     let quantity = document.getElementById("checkbox6-quantity").value;
     let sum = parseFloat(quantity*price);
     let change = parseFloat(payment) - parseFloat(sum);

     let loop = payment.length;
     let mali = false;
     for(let j = 0; j<loop; j++){
       if(payment.charAt(j)=='.'){
         continue;
       }else if(parseInt(payment.charAt(j)) % 1 != 0){
         alert ("Please input a valid payment")
         mali = true;
         event.preventDefault();
         return; 
       }
     }
   
     if(mali){
       return;
     }
      if (Number.isNaN(payment)){
          alert ("Please input a valid payment")
        }else if(parseFloat(payment) <0){
    alert ("Please input a valid payment")
       document.getElementById("change-text").value = null;
     }else if (parseFloat(payment) < parseFloat(price)){
       alert("Payment is not enough");
       document.getElementById("change-text").value = null;
     } else if (change >= 0){
       document.getElementById("change-text").value = parseFloat(change).toFixed(2);
     }
   }
   //receipt1!!
  function receipt6(){
    event.preventDefault();

    let name=document.getElementById("name-text").value; 
    let address = document.getElementById("address-text").value;
    let flavor = document.getElementById("flavor-6").innerHTML; //
    let  price = document.getElementById("price-6").innerHTML; //
    let payment = document.getElementById("payment-text").value;
    let quantity = document.getElementById("checkbox6-quantity").value;
    let sum = parseFloat(quantity*price);

    let change = parseFloat(payment) - parseFloat(sum);


    let loop = payment.length;
    let mali = false;
    for(let j = 0; j<loop; j++){
      if(payment.charAt(j)=='.'){
        continue;
      }else if(parseInt(payment.charAt(j)) % 1 != 0){
        alert ("Please input a valid payment")
        mali = true;
        event.preventDefault();
        return; 
      }
    }
  
    if(mali){
      return;
    }

       if (Number.isNaN(payment)){
         alert ("Please input a valid payment")
       }else if(parseFloat(payment) <0){
      alert("You can't do this");
      document.getElementById("change-text").value = null;
  
    }else if (parseFloat(payment) < parseFloat(price)){
      alert ("Please input a valid payment")
      document.getElementById("change-text").value = null;
  
    }else if(name==""|| address == "" || payment==""){
      alert("Please fill out the blank textfield.")
    }else if(document.getElementById('checkbox6-espresso-shots').value < 0 ){
      alert("Please input a valid amount of espresso shots")

    }else{
      document.getElementById("change-text").value = change;
  
     const checkedIngredients = [];
     checkedIngredients.push("Quantity: "+document.getElementById("checkbox6-quantity").value)

     if (document.getElementById('checkbox6-ice').checked) { //
          checkedIngredients.push(document.getElementById('ingredients6-ice').innerHTML); //
      }
      if (document.getElementById('checkbox6-sugar').checked) { //
          checkedIngredients.push(document.getElementById('ingredients6-sugar').innerHTML); //
      }
      if (document.getElementById('checkbox6-milk').checked) {
        checkedIngredients.push(document.getElementById('ingredients6-milk').innerHTML); //
       }
  
      checkedIngredients.push(document.getElementById('ingredients6-espresso-shots').innerHTML+":   " +document.getElementById('checkbox6-espresso-shots').value); //
  
      var dropdown = document.getElementById('ingredients-espresso-roast'); //
      // hahahairapapsdadna;owe
      var selectedOption = dropdown.options[dropdown.selectedIndex].innerHTML;
      checkedIngredients.push("Espresso roast: "+selectedOption);
  
      alert("Name: "+ name + "\n"+ "Address: " + address +"\n"+
            "Flavor: " +flavor + "\n" + "Price: " +sum +"\n"+
            "Payment: "+ payment +"\n" + "Change: " + parseFloat(change).toFixed(2) +"\n"+
            "Quantity: " + quantity+ "\n"+
        "Ingredients: "+"\n" + checkedIngredients.join("\n"));
        clear(); // clear textfields
        closeForm();

    }
  }
  // FUnction  6 ENDD

function closeForm() {
    document.getElementById("checkout-container").style.display = "none";
    clear();
}


function calculateChange(){
 
  let flavor = document.getElementById("flavor-text").value;
  let product1 = document.getElementById("flavor-1").innerHTML;
  let product2 = document.getElementById("flavor-2").innerHTML;
  let product3 = document.getElementById("flavor-3").innerHTML;
  let product4 = document.getElementById("flavor-4").innerHTML;
  let product5 = document.getElementById("flavor-5").innerHTML;
  let product6 = document.getElementById("flavor-6").innerHTML;

  if (flavor ==product1){
    calculateChange1();

  }else if(flavor == product2){
    calculateChange2();

  }else if(flavor == product3){
    calculateChange3();

  }else if(flavor == product4){
    calculateChange4();

  }else if(flavor == product5){
    calculateChange5();

  }else if(flavor == product6){
    calculateChange6();

  }else{
    alert("Something unexpected happened")
  }
}
function receipt(){
  
  let flavor = document.getElementById("flavor-text").value;

  let product1 = document.getElementById("flavor-1").innerHTML;
  let product2 = document.getElementById("flavor-2").innerHTML; 
  let product3 = document.getElementById("flavor-3").innerHTML;
  let product4 = document.getElementById("flavor-4").innerHTML;
  let product5 = document.getElementById("flavor-5").innerHTML;
  let product6 = document.getElementById("flavor-6").innerHTML;


  if (flavor ==product1){
    receipt1();

  }else if(flavor == product2){
    receipt2();

  }else if(flavor == product3){
    receipt3();

  }else if(flavor == product4){
    receipt4();

  }else if(flavor == product5){
    receipt5();

  }else if(flavor == product6){
    receipt6();

  }else{
    alert("Something unexpected happened")
  }
}