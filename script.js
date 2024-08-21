document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menuForm');
    const qrcodesDiv = document.getElementById('qrcodes');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const cafeName = document.getElementById('cafeName').value;
        const menuItems = document.getElementById('menuItems').value;
        
        // QR kodu oluşturmak için API çağrısı yapabilirsiniz
        fetch('/generate-qrcode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cafeName, menuItems })
        })
        .then(response => response.json())
        .then(data => {
            const qrCodeImg = document.createElement('img');
            qrCodeImg.src = data.qrCodeUrl;
            qrcodesDiv.appendChild(qrCodeImg);
        })
        .catch(error => console.error('Error:', error));
    });
});
