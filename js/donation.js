// function calculation(id2){
    
    
//         const donationMoney=parseFloat(document.getElementById('donation').value);
    
//         const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
//         if(donationMoney>=0 && availableBalance>=donationMoney){
//         const newBalance=availableBalance-donationMoney;
//         document.getElementById('available-balance').innerText=newBalance;
//         const afterDonationMoney= parseFloat(document.getElementById('id2').innerText);
//         const newDonation=afterDonationMoney+donationMoney;
//         document.getElementById(id2).innerText=newDonation;}
//         else{
//             alert('Try to do again');
//         }
//     }

// card-1
document.getElementById('donate-btn').addEventListener('click',function(event){
   // event.preventDefault();
    
    const donationMoney=parseFloat(document.getElementById('donation').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    
    document.getElementById('after-donation').innerText=newDonation;

//history
const div =document.createElement('div');
div.classList.add('my-4');
let date=new Date();
 div.innerHTML=`
 <p class="border rounded-lg font-bold p-4">${donationMoney} Taka is donated for Flood at Noakhali,Bangladesh <br><br>
 <span class="font-normal">Date: ${date}</span>

 </p>
 
 `;
 
 document.getElementById('history-page').appendChild(div);
 //bonus
 my_modal_5.showModal();
 

}
    else{
        alert('Try to do again');
       // document.getElementById('my_modal_5').classList.add('hidden');
        
        
    }
})

// card-2
document.getElementById('donate-btn-2').addEventListener('click',function(event){
    event.preventDefault();
    
    const donationMoney=parseFloat(document.getElementById('donation-2').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation-2').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    document.getElementById('after-donation-2').innerText=newDonation;

    //history
    const div =document.createElement('div');
   div.classList.add('my-4');
   let date=new Date();
    div.innerHTML=`
    <p class="border rounded-lg font-bold p-4">${donationMoney} Taka is donated for Flood Relief in Feni,Bangladesh<br><br>
 <span class="font-normal">Date: ${date}</span></p>`;
    document.getElementById('history-page').appendChild(div);
    
    my_modal_6.showModal();
 
}
    else{
        alert('Try to do again');        
    }
})

// card-3
document.getElementById('donate-btn-3').addEventListener('click',function(event){
    event.preventDefault();
    const donationMoney=parseFloat(document.getElementById('donation-3').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation-3').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    document.getElementById('after-donation-3').innerText=newDonation;
    // alert('Donated Successfully');
     //history
    const div =document.createElement('div');
    div.classList.add('my-4');
    let date=new Date();
     div.innerHTML=`
     <p class="border rounded-lg font-bold p-4">${donationMoney} Taka is donated for Aid for Injured in the Quota Movement,Bangladesh<br><br>
 <span class="font-normal">Date: ${date}</span></p>`;
     document.getElementById('history-page').appendChild(div);
     my_modal_7.showModal();
 

}
    else{
        alert('Try to do again');
             
    }
})