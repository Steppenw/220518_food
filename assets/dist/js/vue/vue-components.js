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

    props: ['post', 'href'],
    template: `
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

                <div class="d-flex align-items-center height-50">
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

Vue.component('farm-to-table-tabs', {

    props: ['farmToTablePopular'],

    data() {

        return {

            tabs: ["Popular", "Recent"],
            selectedTab: "Popular"
        }
    },
    template: `
        <div class="farm-to-table-tabs">

            <div class="d-flex">
                <span v-for="(tab, index) in tabs"
                    :key="index"
                    class="tab flex-grow-1 text-center font-serif"
                    :class="{'active-tab': selectedTab == tab}"
                    @click="selectedTab = tab">
                    {{ tab }}
                </span>
            </div>

            <ul v-show="selectedTab == 'Popular'" class="list-unstyled">

                <li v-for="post in farmToTablePopular" :key="post.id">

                    <a href="#selected-post" class="wrapper text-reset text-decoration-none">
                    
                        <h6>{{ post.title }}</h6>

                        <span class="small text-muted">
                            {{ (post.moment_date) }}
                        </span>

                    </a>
                    
                </li>

            </ul>

            <ul v-show="selectedTab == 'Recent'" class="list-unstyled">
                <li>Recent</li>
            </ul>
        
        </div>
    `
});