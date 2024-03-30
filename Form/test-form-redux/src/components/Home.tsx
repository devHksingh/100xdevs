import { Link } from "react-router-dom"


function Home() {
  return (
    <div className="min-h-screen hero bg-base-200">
  <div className="text-center hero-content">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
      <Link className="btn btn-primary" to={'resigter'}>Resigter</Link>
    </div>
  </div>
</div>
  )
}

export default Home