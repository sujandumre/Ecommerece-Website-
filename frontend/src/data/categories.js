import iphone from "../assets/iphonebest.png";
import shoes from "../assets/images/shoes.png";
import beauty from "../assets/images/beauty.png";
import men from "../assets/images/men.png";
import laptop from "../assets/images/laptop.png";
import watch from "../assets/images/watch.png";
// import sports from "../assets/images/sports.png";
import sports from "../assets/images/sports.jpg";

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
   {
    id:6,
    image:men,
    name:"Fashion",
    category:"Clothing",
    price:199,
    oldPrice:249,
    discount:"-20%",
    reviews:156,
  },
  {
    id:7,
    image:sports,
    name:"Sports Wear",
    category:"Sports",
    price:50,
    oldPrice:70,
    discount:"-10%",
    reviews:45,
  },

];

export default categories