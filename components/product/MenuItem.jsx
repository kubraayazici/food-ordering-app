import Image from "next/image"
import { FaShoppingBasket } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
        <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-3xl rounded-tl-2xl rounded-tr-2xl">
            <div className="relative w-36 h-36 hover:scale-110 transition-all">
                <Image src="/images/_bg.jpg" alt="" layout="fill" className="rounded-lg"></Image>
            </div>
        </div>
        <div className="p-[25px] text-white container mx-auto">
            <h4 className="text-xl font-semibold">Delicious Pizza</h4>
            <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est temporibus quaerat inventore!</p>
            <div className="flex justify-between items-center mt-4">
                <span>$29</span>
                <button className="btn-primary rounded-full ml-3"><FaShoppingBasket />
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem