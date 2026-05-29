   window.onscroll = function() {
        const btn = document.getElementById('top-btn');
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
