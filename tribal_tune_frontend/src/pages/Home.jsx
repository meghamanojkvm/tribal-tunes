import { TitleHeader } from "../components/TitleHeader"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-5xl font-bold mb-4 text-blue-600">Tribal Tune</h1>
                <p className="text-xl mb-8 text-gray-800">Experience the rhythm of the Indian tribe with our unique blend of traditional and contemporary music.</p>
                <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>{
                        navigate("/instruments");
                    }}>Listen Now</button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded">Learn More</button>
                </div>
            </div>
        </div>
    )
}
