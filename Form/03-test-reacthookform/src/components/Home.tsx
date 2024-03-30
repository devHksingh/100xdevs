import { Link } from "react-router-dom"


function Home() {
  return (
//     <section className="w-3/4 text-gray-600 w- body-font">
// 		<div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
// 			<div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
// 			<h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Before they sold out
// 				{/* <br className="hidden lg:inline-block"/> */}
// 				<hr/>
// 			</h1>
// 			<p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
// 			<div className="flex justify-center">
// 				<button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
// 				<button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Button</button>
// 			</div>
// 			</div>
// 			<div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
// 			<img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
// 			</div>
// 		</div>
// </section>

<div className="min-h-screen hero bg-base-200 text-slate-400">
  <div className="flex-col hero-content lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
	  <Link className="btn btn-primary" to={'/infoForm'}>Register</Link>
    </div>
  </div>
</div>
  )
}

export default Home