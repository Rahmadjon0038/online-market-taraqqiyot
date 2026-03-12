'use client'
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

const NewProducts = () => {

    const products = [
        {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99
        },
        {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99
        }, {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99
        }, {
            id: 1,
            img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
            categoryname: "Bolalar kyimlari",
            name: "Fudbolka va shim",
            decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99
        },
    ]

    const savat = () => {
        toast.success("Maxsulot-savatga qo'shildi")
    }

    return (
        <div className="py-24">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Tavsiya etilgan mahsulotlar</h1>
                <Link href={'/products'} className="flex  items-center gap-2 text-green-700 hover:text-green-500">Barchasini ko'rish <ArrowRight /></Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-6">
                {
                    products?.map((item) => (
                        <div className="border border-gray-300 p-6 rounded-xl" key={item.id}>
                            <img src={item.img} alt={item.name} className="mb-4 w-full h-[300px] object-cover  object-top rounded-xl" />
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

export default NewProducts

