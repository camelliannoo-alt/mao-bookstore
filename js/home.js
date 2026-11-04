{
  const section = document.getElementById('featured');
  const grid = document.getElementById('featured-books');
  const books = typeof BOOKS === 'undefined' ? [] : BOOKS;
  const featured = books.filter((book, i) => books.findIndex((b) => b.category === book.category) === i).slice(0, 3);

  if (featured.length) {
    grid.innerHTML = featured.map(bookCardHTML).join('');
  } else {
    section.hidden = true;
  }
}
