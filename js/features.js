

document.getElementById('history').addEventListener('click',function(){
    document.getElementById('history-page').classList.remove('hidden');
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history').classList.add('bg-lime-300');
    document.getElementById('donationn').classList.remove('bg-lime-300');
    document.getElementById('footer').classList.add('hidden');
})
document.getElementById('donationn').addEventListener('click',function(){
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById('donation-page').classList.remove('hidden');
    document.getElementById('donationn').classList.add('bg-lime-300');
    document.getElementById('history').classList.remove('bg-lime-300');
})
document.getElementById('blog').addEventListener('click',function(){
    window.location.href='./blog.html';
})
