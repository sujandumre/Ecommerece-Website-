import iphone from "../assets/iphonebest.png";
import shoes from "../assets/images/shoes.png";
import beauty from "../assets/images/beauty.png";
import men from "../assets/images/men.png";
import laptop from "../assets/images/laptop.png";
import watch from "../assets/images/watch.png";
// import watch from "../assets/watch.png";

// import laptop from "../assets/laptop.png";

const categories= [

  {
    id:1,
    image:iphone,
    name:"iPhone 15 Pro Max",
    category:"Smartphones",
    price:999,
    oldPrice:1199,
    discount:"-17%",
    reviews:120,
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
  },

];

export default categories