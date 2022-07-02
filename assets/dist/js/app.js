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
        farmToTable: [],
        farmToTablePopular: [],
        farmToTableRecent: [],
        hrefPost: "#selected-post",
        pickOfTheDay: {},
        foodieJournal: [],
        //foodieJournal: foodieJournal.sort((a, b) => b.id - a.id).slice(0, 3),
        popularRecipes: [],
        hrefRecipe: "#selected-recipe",
        culinaryCollection: culinaryCollection,
        selectedRecipeId: popularRecipes[Math.floor(Math.random() * (popularRecipes.length))].id,
        postsPreviews: 6,
        selectedPostId: farmToTable[farmToTable.length - 1].id,
        tabs: ["Popular", "Recent"],
        selectedTab: "Popular"
    },

    methods: {

        toggleNav() {

            this.$refs.nav.classList.toggle("responsive");
        },
        onCloseClick() {

            this.stringToSearchFor = "";

            this.$refs.searchInput.focus();
        },
        /*selectRecipe(index) {

            this.selectedRecipeIndex = index;
        },
        selectPost(index) {

            this.selectedPostIndex = index;
        },*/
        select(id, source) {

            if (source == "farmToTable") {

                //console.log(source + ", " + id);

                this.selectedPostId = id;
            
            } else if (source == "popularRecipes") {

                //console.log(source + ", " + id);

                this.selectedRecipeId = id;
            }
        },
        loadMorePosts() {
            
            this.postsPreviews = this.postsPreviews + 2;
        }
    },

    computed: {

        selectedPost() {

            return this.farmToTable.find((post) => post.id == this.selectedPostId);
        },
        selectedRecipe() {

            return this.popularRecipes.find((recipe) => recipe.id == this.selectedRecipeId);
        },
        farmToTableSliced() {

            return this.farmToTable.slice(0, this.postsPreviews);
        },
        morePosts() {

            return this.farmToTableSliced.length == this.farmToTable.length ? false : true;
        }
    },

    beforeMount() {

        this.farmToTable = farmToTable.map((post) => {

            return {...post,
                    moment_date: momentDate(post.date),
                    source: "farmToTable"};
        }).reverse();
        
        this.foodieJournal = this.farmToTable.slice(0, 3);
        
        this.pickOfTheDay = this.foodieJournal[0];

        this.popularRecipes = popularRecipes.map((recipe) => {

            return {...recipe,
                    source: "popularRecipes"}
        });

        this.farmToTablePopular = this.farmToTable.filter((post) => post.isPopular);

        this.farmToTableRecent = this.farmToTable.slice(0, 5);
    }
});