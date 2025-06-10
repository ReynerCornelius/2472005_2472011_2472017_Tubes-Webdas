    function home() {
        window.parent.postMessage({ action: 'home' }, '*');
    }
    function resep() {
        window.parent.postMessage({ action: 'resep' }, '*');
    }
    function about() {
        window.parent.postMessage({ action: 'about' }, '*');
    }
    function contact() {
        window.parent.postMessage({ action: 'contact' }, '*');
    }
    function detail() {
        window.parent.postMessage({ action: 'detail' }, '*');
    }