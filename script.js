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
        if(parseInt(seatNumber) > 4){
         alert("You can not buy more then 4 tickets at a time")
         
        }
        console.log(typeof seatNumber)
        
        console.log(seatInteger)
        let totalPrice= document.getElementById('totalPrice');
        totalPrice.innerText =  seatInteger

        const grandTotal = document.getElementById('grandTotal');
            grandTotal.innerText = seatInteger 
      
      }
    )}


   

// Hidden or Show section part
    const nestbutton = document.getElementById('next-button');
    nestbutton.addEventListener('click',function(){
      const header = document.getElementById('header');
      header.classList.add('hidden')
      const main = document.getElementById('main');
      main.classList.add('hidden')
      const footer = document.getElementById('footer');
      footer.classList.add('hidden')
      const successButton = document.getElementById('success');
      successButton.classList.remove('hidden')

    })

// Seat dynamice change name
    for (let i of seatArray){
      const seatName = document.getElementById(i);
      const fristSeat = document.getElementById('fristticket');
      seatName.addEventListener('click', function(){
         fristSeat.innerText = i
      })
   }


   //  ////////// should be use in next
   // const continueButton = document.getElementById('continue');
   //  nestbutton.addEventListener('click',function(){
   //    const header = document.getElementById('header');
   //    header.classList.remove('hidden')
   //    const main = document.getElementById('main');
   //    main.classList.remove('hidden')
   //    const footer = document.getElementById('footer');
   //    footer.classList.remove('hidden')
   //    const successButton = document.getElementById('success');
   //    successButton.classList.add('hidden')

   //  })


   
//  const seatIndex = document.getElementById('seat40');
//  let totalSeat = 40;
//  for (let i of seatArray){
//     const seatCount = document.getElementById(i);
//     seatCount.addEventListener('click',function(){
//         totalSeat--
//         seatDisplay.innerText = totalSeat
//     })
//  }




