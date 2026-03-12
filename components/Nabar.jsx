import { Handbag, Heart, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import AuthModal from "./Auth"

const Navbar = () => {
    return (
        <div className="flex  justify-between p-3 ">
            <Link href={'/'}>
                <div className="flex items-center gap-4">

                    <div className="bg-green-500 p-2 w-12 h-12 flex justify-center items-center text-2xl rounded-xl font-bold text-white">
                        O
                    </div>
                    <h1 className="font-bold text-xl">Online Market</h1>
                </div>
            </Link>

            <div className="flex items-center gap-4">
                <Link className="flex gap-2 hover:text-green-500" href={'/products'}><Handbag /> Mahsulotlar</Link>
                <Link className="flex gap-2 hover:text-green-500" href={'/favorites'}> <Heart />Sevimlilar</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link href={'/cart'}><button className="flex gap-2 border border-gray-300 px-3 py-2 rounded-xl hover:bg-gray-100">Savat <ShoppingCart /> </button></Link>

                <AuthModal>
                    <button className="flex gap-2 border border-gray-300 px-3 py-2 text-white rounded-xl hover:bg-gray-100 hover:text-black bg-green-500"> Kirish</button>
                </AuthModal>

            </div>

        </div>
    )
}

export default Navbar