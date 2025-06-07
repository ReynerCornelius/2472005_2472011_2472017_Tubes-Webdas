    window.addEventListener('message', function(event) {
        if (event.data.action === 'home') {
        window.location.href = '/taiwan_food.html';
        }
    });
    window.addEventListener('message', function(event) {
        if (event.data.action === 'resep') {
        window.location.href = '/';
        }
    });
    window.addEventListener('message', function(event) {
        if (event.data.action === 'contact') {
        window.location.href = '/contact us/contactus.html';
        }
    });
    window.addEventListener('message', function(event) {
        if (event.data.action === 'about') {
        window.location.href = 'about_us.html';
        }
    });
    window.addEventListener('message', function(event) {
        if (event.data.action === 'detail') {
        window.location.href = '/detail/detail.html';
        }
    });