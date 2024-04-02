import React from 'react'
import ProductCard from './ProductCard'
const productsData = [
    {
        img: "/product1.jpg",
        title: "Sportswear",
        desc: "QUẦN  RẰN RI",
        rating: 4,
        price: "950.000 VND",
    },
    {
        img: "/product2.jpg",
        title: "Sportswear",
        desc: "Off White",
        rating: 4,
        price: "700.000 VND",
    }, 
     {
        img: "/product3.jpg",
        title: "Sportswear",
        desc: "QUẦN ADIDAS ",
        rating: 3,
        price: "500.000 VND",
    },
    {
        img: "/product4.jpg",
        title: "Áo Thun",
        desc: "ÁO ADIDAS SALES",
        rating: 5,
        price: "720.000 VND",
    },
    {
        img: "/product5.jpg",
        title: "Áo Thun",
        desc: "ÁO TRẺ TRUNG ADIDAS",
        rating: 3,
        price: "400.00 VND",
    },
    {
        img: "/product6.jpg",
        title: "Áo Sơ Mi",
        desc: "SƠ MI ADIDAS SALE",
        rating: 5,
        price: "600.000 VND",
    },
    {
        img: "/product7.jpg",
        title: "Áo Thun",
        desc: "ÁO ADIDAS TRẺ TRUNG",
        rating: 4,
        price: "800.000 VND",
    },
    {
        img: "/product8.jpg",
        title: "Áo Polo",
        desc: "POLO ADIDAS SANG TRỌNG",
        rating: 5,
        price: "400.000 VNĐ",
    }
]
const NewProducts = () => {
  return (
    <div>
         <div className="container pt-16">
           <h2 className='font-medium text-2xl pb-4'>New Products</h2>
           <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2
           lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {productsData.map((item, index) => <ProductCard 
            key = {index}
            img = {item.img}
            title = {item.title}
            desc = {item.desc}
            rating = {item.rating}
            price = {item.price}
            />)}
           </div>
         </div>

    </div>
  )
}

export default NewProducts