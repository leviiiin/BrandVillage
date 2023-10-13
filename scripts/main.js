document.addEventListener('click', (event) => {
    const type = event.target.dataset.type;
    const menuClose = 'bi-list';
    const menuOpen = 'bi-x-lg';
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (type === 'burger') {
        
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]

        node.classList.toggle(menuClose);
        node.classList.toggle(menuOpen);



        if (node.classList.contains(menuOpen)) {
            mobileMenu.classList.add('open');
            body.classList.add('stop-scroll')
        } else {
            mobileMenu.classList.remove('open')
            body.classList.remove('stop-scroll')
        }
    }
})