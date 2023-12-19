"use client"

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowRoundForward } from 'react-icons/io';

const menu = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$24.00",
  },
  {
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$24.00",
  },
  {
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$26.00",
  },
  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$12.00",
  },
]

const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <div>
          <h2>FAvorite Menu</h2>
          <Link href="/" className="text-green">
            View all
            <IoIosArrowRoundForward />
          </Link>
        </div>
        {/* menu grid */}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
          {menu.map((item, index) => {
            return (
              <div 
                key={index} 
                className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group"
              >
                <Image 
                  src={item.img}
                  width={270}
                  height={270}
                  alt="menu"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Menu