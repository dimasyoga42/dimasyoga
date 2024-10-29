
function Project() {
  return (
    <>
    <div className="mt-9">
    <h1 className="mt-2 font-fira font-bold text-sky-400 underline underline-offset-2">Project</h1>
    <small className="text-gray-400 italic font-fira">some things I ve been working on</small>
    </div>
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 ">
    <div className="rounded-lg p-4 text-accent shadow-md transition-shadow duration-300 hover:shadow-lg h-32 flex justify-items-center items-center">
  <div className="flex justify-items-center items-center">
   <div>
   <h2 className=" font-bold cursor-pointer underline underline-offset-2 text-sky-400">dimas yoga</h2>
    <p className="text-gray-400 text-xs">a website that I developed only with ReactJs</p>
    <div className="card-actions justify-end">
    </div>
   </div>
  </div>
</div>

<div className="rounded-lg p-4 text-accent shadow-md transition-shadow duration-300 hover:shadow-lg h-32  flex justify-items-center items-center">
  <div className=" flex justify-items-center items-center m-auto">
    <div>
    <h2 className="font-bold  cursor-pointer underline underline-offset-2 text-sky-400">Quranku</h2>
    <p className="text-gray-400 text-xs">a website that I developed only with HTML, CSS and JavaScript</p>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Project