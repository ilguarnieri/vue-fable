import Vue from 'vue'

const store = Vue.observable({
    activeIndex: 0,
    burgerActive: false,
    menu:[
        {
            text: 'Home',
            link: '#',
            icon: require('./assets/img/icon/home.png'),
            iconHover: require('./assets/img/icon/home-2.png'),
            active: false
        },
        {
            text: 'Pages',
            link: '#',
            icon: require('./assets/img/icon/document.png'),
            iconHover: require('./assets/img/icon/document-2.png'),
            active: false
        },
        {
            text: 'Blog',
            link: '#',
            icon: require('./assets/img/icon/printer.png'),
            iconHover: require('./assets/img/icon/printer-2.png'),
            active: false
        },
        {
            text: 'Shop',
            link: '#',
            icon: require('./assets/img/icon/cart.png'),
            iconHover: require('./assets/img/icon/cart-2.png'),
            active: false
        },
        {
            text: 'Shortcodes',
            link: '#',
            icon: require('./assets/img/icon/lab.png'),
            iconHover: require('./assets/img/icon/lab-2.png'),
            active: false
        },
        {
            text: 'Support',
            link: '#',
            icon: require('./assets/img/icon/chat.png'),
            iconHover: require('./assets/img/icon/chat-2.png'),
            active: false
        },
        {
            text: 'Contact',
            link: '#',
            icon: require('./assets/img/icon/envelope.png'),
            iconHover: require('./assets/img/icon/envelope-2.png'),
            active: false
        }
    ]
})

export default store