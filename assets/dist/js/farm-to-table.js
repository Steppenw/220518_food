const farmToTable = [

    {
        id: 0,
        img: "img/main/farm-to-table/market.jpg",
        title: "Donec convallis, felis vel volutpat volutpat, velit sapien",
        text: "Donec lobortis vel tellus vitae vulputate. Vivamus sit amet aliquet felis. Nullam at posuere nisi. Praesent vestibulum purus eget quam tempus efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida lorem in nisl euismod facilisis. Vivamus vitae lectus id ipsum hendrerit faucibus. Aenean rutrum non massa non.",
        date: "20-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 1,
        img: "img/main/farm-to-table/singapore-featured-image-1200x790.jpg",
        title: "Donec quis tortor accumsan, cursus tortor at, consequat",
        text: "Nulla id mauris blandit, dignissim risus quis, scelerisque dui. Duis lorem augue, elementum ut velit at, maximus consectetur mi. Nam in dapibus turpis, finibus faucibus risus. Vestibulum elementum sed justo ut faucibus. Curabitur ullamcorper vestibulum justo nec ullamcorper. Morbi tempor pellentesque turpis quis tincidunt. Nam gravida quam id libero cursus vehicula.",
        date: "20-05-2021",
        author: "admin",
        isPopular: true
    }, 
    {
        id: 2,
        img: "img/main/farm-to-table/fi-water-side-rest-1200x790.jpg",
        title: "Phasellus vestibulum consequat efficitur. Cras facilisis augue urna",
        text: "Etiam at convallis diam, nec hendrerit dolor. Integer faucibus ante et metus vulputate, a semper velit tempor. Quisque vel erat elit. Nulla scelerisque aliquet metus, et accumsan tellus auctor eget. Donec vel est ac arcu interdum tincidunt at sit amet felis. Nullam mollis elit ex, id tempus libero cursus.",
        date: "21-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 3,
        img: "img/main/farm-to-table/fi-street-food-1200x790.jpg",
        title: "Nullam id est quis ligula aliquam varius quis",
        text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pharetra, urna eu auctor consequat, mauris odio viverra ligula, ac malesuada lorem lectus eget est. Phasellus volutpat, metus non faucibus volutpat, purus massa finibus diam, vitae viverra massa orci et nibh. Nullam rutrum euismod urna, ut finibus odio accumsan at.",
        date: "21-05-2021",
        author: "admin",
        isPopular: true
    },
    {
        id: 4,
        img: "img/main/farm-to-table/fi-organic-breakfast-1200x790.jpg",
        title: "Aliquam lobortis lacus id lectus tempus vehicula. Nullam",
        text: "Curabitur vestibulum libero ut posuere tempus. Aenean et gravida augue. Nulla cursus dui nisl, ac euismod ligula auctor a. Quisque egestas, quam nec condimentum ullamcorper, ligula mi sodales nisl, eu accumsan enim ex sit amet nulla. Sed fringilla lacus vel fringilla placerat. Integer.",
        date: "21-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 5,
        img: "img/main/farm-to-table/fi-korean-food-1200x790.jpg",
        title: "Proin venenatis, massa sagittis volutpat ullamcorper, lorem metus",
        text: "Fusce volutpat nisl sollicitudin consequat imperdiet. Maecenas sit amet vestibulum nunc. Vestibulum nisi diam, semper sed tristique hendrerit, aliquam accumsan nibh. Phasellus pretium sem massa, ultricies bibendum ante condimentum nec. Etiam justo risus, hendrerit ac commodo at, congue bibendum augue. Curabitur gravida est leo, quis porta augue sollicitudin eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "21-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 6,
        img: "img/main/farm-to-table/Yogurt-Nan-1200x790.jpg",
        title: "Class aptent taciti sociosqu ad litora torquent per",
        text: "Praesent a sollicitudin felis. Cras eleifend lectus et turpis lacinia, ac ornare eros ultrices. Cras at congue nulla, eget eleifend tellus. Donec lacinia elit ligula, eget condimentum erat luctus vitae. Etiam suscipit nisi a nisl feugiat, sed suscipit tellus suscipit. Nunc pretium est ut luctus scelerisque. Phasellus.",
        date: "23-05-2021",
        author: "admin",
        isPopular: true
    },
    {
        id: 7,
        img: "img/main/farm-to-table/fi-toasts-1200x790.jpg",
        title: "Integer vitae nisl vel urna volutpat commodo. Etiam.",
        text: "Donec egestas lectus et ipsum aliquam condimentum. Duis scelerisque, ex a tristique pulvinar, dui odio eleifend orci, a semper est nisi in risus. Sed faucibus tincidunt gravida. Phasellus hendrerit leo tincidunt aliquet tincidunt. Aliquam metus justo, lobortis at tellus ut, porttitor venenatis justo. Vivamus vitae nulla id sapien tempus scelerisque at in metus.",
        date: "23-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 8,
        img: "img/main/farm-to-table/fi-roundup-1200x790.jpg",
        title: "Aenean tellus libero, faucibus a neque non, consequat",
        text: "Donec lobortis vel tellus vitae vulputate. Vivamus sit amet aliquet felis. Nullam at posuere nisi. Praesent vestibulum purus eget quam tempus efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida lorem in nisl euismod facilisis. Vivamus vitae lectus id ipsum hendrerit faucibus. Aenean rutrum non massa non.",
        date: "26-05-2021",
        author: "admin",
        isPopular: false
    },
    {
        id: 9,
        img: "img/main/farm-to-table/single-post-img3-1200x790.jpg",
        title: "Food corner: top japanese restaurants for sushi",
        text: "Nulla id mauris blandit, dignissim risus quis, scelerisque dui. Duis lorem augue, elementum ut velit at, maximus consectetur mi. Nam in dapibus turpis, finibus faucibus risus. Vestibulum elementum sed justo ut faucibus. Curabitur ullamcorper vestibulum justo nec ullamcorper. Morbi tempor pellentesque turpis quis tincidunt. Nam gravida quam id libero cursus vehicula.",
        date: "26-05-2021",
        author: "admin",
        isPopular: true
    }
];