'use client'
import { Grip, LogOut, PackageSearch, Settings, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const layout = ({ children }) => {

    const [activeBtn, setActiveBtn] = useState(1)

    const sidebarlinks = [
        {
            id: 1,
            text: "Boshqaruv paneli",
            icon: <Grip />,
            link: "/"
        },
        {
            id: 2,
            text: "Mahsulotlar",
            icon: <PackageSearch />,
            link: "products"

        },
        {
            id: 3,
            text: "Buyurtmalar",
            icon: <ShoppingCart />,
            link: "orders"

        },
        {
            id: 4,
            text: "Sozlamalar",
            icon: <Settings />,
            link: "settings"

        },
    ]

    return (
        <div className="flex">
            <div className="w-[300px] bg-white h-screen p-4">
                {
                    sidebarlinks.map((item) => (
                        <Link href={`/admin/${item.link}`} key={item.id} onClick={() => setActiveBtn(item.id)} className={`flex gap-2 items-center font-bold ${item.id == activeBtn ? 'bg-green-500 text-white' : "bg-white hover:bg-gray-100 "} p-3  transition-all  rounded-xl mb-4 `} >{item.icon} {item.text}</Link>
                    ))
                }
                <div className="h-[1px] w-full bg-gray-200">

                </div>
                <Link href={`/`} className="flex mt-4 gap-2 items-center font-bold  bg-white hover:bg-gray-100 p-3  transition-all  rounded-xl mb-4 "><LogOut /> Chiqih</Link>

            </div>
            <div>
                {children}
            </div>
        </div>
    )
}


export default layout