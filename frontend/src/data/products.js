import iphone from "../assets/iphonebest.png";
import shoes from "../assets/images/shoes.png";
import beauty from "../assets/images/beauty.png";
import men from "../assets/images/men.png";
import laptop from "../assets/images/laptop.png";
import watch from "../assets/images/watch.png";
import sports from "../assets/images/sports.jpg";

import iphone17notpro from "../assets/images/iphone17notpro.png";
import iphone16pro from "../assets/images/iphone16pro.png";
import iphone16 from "../assets/images/iphone16.png";
import iphone17 from "../assets/images/iphone17.png";

import dqshoes from "../assets/images/dqshoes.png";
import goldshoes from "../assets/images/goldshoes.png";
import jordanshoes from "../assets/images/jordanshoes.png";
import nikeshoes from "../assets/images/nikeshoes.png";

import fitbitwatches from "../assets/images/fitbitwatches.png";
import samsungwatches from "../assets/images/samsungwatches.png";
import lenovowatches from "../assets/images/lenovowatches.png";
import hawaiwatches from "../assets/images/hawaiwatches.png"

import hplaptop from "../assets/images/hplaptop.png";
import lenovolaptop from "../assets/images/lenovolaptop.png";
import acerlaptop from "../assets/images/acerlaptop.png";
import asuslaptop from "../assets/images/asuslaptop.png";

import ceravebeauty from "../assets/images/ceravebeauty.png";
import papayabeauty from "../assets/images/papayabeauty.png";
import perfumes from "../assets/images/perfumes.png";

const products= [

  {
    id:1,
    image:iphone,
    name:"iPhone 15 Pro Max",
    category:"Smartphones",
    price:999,
    oldPrice:1199,
    discount:"-17%",
    reviews:120,
    rating: 5,
  },

  {
    id:2,
    image:shoes,
    name:"Nike Air Max",
    category:"Shoes",
    price:149,
    oldPrice:199,
    discount:"-25%",
    reviews:84,
    rating: 5,
  },

  {
    id:3,
    image:watch,
    name:"Apple Watch",
    category:"Smart Watch",
    price:399,
    oldPrice:499,
    discount:"-20%",
    reviews:52,
    rating: 5,
  },

  {
    id:4,
    image:beauty,
    name:"Luxury Perfume",
    category:"Beauty",
    price:89,
    oldPrice:120,
    discount:"-26%",
    reviews:63,
    rating: 4.7,
  },

  {
    id:5,
    image:laptop,
    name:"MacBook Pro",
    category:"Laptop",
    price:1999,
    oldPrice:2299,
    discount:"-13%",
    reviews:98,
    rating: 4.8,
  },
  {
    id:6,
    image:iphone17,
    name:"iPhone 17 Pro Max",
    category:"Smartphones",
    price:2500,
    oldPrice:3000,
    discount:"-17%",
    reviews:180,
    rating: 5,
  },
  {
    id:7,
    image:iphone17notpro,
    name:"iPhone 17 ",
    category:"Smartphones",
    price:2000,
    oldPrice:2800,
    discount:"-28%",
    reviews:160,
    rating: 5,
  },
  {
    id:8,
    image:iphone16pro,
    name:"iPhone 16 Pro Max ",
    category:"Smartphones",
    price:1800,
    oldPrice:2500,
    discount:"-28%",
    reviews:150,
    rating: 5,
  },
  {
    id:9,
    image:iphone16,
    name:"iPhone 16 ",
    category:"Smartphones",
    price:1500,
    oldPrice:2000,
    discount:"-25%",
    reviews:110,
    rating: 5,
  },
  {
  id: 10,
  image: dqshoes,
  name: "DQ Running Shoes",
  category: "Shoes",
  price: 120,
  oldPrice: 150,
  discount: "-20%",
  reviews: 85,
  rating: 5,
},

{
  id: 11,
  image: goldshoes,
  name: "Gold Sports Shoes",
  category: "Shoes",
  price: 180,
  oldPrice: 220,
  discount: "-18%",
  reviews: 92,
  rating: 5,
},

{
  id: 12,
  image: jordanshoes,
  name: "Air Jordan Sneakers",
  category: "Shoes",
  price: 250,
  oldPrice: 300,
  discount: "-17%",
  reviews: 210,
  rating: 5,
},

{
  id: 13,
  image: nikeshoes,
  name: "Nike Air Max",
  category: "Shoes",
  price: 160,
  oldPrice: 200,
  discount: "-20%",
  reviews: 175,
  rating: 5,
},
{
  id: 14,
  image: fitbitwatches,
  name: "Fitbit Versa 4",
  brand: "Fitbit",
  category: "Smart Watch",
  price: 249,
  oldPrice: 299,
  discount: "-17%",
  reviews: 145,
  rating: 5 ,
},

{
  id: 15,
  image: samsungwatches,
  name: "Samsung Galaxy Watch 7",
  brand: "Samsung",
  category: "Smart Watch",
  price: 349,
  oldPrice: 399,
  discount: "-13%",
  reviews: 220,
  rating: 4.8,
},

{
  id: 16,
  image: lenovowatches,
  name: "Lenovo Smart Watch X",
  brand: "Lenovo",
  category: "Smart Watch",
  price: 179,
  oldPrice: 229,
  discount: "-22%",
  reviews: 96,
  rating: 4.5,
},

{
  id: 17,
  image: hawaiwatches,
  name: "Huawei Watch GT 5",
  brand: "Huawei",
  category: "Smart Watch",
  price: 289,
  oldPrice: 339,
  discount: "-15%",
  reviews: 188,
  rating: 4.7,
},
{
  id: 18,
  image: hplaptop,
  name: "HP Pavilion 15",
  brand: "HP",
  category: "Laptop",
  price: 899,
  oldPrice: 999,
  discount: "-10%",
  reviews: 165,
  rating: 4.6,
},

{
  id: 19,
  image: lenovolaptop,
  name: "Lenovo ThinkPad X1",
  brand: "Lenovo",
  category: "Laptop",
  price: 1199,
  oldPrice: 1399,
  discount: "-14%",
  reviews: 210,
  rating: 4.8,
},

{
  id: 20,
  image: acerlaptop,
  name: "Acer Aspire 7",
  brand: "Acer",
  category: "Laptop",
  price: 799,
  oldPrice: 949,
  discount: "-16%",
  reviews: 138,
  rating: 4.5,
},

{
  id: 21,
  image: asuslaptop,
  name: "ASUS ROG Zephyrus G14",
  brand: "ASUS",
  category: "Laptop",
  price: 1499,
  oldPrice: 1699,
  discount: "-12%",
  reviews: 276,
  rating: 4.9,
},
{
  id: 22,
  image: ceravebeauty,
  name: "CeraVe Moisturizing Cream",
  brand: "CeraVe",
  category: "Beauty",
  price: 24,
  oldPrice: 30,
  discount: "-20%",
  reviews: 325,
  rating: 4.8,
},

{
  id: 23,
  image: papayabeauty,
  name: "Papaya Brightening Face Wash",
  brand: "Nature Glow",
  category: "Beauty",
  price: 15,
  oldPrice: 20,
  discount: "-25%",
  reviews: 187,
  rating: 4.6,
},

{
  id: 24,
  image: perfumes,
  name: "Luxury Eau De Parfum",
  brand: "Essence",
  category: "Beauty",
  price: 89,
  oldPrice: 110,
  discount: "-19%",
  reviews: 254,
  rating: 4.9,
},

];

export default products;