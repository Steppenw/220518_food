Vue.component('single-social', {

    props: ['social'],
    template: `
        <li class="ml-3 ml-sm-4">
            <a class="pb-sm-2" :href="social.href">
                <i class="fab" :class="social.icon"></i>
            </a>
        </li>
    `
});

Vue.component('navbar-link', {

    props: ['text'],
    template: '<a class="nav-link py-md-2 px-md-3 px-0 mx-lg-2 py-lg-3 px-lg-4">{{ text }}</a>'
});

Vue.component('post-preview', {

    data() {

        return {

            href: ""
        }
    },
    methods: {

        select(index, source) {

            if (source == "farmToTable") {

                //console.log(source + ", " + index);

                this.href = "#selected-post";
            
            } else if (source == "popularRecipes") {

                //console.log(source + ", " + index);

                this.href = "#selected-recipe"
            }
        }
    },
    props: ['post', 'index', 'source'],
    template: `
        <div class="col" @click="select(index, source)">

            <a class="text-reset text-decoration-none" :href="href">

                <div class="card">

                    <img :src="post.img" class="card-img-top" :alt="post.title" :title="post.title">

                    <div v-if="post.moment_date">

                        <div class="card-body">

                            <h5 class="card-title font-serif text-capitalize">
                                {{ post.title }}
                            </h5>

                            <div class="small text-muted">

                                <span>
                                    By {{ post.author }} | {{ (post.moment_date) }}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </a>

        </div>
    `
});

Vue.component('single-post', {

    props: ['source'],
    template: `
    <div class="card card-lg">

        <img :src="source.img" class="card-img-top" :alt="source.title">

        <div class="card-body p-4">

            <h5 class="card-title font-serif text-capitalize mb-0">
                {{ source.title }}
            </h5>

            <div v-if="source.moment_date" class="small text-muted">

                <span>
                    By {{ source.author }} | {{ (source.moment_date) }}
                </span>

            </div>

            <div class="d-flex align-items-center">
                <div class="h-rule flex-grow-1"></div>
            </div>

            <span class="d-block text-muted text-justify">
                {{ source.text }}                         
            </span>

            <a href="#" class="btn orange text-uppercase" role="button">Learn more</a>

        </div>

    </div>
    `
});