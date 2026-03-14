'use client'
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { FaHeart } from "react-icons/fa";
import { useGetNotify } from "@/hooks/notify";

const page = () => {
    const notify = useGetNotify()
    const products = [
        {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false
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
            isliked: false
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
        {
            id: 5,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        }, {
            id: 6,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        }, {
            id: 7,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        }, {
            id: 8,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true
        },
    ]

    const savat = () => {
        notify("ok", "Maxsulot-savatga qo'shildi")
    }

    const liked = (id) => {
        console.log(id)
        notify('ok', "sevimlilarga qo'shildi")
    }

    return (
        <div className="">

            <div className="mt-12 grid grid-cols-4 gap-6">
                {
                    products?.map((item) => (
                        <div className="border border-gray-300 p-6 rounded-xl relative" key={item.id}>
                            <img src={item.img} alt={item.name} className="mb-4 w-full h-[300px] object-cover  object-top rounded-xl" />
                            <FaHeart onClick={() => liked(item.id)} className={`absolute top-7 right-8 ${item.isliked ? 'text-red-500' : "text-gray-400"} text-3xl cursor-pointer active:scale-90`} />
                            <p className="bg-gray-100 py-1 px-3 rounded-xs inline">{item.categoryname}</p>
                            <h2 className="text-2xl my-3">{item.name}</h2>
                            <p className="text-gray-700">{item.decs}</p>
                            <div className="flex justify-between items-center mt-4">
                                <h1 className="text-3xl font-bold text-green-600">{item.price} so'm</h1>
                                <p>{item.sanoq} qoldi</p>
                            </div>
                            <button onClick={() => savat()} className="bg-green-600 text-white text-xl mt-6 w-full py-3 rounded-xl hover:bg-green-500 active:scale-95">Savatga qo'shish</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default page

