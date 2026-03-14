'use client'
import { Handbag, Heart, Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import AuthModal from "./Auth"
import { useState } from "react"

const Navbar = () => {

    const [saveLink, setSaveLink] = useState('')
    const [search, setSearch] = useState('')

    const navbardata = [

        {
            id: 2,
            name: "Mahsulotlar",
            link: "/products",
            icon: <Handbag />
        },
        {
            id: 1,
            name: "Sevimlilar",
            link: "/favorites",
            icon: <Heart />

        },
    ]

    const handleClick = (link) => {
        setSaveLink(link)
    }

    const handleSearch = () => {
        console.log(search)
    }




    return (
        <div className="flex  justify-between p-3 py-6 ">
            <Link href={'/'}>
                <div className="flex items-center gap-4">

                    <div className="bg-green-500 p-2 w-12 h-12 flex justify-center items-center text-2xl rounded-xl font-bold text-white">
                        O
                    </div>
                    <h1 className="font-bold text-xl">Online Market</h1>
                </div>
            </Link>


            <div className="flex rounded-xl border border-gray-400 active:border-green-600 overflow-hidden">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Qidirish... " className="px-4 py-2  w-[600px] outline-none " />
                <button onClick={() => handleSearch()} className="bg-green-600 py-2 px-4 "><Search className="text-xl text-white" /></button>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                    {navbardata?.map((item) => (
                        <div key={item.id}>
                            <Link onClick={() => handleClick(item.link)} className={`flex gap-2 hover:text-green-500 ${saveLink == item.link ? "text-green-600" : ""} `} href={item.link}>{item.icon}{item.name}</Link>
                        </div>
                    ))}
                </div>
                <Link href={'/cart'}><button className="flex gap-2 border border-gray-300 px-3 py-2 rounded-xl hover:bg-gray-100">Savat <ShoppingCart /> </button></Link>

                <AuthModal>
                    <button className="flex gap-2 border border-gray-300 px-3 py-2 text-white rounded-xl hover:bg-gray-100 hover:text-black bg-green-500"> Kirish</button>
                </AuthModal>

            </div>

        </div>
    )
}

export default Navbar