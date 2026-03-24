'use client'
import Categories from "@/components/Categories";
import Corusel from "@/components/Corusel";
import NewProducts from "@/components/NewProducts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
      img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
      categoryname: "Bolalar kyimlari",
      name: "Fudbolka va shim",
      decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
      price: 65000,
      sanoq: 99,
      isliked: true

    }, {
      id: 3,
      img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
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
  ]
  return (
    <div>
      <Categories />
      <Corusel />

      <div className="flex justify-between mt-12">
        <h1 className="text-3xl font-bold">Tavsiya etilgan mahsulotlar</h1>
        <Link href={'/products'} className="flex  items-center gap-2 text-green-700 hover:text-green-500">Barchasini ko'rish <ArrowRight /></Link>
      </div>

      <NewProducts products={products} />
    </div>
  );
}
