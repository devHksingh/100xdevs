import {useRoutes} from 'react-router-dom'
import Home from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"

const route = () => {
    let element = useRoutes([
        {
            path:'/',
            element:<NavLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    index:true,
                    element:<About/>
                },
                {
                    index:true,
                    element:<Contact/>
                },
            ]
        }
    ])
  return (
    <div>
        {element}
        route</div>
  )
}

export default route