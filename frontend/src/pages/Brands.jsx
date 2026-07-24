import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
  },
  {
    id: 3,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 5,
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    id: 6,
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
  },
  {
    id: 7,
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    id: 8,
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
  },
];

function Brands() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-center text-gray-800">
            Shop by Brand
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-12">
            Browse products from the world's most trusted brands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {brands.map((brand) => (

              <div
                key={brand.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center cursor-pointer hover:-translate-y-2"
              >

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-20 object-contain mb-6"
                />

                <h2 className="text-xl font-semibold text-gray-800">
                  {brand.name}
                </h2>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Brands;