import { BiError } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"

interface IProps {
    statusCode: number;
    title?: string;
}

const PageNotFound = ({ statusCode, title = "page not found" }: IProps) => {
    const location = useLocation();

    return (
        <div className="bg-black h-screen text-white">
            <div className="container mx-auto px-5 pt-20 flex flex-col space-y-5 md:space-y-10">
                <h2 className="text-6xl text-white"><BiError /></h2>
                <h2 className="text-2xl md:text-5xl font-bold">{statusCode} - {title}</h2>
                <p className="text-md md:text-lg font-medium leading-6">Oops something went wrong, Try to refresh this page or feel free to content us if this problem still</p>


                <div className="flex items-center space-x-7">
                    <Link
                        to={"/"}
                        reloadDocument
                        className="bg-gray-500 hover:bg-gray-400 px-5 py-3 rounded-md font-medium active:scale-90 text-sm md:text-xl"
                    >
                        Home
                    </Link>
                    <Link
                        to={`${location.pathname}`}
                        reloadDocument
                        className="bg-gray-500 hover:bg-gray-400 px-5 py-3 rounded-md font-medium active:scale-90 text-sm md:text-xl"
                    >
                        Refresh
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;