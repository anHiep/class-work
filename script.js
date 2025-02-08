document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function() {
        alert("Are you ready for the Squid Game?");
    });
}
