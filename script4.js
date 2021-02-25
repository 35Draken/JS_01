const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  var result = 1
  var arr = []
  var mostRented
  var lessRented 
  var title873495
  var book133712
  
  for (let bookAttribut in books) {
    let bookRented = books[bookAttribut].rented
    let bookTitle = books[bookAttribut].title
    let bookId = books[bookAttribut].id
    
    result *= bookRented
  
    arr.push(bookRented)
    let l = arr.length - 1
    let most = arr.sort()[l]
    if(bookRented === most) {
      mostRented = bookTitle
    }
  
    let less = arr.sort()[0]
    if(bookRented === less) {
      lessRented = bookTitle
    }
  
    if(bookId === 873495) {
      title873495 = bookTitle 
    }
  
    if(bookId === 133712) {
      book133712 = books.indexOf(books[bookAttribut]) 
    }
    
  }
  
  console.log("Have they been rented at least once?")
  if(result > 0) {
    console.log("> " + "YES") 
  } else {
    console.log("> " + "NOPE")
  }
  
  console.log("Most Borrowed ?")
  console.log("> " +mostRented)
  
  console.log("Less Borrowed")
  console.log("> " + lessRented)
  
  console.log("ID: 873495")
  console.log("> " + title873495)
  
  console.log("Delete 133712")
  console.log(books[book133712])
  books.splice(books[book133712],1)
  console.log(books)
  
  console.log("Alpha Order")
  var byTitle = books.slice(0) 
  byTitle.sort(function(a,b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  console.log(byTitle)