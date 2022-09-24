const getTheTitles = function(a) {
let titles = [];

a.forEach(element => {
    let index = a.indexOf(element);
    let title = a[index].title;
    titles.push(title);
    
});
return titles;
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
