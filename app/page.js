import Categories from "@/components/Categories";
import Corusel from "@/components/Corusel";
import NewProducts from "@/components/NewProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Categories/>
      <Corusel/>

      <NewProducts/>
    </div>
  );
}
