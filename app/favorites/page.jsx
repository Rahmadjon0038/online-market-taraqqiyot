'use client'
import { FaHeart } from "react-icons/fa";
import { useGetNotify } from "@/hooks/notify";
import NewProducts from "@/components/NewProducts";

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
    const savat = () => {
        notify("ok", "Maxsulot-savatga qo'shildi")
    }

    const liked = (id) => {
        console.log(id)
        notify('ok', "sevimlilarga qo'shildi")
    }

    return (
        <div className="">
            <div className="mt-12">
                <h1 className="text-3xl ml-2 text-green-600 font-bold">Sizning sevimli mahsulotlaringiz</h1>
            </div>

            <NewProducts products={products} />

        </div>
    )
}

export default page

