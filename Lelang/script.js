let tHargaTertinggi = document.querySelector('.tHargaTertinggi');
let harga = 0;
let deal = document.querySelector('.deal');
deal.addEventListener('click', function() {
    let bid = parseFloat(document.querySelector('.bid').value);

    // Format to Rupiah
    var reverse = bid.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');

    if( bid > harga )   {
        tHargaTertinggi.innerHTML = 'Penawaran Tertinggi : Rp ' + ribuan;
        harga = bid;
    } else  {
        alert('Maaf Bid anda kurang');
    }
});