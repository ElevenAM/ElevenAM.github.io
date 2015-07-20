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
            name: 'Arcade Game',
            url: 'http://elevenam.github.io/Hive',
            github: 'http://github.com/elevenam/Hive',
            image: 'images/Hive.PNG',
            description: "Utilized JavaScript inside HTML5 Canvas to recreate Frogger with a gun/ ammo system on top. Exercised mastery of loops, conditionals, objects and arrays",
            date: 'April 2015'
        },
        {
            name: 'Neighborhood Map',
            url: 'http://elevenam.github.io/Neighborhood-Map',
            github: 'http://github.com/elevenam/Neighborhood-Map',
            image: 'images/neighborhood.png',
            description: "Used the Google Places/ Maps API to populate an interactive Neighborhood Map of Huntington Beach, CA. "
            + "A list on the side interacts with markers on the map to display restaurant information.  " +
            "The Instagram API was used to allow users to browse pictures of each establishment."  +
            "Exercised mastery of API’s, Dynamic UI’s, Asynchronous requests and error handling",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'June 2015'
        },
        {
            name: 'Jasmine Test Suite',
            url: 'http://elevenam.github.io/Feedreader-Testing',
            github: 'http://github.com/elevenam/Feedreader-Testing',
            image: 'images/Jasmine-Testing.PNG',
            description: "Used the Google Places/ Maps API to populate an interactive Neighborhood Map of Huntington Beach, CA.  " +
            "A list on the side interacts with markers on the map to display restaurant information. " +
            " The Instagram API was used to allow users to browse pictures of each establishment. " +
            "Exercised mastery of API’s, Dynamic UI’s, Asynchronous requests and error handling",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'July 2014'
        },
        {
            name: 'Website Optimization',
            url: 'http://elevenam.github.io/Website-Optimization/views/pizza.html',
            github: 'http://github.com/elevenam/Website-Optimization',
            image: 'images/website_optimization.png',
            description: "Used the Google Places/ Maps API to populate an interactive Neighborhood Map of Huntington Beach, CA. " +
            "A list on the side interacts with markers on the map to display restaurant information. " +
            "The Instagram API was used to allow users to browse pictures of each establishment. "+
            "Exercised mastery of API’s, Dynamic UI’s, Asynchronous requests and error handling",
            skills: ['coniunctione', 'cillum', 'se', 'nisi'],
            date: 'May 2015'
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
