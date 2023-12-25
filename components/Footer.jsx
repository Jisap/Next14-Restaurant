"use client"

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"




const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat text-white pt-16">
      <div className="container mx-auto">
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
      </div>
    </footer>
  )
}

export default Footer