export const Appbar = () => {
    return <div className="shadow h-14 bg-blue-600 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-3xl text-white">
            PAYTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center text-white h-full mr-4">
                Hello, User!
            </div>
            <div className="rounded-full h-12 w-12 bg-cyan-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>

    </div>
}