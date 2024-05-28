import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[85vh] bg-[url('./src/assets/b1.webp')] bg-cover bg-center ">
        <h1 className="text-2xl font-bold text-white sm:text-4xl xl:text-5xl font-serif mb-4">
          Tribal Tunes
        </h1>
        <p className="text-xl font-semibold text-white sm:text-xl xl:text-xl font-serif mb-8 ">
          Experience the rhythm of the Indian tribe with our unique blend of
          traditional and contemporary music.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-amber-900 hover:bg-amber-950 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate("/instruments");
            }}
          >
            Listen Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
