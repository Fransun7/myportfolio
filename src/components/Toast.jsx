import checkmark from "../assets/Images/checkmark.png"
export default function Toast ({message, show}) {
    if (!show) return null;
    return (
        <div
        className="fixed top-6 right-5 px-4 rounded-md bg-white text-green-600 shadow-lg text-sm transition-all duration-300 h-20 w-71 flex justify-center items-center flex-col  font-roboto-mono border-4 border-green-600
        "
        >{message}
        <div className="w-8 mt-3">
            <img src={checkmark} alt="" />
        </div>
        
        </div>
    )
} 