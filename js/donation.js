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
    
    const donationMoney=parseFloat(document.getElementById('donation').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    document.getElementById('after-donation').innerText=newDonation;}
    else{
        alert('Try to do again');
    }
})

// card-2
document.getElementById('donate-btn-2').addEventListener('click',function(event){
    
    const donationMoney=parseFloat(document.getElementById('donation-2').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation-2').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    document.getElementById('after-donation-2').innerText=newDonation;}
    else{
        alert('Try to do again');
    }
})

// card-3
document.getElementById('donate-btn-3').addEventListener('click',function(event){
    
    const donationMoney=parseFloat(document.getElementById('donation-3').value);

    const availableBalance=parseFloat(document.getElementById('available-balance').innerText);
    if(donationMoney>=0 && availableBalance>=donationMoney){
    const newBalance=availableBalance-donationMoney;
    document.getElementById('available-balance').innerText=newBalance;
    const afterDonationMoney= parseFloat(document.getElementById('after-donation-3').innerText);
    const newDonation=afterDonationMoney+donationMoney;
    document.getElementById('after-donation-3').innerText=newDonation;}
    else{
        alert('Try to do again');
    }
})