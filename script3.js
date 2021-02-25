const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


function seven(x) {
    return x.year >= 1970 && x.year <= 1979;
  }

  let tmp = entrepreneurs.filter(seven);
  console.log("Entrepreneur born in the 70S : ")
  console.log(tmp);

  var arrFirstAndLast = []
  var ageEntrepreneurs = ""
  var yearToday = new Date().getFullYear()
  var byName = entrepreneurs.slice(0)

  for (let entrepreneurAttribut in entrepreneurs) {
    let entrepreneurYear = entrepreneurs[entrepreneurAttribut].year
    let entrepreneurFirst = entrepreneurs[entrepreneurAttribut].first
    let entrepreneurLast = entrepreneurs[entrepreneurAttribut].last
    let entrepreneurAge = yearToday - entrepreneurYear

    arrFirstAndLast.push(entrepreneurFirst + " " + entrepreneurLast)
    ageEntrepreneurs += entrepreneurFirst + " " + entrepreneurLast + " would've been " + entrepreneurAge  + " years old" + "\n"
  }

console.log("Name & Last Name")
console.log(arrFirstAndLast)

console.log("Their Age")
console.log(ageEntrepreneurs)

console.log("From A to Z")
byName.sort(function(a,b) {
    var x = a.last.toLowerCase();
    var y = b.last.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
console.log(byName)