import { projects } from "../constants"

const Portfolio = () => {
  return (
    <div id='portfolio' className='bg-gray-300 pt-32'>
        <div>
            <div className="pb-16 text-center">
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700  text-center sm:pl-20'>A Collection Of My Works</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mx-8">
                {projects.map((item) => (
                    <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                        <figure>

                        <img src={item.image} alt="placeholder" className="pt-8"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-center gap-5">
                                <button className="btn btn-primary">Live Demo</button>
                                <button className="btn btn-primary">View on Github</button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio

