'use client'

import NewProducts from "@/components/NewProducts"
import { Baby } from "lucide-react"
import { useParams } from "next/navigation"

const page = () => {
    const { id } = useParams()

    const categories = [
        {
            id: 1,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Bolalar kiimlari"
        },
        {
            id: 2,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Ayollar kiimlari"
        }, {
            id: 3,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Erkaklar kiimlari"
        },
        {
            id: 4,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Akssesuarlar"
        },
    ]
    const products = [
        {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        },
        {
            id: 2,
            img: "https://olcha.uz/image/700x700/products/gq8oTg1zh8PhFvhmTfJBszLvKGM9Gx1vQkanNkhfFGwb8UJjJdPL1YxeiRzf.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true

        }, {
            id: 3,
            img: "https://images.uzum.uz/d4rvmgojsv1o95ch8dfg/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        }, {
            id: 4,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        },

    ]

    const element = categories.find((item) => item.id == id)

    return (
        <div className="mt-16">
            <div>
                <h1 className="text-3xl flex items-center gap-6 font-bold text-green-600">{element.icon} {element.name}</h1>
                <p className="mt-6">14ta maxsulot topildi    </p>
            </div>


            <NewProducts products={products} />
        </div>
    )
}

export default page