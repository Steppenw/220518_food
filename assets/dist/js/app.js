const app = new Vue({

    el: "#app",

    data: {

        socialList: [

            {icon: 'fa-facebook-f', href: '#'},
            {icon: 'fa-instagram', href: '#'},
            {icon: 'fa-twitter', href: '#'},
            {icon: 'fa-youtube', href: '#'}
        ],
        navLinks: [

            {text: 'Home', href: '#'},
            {text: 'Recipes', href: '#'},
            {text: 'Places', href: '#'},
            {text: 'Blog', href: '#'},
            {text: 'About', href: '#'},
            {text: 'Contact', href: '#'}
        ],
        stringToSearchFor: "",
        pickOfTheDay: {
            img: "img/header/hero/single-post-img3.jpg",
            text: "Food corner: top japanese restaurants for sushi",
            date: "26-05-2021"
        },
        foodieJournal: foodieJournal.reverse().slice(0, 3),
        //foodieJournal: foodieJournal.sort((a, b) => b.id - a.id).slice(0, 3),
        popularRecipes: popularRecipes,
        foo: Math.floor(Math.random() * (popularRecipes.length))
    },

    methods: {

        toggleNav() {

            this.$refs.nav.classList.toggle("responsive");
        },
        onCloseClick() {

            this.stringToSearchFor = "";

            this.$refs.searchInput.focus();
        },
        getDate(dateString) {

            return moment(dateString, 'DD/MM/YYYY').format('MMM Do, YYYY');
        },
        select(index) {
            this.foo = index;
        }
    },

    computed: {

        selectedRecipe() {

            return this.popularRecipes[this.foo];
        }
    }
});