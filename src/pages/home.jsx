import Medsos from "../components/medsos"
function Home() {
  return (
    <div className="font-fira mt-5">
      <h1 className="font-bold text-2xl">hi, Im</h1>
      <div className="flex justify-items-center items-center">
      <small className="text-gray-400">(ID)</small><h1 className="text-2xl font-bold text-sky-400">Dimas yoga</h1>
      </div>
      <div className="flex justify-items-center items-center">
      <small className="text-gray-400">(JP)</small><h1 className="text-2xl font-bold text-sky-400">ディマス</h1>
      </div>
      <div className="flex justify-items-center items-center">
      <small className="text-gray-400">(ZH)</small><h1 className="text-2xl font-bold text-sky-400">迪馬斯</h1>
      </div>
      <h1 className="text-gray-400 mt-2">(hi/him)</h1>
      <div className="mt-5">
        <h1 className=" text-sm md:text-md">a first semester student, whose hobby is trying new things, especially in the field of technology</h1>
      </div>
      <Medsos />
      </div>
  )
}

export default Home