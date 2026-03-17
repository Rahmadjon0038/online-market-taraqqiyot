'use client'

import { Minus, Plus, Trash, Trash2 } from "lucide-react"
import { useState } from "react"

const page = () => {

    const [count, setCount] = useState(1)

    const carddata = [
        {
            id: 1,
            name: "Kids Winter Jacket",
            categoryname: "bolalar kiyimlari",
            price: '120 000',
            count: 12,
            img: "https://persey.uz/img_product/NF181R/s0.jpg"
        },
        {
            id: 2,
            name: "Kids Winter Jacket",
            categoryname: "bolalar kiyimlari",
            price: '120 000',
            count: 12,
            img: "https://persey.uz/img_product/NF181R/s0.jpg"

        },
    ]

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div className="mt-16">
            <h1 className="text-3xl font-bold">Savat</h1>
            <div className="p-2 mt-6 flex gap-8">
                <div className="w-[65%] p-4">
                    {
                        carddata?.map((item) => (
                            <div key={item.id} className="flex gap-6  mb-6 border border-gray-300 rounded-xl overflow-hidden p-6">
                                <img src={item.img} alt="img" className="rounded-xl w-44 h-44" />

                                <div className=" w-full flex justify-between">

                                    <div>
                                        <h1 className="text-xl font-bold hover:text-green-500">{item.name}</h1>
                                        <p className="mt-2">{item.categoryname}</p>
                                        <div className="border border-gray-300 p-3 rounded-xl flex gap-6 my-4 justify-center ">
                                            <button onClick={() => setCount(count - 1)}><Minus /></button>

                                            <h1 className="text-xl">{count}</h1>
                                            <button onClick={() => setCount(count + 1)}><Plus /></button>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-xl text-green-600 font-bold">{item.price} so'm</h1>
                                        <p className="mt-2 ">{item.count} ta</p>
                                        <button onClick={() => handleDelete(item.id)} className="mt-2 text-red-400 active:scale-90"><Trash2 /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="p-4 flex-1">
                    <div className="flex-1  p-4 border border-gray-300 rounded-xl">
                        <h1 className="text-xl font-bold mb-4">Buyurtma xulosasi</h1>
                        <hr />
                        <div className="flex justify-between mt-4">
                            <p>Jami summa</p>
                            <b>bepul</b>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p>Jami summa</p>
                            <b>bepul</b>
                        </div> <div className="flex justify-between mt-4">
                            <p>Jami summa</p>
                            <b>bepul</b>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page