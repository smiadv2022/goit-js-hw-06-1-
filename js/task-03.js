const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryUl=document.querySelector(".gallery");
galleryUl.style.display="flex";
galleryUl.style.listStyle="none";
galleryUl.style.gap="20px";

const galleryList =images.map( function ({url, alt}){
let img;
return img=`<li> <img src=${url} alt=${alt} width=320px height=210px /></li>`;
}).join(" ");
galleryUl.insertAdjacentHTML("beforeend", galleryList);