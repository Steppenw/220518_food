function momentDate(dateString) {

    return moment(dateString, 'DD/MM/YYYY').format('MMM Do, YYYY');
};

const app = new Vue({

    el: "#app",

    data: {

        socialList: [

            {name: 'Facebook', icon: 'fa-facebook-f', href: '#'},
            {name: 'Instagram', icon: 'fa-instagram', href: '#'},
            {name: 'Twitter', icon: 'fa-twitter', href: '#'},
            {name: 'YouTube', icon: 'fa-youtube', href: '#'}
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
        pickOfTheDay: {},
        foodieJournal: [],
        //foodieJournal: foodieJournal.sort((a, b) => b.id - a.id).slice(0, 3),
        popularRecipes: popularRecipes,
        culinaryCollection: culinaryCollection,
        selectedRecipeIndex: Math.floor(Math.random() * (popularRecipes.length)),
        postsPreviews: 6
    },

    methods: {

        toggleNav() {

            this.$refs.nav.classList.toggle("responsive");
        },
        onCloseClick() {

            this.stringToSearchFor = "";

            this.$refs.searchInput.focus();
        },
        selectRecipe(index) {
            this.selectedRecipeIndex = index;
        }
    },

    computed: {

        selectedRecipe() {

            return this.popularRecipes[this.selectedRecipeIndex];
        },
        farmToTable() {

            return farmToTable.map((post) => {

                return {...post, moment_date: momentDate(post.date)};

            }).reverse().slice(0, this.postsPreviews)
        }
    },

    beforeMount() {

        this.foodieJournal = this.farmToTable.slice(0, 3)
        
        this.pickOfTheDay = this.foodieJournal[0];
    }
});