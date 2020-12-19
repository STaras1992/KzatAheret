import { getBreadImages, getCakeImages, getSandwichImages } from './imageUtills.js';

export const getBreadData = () => {
  let array = [];
  const images = getBreadImages();

  array.push({ title: 'לחם 1', text: 'לחם טוב וטעיםת', price: '18.90', image: images[0] });
  array.push({ title: 'לחם 2', text: 'לחם טוב וטעיםת', price: '17.80', image: images[1] });
  array.push({ title: 'לחם 3', text: 'לחם טוב וטעיםת', price: '18.90', image: images[2] });
  array.push({ title: 'לחם 4', text: 'לחם טוב וטעיםת', price: '16.50', image: images[3] });
  array.push({ title: 'לחם 5', text: 'לחם טוב וטעיםת', price: '18.90', image: images[4] });

  return array;
};

export const getCakeData = () => {
  let array = [];
  const images = getCakeImages();

  array.push({ title: 'עוגה 1', text: 'עוגה מעולה', price: '28.80', image: images[0] });
  array.push({ title: 'עוגה 2', text: 'עוגה מעולה', price: '33.30', image: images[1] });
  array.push({ title: 'עוגה 3', text: 'עוגה מעולה', price: '29.90', image: images[2] });
  array.push({ title: 'עוגה 4', text: 'עוגה מעולה', price: '41.90', image: images[3] });
  array.push({ title: 'עוגה 5', text: 'עוגה מעולה', price: '27.50', image: images[4] });

  return array;
};

export const getSandwichData = () => {
  let array = [];
  const images = getSandwichImages();

  array.push({ title: 'סנדוויצ', text: 'אחלה סנדוויצ עם מלא מלא תוספות', price: '17.90', image: images[0] });
  array.push({ title: 'סנדוויצ', text: 'אחלה סנדוויצ עם מלא מלא תוספות', price: '16.90', image: images[1] });
  array.push({ title: 'סנדוויצ', text: 'אחלה סנדוויצ עם מלא מלא תוספות', price: '23.50', image: images[2] });
  array.push({ title: 'סנדוויצ', text: 'אחלה סנדוויצ עם מלא מלא תוספות', price: '21.90', image: images[3] });
  array.push({ title: 'סנדוויצ', text: 'אחלה סנדוויצ עם מלא מלא תוספות', price: '19.90', image: images[4] });

  return array;
};
