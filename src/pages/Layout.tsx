
import { FaCartPlus, FaEye } from "react-icons/fa";
import CardSkeleton from "../components/Skeletons";
import Button from "../components/ui/Button";
import GetProductsCustomHook from "../hooks/GetProducts";
import { IProduct } from "../interfaces";

const HomePage = () => {

    const { data, isLoading } = GetProductsCustomHook({ queryKey: ["products"], url: "/products" });

    console.log(data, isLoading);

    console.log(data?.products);

    if (isLoading) {
        return (
            <div className="container mx-auto py-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 sm:px-0">
                {Array.from({ length: 10 }).map((_, index) => {
                    return (
                        <div className="" key={index}>
                            <CardSkeleton />
                        </div>
                    )
                })}
            </div>
        )
    }



    return (
        <div className="container mx-auto py-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 sm:px-0">
            {
                data?.products.map(({ id, title, description, price, thumbnail, discountPercentage }: IProduct) => {
                    return (
                        <div className="relative overflow-hidden bg-white p-3 rounded-md flex flex-col space-y-3 border border-blue-300" key={id}>
                            <p className="absolute top-0 left-0  bg-gray-400 text-white px-2">{discountPercentage} %</p>

                            <img className="mx-auto w-48" src={thumbnail} alt="product image" />
                            <h2 className="font-semibold text-lg">{title}</h2>
                            <p className="text-sm line-clamp-3 leading-4">{description}</p>
                            <span className="flex gap-2 items-end">
                                <span className="text-4xl font-semibold">${price}  </span>
                                <span className="line-through text-sm" >{(price * (1 - discountPercentage / 100)).toFixed(2)}</span>
                            </span>

                            <div className="flex items-center space-x-3 justify-between">
                                <Button width="w-full" className="flex gap-2 cursor-pointer bg-green-500"><FaEye /> View Product</Button>
                                <Button width="w-full" className="flex gap-2 cursor-pointer"><FaCartPlus /> Add To cart</Button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage;