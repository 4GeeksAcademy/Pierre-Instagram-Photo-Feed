const posts = [
  {
    title: 'Foggy',
    image: '/assets/images/img1.jpg',
    dates: '03/23',
    likes: '143',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Palm Trees',
    image: '/assets/images/img2.jpg',
    dates: '06/23',
    likes: '102',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Mountains',
    image: '/assets/images/img3.jpg',
    dates: '02/23',
    likes: '113',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Sand',
    image: '/assets/images/img4.jpg',
    dates: '06/23',
    likes: '201',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Bridge',
    image: '/assets/images/img5.jpg',
    dates: '09/23',
    likes: '253',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Mountains',
    image: '/assets/images/img6.jpg',
    dates: '09/23',
    likes: '213',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Man in the desert',
    image: '/assets/images/img7.jpg',
    dates: '09/23',
    likes: '413',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Homes by the beach',
    image: '/assets/images/img8.jpg',
    dates: '09/23',
    likes: '143',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Patterns',
    image: '/assets/images/img9.jpg',
    dates: '09/23',
    likes: '213',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    title: 'Man on a bike',
    image: '/assets/images/img10.jpg',
    dates: '09/23',
    likes: '239',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

const postContainer = document.querySelector('.user-posts');
const grid = document.querySelector('.grid-icon');
const square = document.querySelector('.square-icon');

const postItemsColumn = posts.map((post) => {
  return `<div className='post-item' style='display: flex; border: 1px solid black; border-radius: 10px; width: 50vw; flex-direction: column; align-items:start; justify-content: center; gap:0rem;'>
    <div style='display: flex; justify-content: space-between; width: 100%; padding: 1rem;'>
      <h5 class=''>${post.title}<h5/>
      <p>${post.dates}<p/>
    </div>
    <img src='${post.image}' style='max-width: 100%;'>
    <div style='padding: 1rem;'>
      <h5>${post.likes} Likes</h1>
      <p>${post.about}</p>
    </div>

  </div>`;
});

const postItemsGrid = posts.map((post) => {
  return `<div className='post-item' style='display: flex;  border-radius: 10px; flex-direction: column; align-items:start; justify-content: center; gap:0rem;'>

    <img src='${post.image}' style='max-width: 100%;'>

  </div>`;
});

const addPostItemsGrid = () => {
  postContainer.classList.remove('user-post');
  postContainer.classList.add('grid-posts');
  postContainer.innerHTML = postItemsGrid.join('');
};

const addPostItemsColumn = () => {
  postContainer.classList.remove('grid-posts');
  postContainer.classList.add('user-posts');
  postContainer.innerHTML = postItemsColumn.join('');
};

window.addEventListener('load', addPostItemsGrid);
square.addEventListener('click', addPostItemsColumn);
grid.addEventListener('click', addPostItemsGrid);
// addPostItemsColumns();
