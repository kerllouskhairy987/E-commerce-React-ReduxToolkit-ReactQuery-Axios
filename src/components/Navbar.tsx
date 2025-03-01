import { NavLink } from "react-router-dom"
import Button from "./ui/Button"

const Navbar = () => {
    // const cart = useSelector(cartSelector);
    // console.log(cart.cartItems);

    const counterLocalStorage = JSON.parse(localStorage.getItem("productsList") || "[]");

    return (
        <div className="px-4 mx-auto py-3 flex items-center justify-between bg-white sticky top-0 left-0 right-0 z-10">
            <ul className="flex items-center justify-between w-full">
                <li><NavLink to={"/"}> <h1 className="font-bold text-2xl">LOGO</h1> </NavLink></li>

                <div className="flex space-x-5 items-center">
                    <li><NavLink to={"/pricing"}>pricing</NavLink></li>
                    <li><NavLink to={"/features"}>features</NavLink></li>
                    {/* <li><NavLink to={"/cart"}>cart <span>({cart.cartItems.length})</span></NavLink></li> */}
                    <li><NavLink to={"/cart"}>cart <span>({counterLocalStorage.length})</span></NavLink></li>
                    <li> <Button width="w-fit" className="cursor-pointer"> Login</Button> </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar