const books = [
    {
        title: "Beginning JavaScript",
        author: "Jeremy McPeak ",
        year: 2015,
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke ",
        year: 2018,
    },
    {
        title: "JavaScript and jQuery: Interactive Front-End Web Development",
        author: "Jon Duckett",
        year: 2014,
    },
    {
        title: "JavaScript: The New Toys",
        author: "T. J. Crowder ",
        year: 2020,
    }
];

function Logtitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}

function extratitles(books,Callback) {
    const titles = books.map((book) => book.title);
    Callback(titles);
}

extratitles(books,Logtitles);