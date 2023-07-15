const billing = document.getElementById("bill-amount");
const guests = document.getElementById("guestInside");
const service = document.getElementById("quality");
const showing = document.getElementById("Tip-Amount");

const displayy = () => {
   const billAmount = parseFloat(billing.value);
   const guestAmount = parseFloat(guests.value);
   const serviceQuality = parseFloat(service.value);

   billing.value = '';
   guests.value = '';
   service.value = '';

   const calculation = (billAmount*guestAmount*serviceQuality).toFixed(2);

   if(isNaN(billAmount)||isNaN(guestAmount)||isNaN(serviceQuality)){
    showing.innerHTML = "Incorreect tip amount";
    showTipAmount();
   }
   else{
    showing.innerHTML = "The correct tip amount is: £" + calculation;
    showTipAmount();
   }

}

const showTipAmount = () => {
    var x = showing;
    x.className = 'show'
    setTimeout(function(){x.className = x.className.replace('show','');}, 3000)
}
