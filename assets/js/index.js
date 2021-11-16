document.addEventListener('DOMContentLoaded', () => {
  // ! CREATE

  // ! Create news button from Navbar opens Modal Window
  // ! On modal window when inputs are filled, collect and POST
  const postBtn = document.getElementById('create_news');
  postBtn.addEventListener('click', createNews)


  function createNews() {
    const title = document.getElementById('news_title');
    const text = document.getElementById('news_text');
    const isYellow - document.getElementById('news_is_yellow');
    console.log(title, text, isYellow)
  }





  // ! As user i want to be able select between Yellow page or Ordinary News

  // ! READ
  // ! Details Block should render TOP news
  // ! Ordinary news to render REST news
  // ! Yellow pages to render YELLOW news

  // ! UPDATE
  // ! When mouseover the news display Edit button
  // ! when clicked open Modal Window and pre-fill inputs

  // ! DELETE
  // ! When mouseover the news display DELETE button
  // ! When clicked just delete it

  // ! NavItem onHover show Menu
  // ! Search at last if got time
});
