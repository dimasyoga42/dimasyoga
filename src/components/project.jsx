
function Project() {
  return (
    <div className="w-full mt-5">
        <h1 className="font-fira font-bold text-2xl underline underline-offset-2">Project:</h1>
        <div className="card filter backdrop:blur-sm w-full shadow-md">
  <div className="card-body">
    <h2 className="card-title cursor-pointer underline text-sky-400 underline-offset-2">Dimas yoga</h2>
    <p>Personal web portfolio that I made using ReactJS</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card filter backdrop:blur-xl w-full shadow-md">
  <div className="card-body">
    <h2 className="card-title cursor-pointer underline underline-offset-2 text-sky-400">Quranku</h2>
    <p>a website that I developed only with HTML, CSS and JavaScript</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </div>
  )
}

export default Project