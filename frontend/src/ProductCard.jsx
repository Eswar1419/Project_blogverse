const ProductCard = () => {
    return (
        <div className="border-4 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-xl shadow-lg shadow-red-400">
            <img src="1.jpg" alt="" className="w-[150px] h-[150px] border-1 border-black hover:w-[155px] rounded-full " />
            <div className="flex flex-col gap-5 items-center">
                <h2 className="font-bold text-4xl text-blue-600">product 1</h2>
                <p className="text-xl text-gray-600 text-center">This is a simple Product</p>
                <p className="text-black text-2xl font-semibold">$29.99</p>
            </div>
            <button className="bg-amber-500 text-black w-[90%] py-1 rounded-2xl cursor-pointer hover:bg-green-500"> add to cart</button>
        </div>
    )

}

export default ProductCard