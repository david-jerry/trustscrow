export default function StickyNav() {
    return {
        drawer: false,
        showNav: true,
        navTop: false,
        lastScroll: 0,

        initState() {
            this.drawer = false;

            if (document.getElementById('navbar')) {
                const main = document.getElementById('main');
                const navbar = document.getElementById('navbar');

                // get the height of the navbar and then add it to the top padding of the main content
                const header_h = navbar.offsetHeight + 10;

                main.classList.add(`pt-[${header_h}px]`);
                this.navTop = true;
                this.showNav = false;
            }
        },

        scrollNav() {
            let currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                this.showNav = true;
                this.navTop = true;
            }

            if (currentScroll > this.lastScroll && this.showNav === false) {
                this.showNav = true;
                this.navTop = false;
            } else if (currentScroll < this.lastScroll && this.showNav === true) {
                this.showNav = false;
                this.navTop = true;
            }
            this.lastScroll = currentScroll;
        },


        toggleDrawer() {
            return this.drawer = !this.drawer;
        },
    };
}
