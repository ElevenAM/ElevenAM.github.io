function appViewModel() {
    function wrapInRows() {
        var allRows = [];
        var row;
        self.projects.forEach(function (project, i) {
            if (i % self.cols === 0) {
                if (row) {
                    allRows.push(row);
                }
                row = {};
                row.content = [];
            }
            row.content.push(project);
        });

        if (row) {
            allRows.push(row);
        }

        return allRows;
    }

    self.cols = 2;

    self.colName = (function () {
        return 'col-md-' + 12 / self.cols;
    })();

    self.projects = [
        {
            name: 'Arbonne Promotions Page',
            url: 'http://promotions.arbonne.com',
            github: '',
            image: 'images/promotionsite.PNG',
            description: "This project was one of the solo-endeavors I am most proud of. The site is fully responsive on all screens and includes a drop-down menu which changes content based on the selection. The two more tricky features, however, are the product description buttons that float over the product images and the \"Share\" button. The product description buttons are generated dynamically via JSON object for both large/ small screen options and locked to percentage coordinates on the image. The \"Share\" button can detect which product set you are looking at and when you share the page via social media, the link will automatically open the correct product set and scroll the viewer down to the set.",
            date: 'October 2015'
        },
        {
            name: 'Arbonne Event Microsite',
            url: 'http://arbonne-events.arbonne.com/nvp/',
            github: '',
            image: 'images/microsite.PNG',
            description: "Given a photoshop image, I created a pixel perfect representation of the desired event microsite. Notable extra elements include a Navigation bar that tracks where the user is on the page, a \"Print\" button that automatically adjusts content to be print friendly and the usage of modals/ carousels.",
            date: 'August 2015'
        },
        {
            name: 'Neighborhood Map',
            url: 'http://elevenam.github.io/Neighborhood-Map',
            github: 'http://github.com/elevenam/Neighborhood-Map',
            image: 'images/neighborhood.png',
            description: "This project reflects my ability to consume API's from different sources and bring them together in a single application. In this example I used the Google Places/Maps API to populate an interactive Neighborhood Map of Huntington Beach, CA. A list on the side interacts with markers on the map to display restaurant information. The Instagram API was used to allow users to browse pictures of each establishment. Here I exercised mastery of API’s, Dynamic UI’s, asynchronous requests, and error handling.",
            date: 'June 2015'
        },
        {
            name: 'Website Optimization',
            url: 'http://elevenam.github.io/Website-Optimization/views/pizza.html',
            github: 'http://github.com/elevenam/Website-Optimization',
            image: 'images/website_optimization.png',
            description: "This project demonstrates my ability to improve the code efficiency of a Web page. Initially I was given a page with a Google Page Score of 35/100. I was able to reorganize the HTML, inlined critical CSS, streamlined the JavaScript functions, minimized files, and compressed images to finish with a Google Page Score of 97/100.",
            date: 'May 2015'
        },
        {
            name: 'Arcade Game',
            url: 'http://elevenam.github.io/Hive',
            github: 'http://github.com/elevenam/Hive',
            image: 'images/Hive.PNG',
            description: "This project demonstrates my ability to imagine and create fun and engaging games. In this example I utilized JavaScript inside HTML5 Canvas to recreate Frogger with a few new extras. It features ammo/gun system, five different enemies, lives, and progressive difficulty! Exercised mastery of loops, conditionals, objects, inheritance, and arrays. Check out what happens at level 15!",
            date: 'April 2015'
        },
        {
            name: 'Jasmine Test Suite',
            url: 'http://elevenam.github.io/Feedreader-Testing',
            github: 'http://github.com/elevenam/Feedreader-Testing',
            image: 'images/Jasmine-Testing.PNG',
            description: "This project represents my ability to adapt to a specific development procedure and produce viable code. Test-driven development is a great way to approach development. Instead of just rushing into code, it's important to build a series of tests that stress the desired functionality. As tests are built, results vary from pass to fail, and when all the tests pass, a working version of the desired product has been accomplished. In this exercise, I was given an existing Feedreader application. My job was to use the Jasmine library to design tests that would make sure each feature was accounted for and worked correctly.",
            date: 'July 2014'
        }
    ];

    self.projects.forEach(function (project, i) {
        project.id = 'project' + i;
        project.idWithHash = '#' + project.id;
    });

    self.projectsInRows = wrapInRows();

    self.chosenProject = ko.observable();

    self.goToProject = function (project) {
        self.chosenProject(project);
    };
}

ko.applyBindings(new appViewModel());
