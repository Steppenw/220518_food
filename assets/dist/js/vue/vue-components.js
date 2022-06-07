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

    props: ['post'],
    template: `
        <div class="col">

            <a class="text-reset text-decoration-none" href="#">

                <div class="card">

                    <img :src="post.img" class="card-img-top" :alt="post.title">

                    <div class="card-body pb-0">

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