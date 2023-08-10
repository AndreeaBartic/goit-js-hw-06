const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery');

// Aplicarea stilurilor Flexbox pentru galerie
galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.justifyContent = 'space-around';
galleryList.style.listStyle = 'none';
galleryList.style.padding = '0';
galleryList.style.margin = '0';

const markup = images.map(image => `<li style="margin: 10px;"><img src="${image.url}" alt="${image.alt}" style="max-width: 300px; height: auto; border: 1px solid #ddd; border-radius: 4px; padding: 5px;"></li>`).join('');

galleryList.insertAdjacentHTML('beforeend', markup);