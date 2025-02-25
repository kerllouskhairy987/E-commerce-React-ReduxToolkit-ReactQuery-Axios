const CardSkeleton = () => {
    return (

        <div className="container mx-auto flex flex-col space-y-3 sm:px-0 rounded-md border border-blue-300">
            <div className="flex animate-pulse space-x-4 p-3">
                <div className="flex-1 py-1 rounded-md flex flex-col space-y-3 w-full relative">
                    <div className="h-4 w-[35px] z-10 rounded bg-gray-200 absolute top-0 left-0 px-2"></div>
                    <div className="h-[192px] rounded bg-gray-200 mx-auto w-48"></div>
                    <div className="h-[28px] rounded bg-gray-200 mx-auto w-full font-semibold text-lg"></div>
                    <div className="h-12 rounded bg-gray-200 mx-auto w-full text-sm line-clamp-3 leading-4"></div>
                    <div className="h-10 rounded bg-gray-200 w-[135px] text-sm line-clamp-3 leading-4"></div>


                    <div className="flex items-center gap-3 justify-between">
                        <div className="h-[44px] rounded bg-gray-200 mx-auto w-full py-2 px-4 sm:p-2 font-medium text-xl"></div>
                        <div className="h-[44px] rounded bg-gray-200 mx-auto w-full py-2 px-4 sm:p-2 font-medium text-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardSkeleton;