"use client"

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"




const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat text-white pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image 
                src="/logo.svg"
                width={90}
                height={36}
                alt=""
              />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>Blog</div>
            {/* item */}
            <div>item</div>
            {/* socials */}
            <div>Socials</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer