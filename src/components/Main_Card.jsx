function Main_Card({ header, content }) {
    return (
        <div className="bg-blue-800 h-screen flex justify-center items-center ">
            <div className=" bg-white w-10/12 h-[85%] rounded-2xl shadow-2xl flex-col items-center">
                { header }
                { content }
            </div>
        </div>
    )
}

export default Main_Card

