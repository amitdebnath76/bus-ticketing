const seatArray =['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4','G1','G2','G3','G4','H1','H2','H3','H4','I1','I2','I3','I4','J1','J2','J3','J4'];
 for (let i of seatArray){
    const seatA2 = document.getElementById(i);
    seatA2.addEventListener('click',function(){
    seatA2.style.backgroundColor = '#1DD100';
 })
 }

 const seatDisplay = document.getElementById('seat-count');
 const seatIndex = document.getElementById('seat40')
//  const totalPrice= document.getElementById('totalPrice').innerText;
 let setValue = 0;
 let totalSeat = 40;
 const ticketPrice = 550;

 for (let i of seatArray){
    const seatCount = document.getElementById(i);
    seatCount.addEventListener('click',function(){
        setValue++
        seatDisplay.innerText = setValue
        totalSeat--
        seatIndex.innerText = totalSeat

        const seatNumber = document.getElementById('seat-count').innerText
        const seatInteger = parseInt(seatNumber) *550;
        console.log(seatInteger)
        let totalPrice= document.getElementById('totalPrice');
        totalPrice.innerText =  seatInteger

        const grandTotal = document.getElementById('grandTotal');
            grandTotal.innerText = seatInteger 
      // -----------------------------
   //    const applybutton =document.getElementById('couponApply');
   //    applybutton.addEventListener('click',function(){
   //       const coupon = document.getElementById('couponCode')
   //       if(coupon.value === 'NEW15'){
   //          const grandTotal = document.getElementById('grandTotal');
   //          grandTotal.value = totalPrice - (totalPrice *.15)
   //    }
   //   else{
   //    grandTotal.value = totalPrice
   //   }
      }
    )}

   
//  const seatIndex = document.getElementById('seat40');
//  let totalSeat = 40;
//  for (let i of seatArray){
//     const seatCount = document.getElementById(i);
//     seatCount.addEventListener('click',function(){
//         totalSeat--
//         seatDisplay.innerText = totalSeat
//     })
//  }



// let seat = 0;
// const ticketButton = document.getElementById('byticket');
// const seatDisplay = document.getElementById('seat-count');
// ticketButton.addEventListener('click',function(){
//     seat++;
//     seatDisplay.innerText = seat
// })
