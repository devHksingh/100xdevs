import { useRef, useState } from "react"
import { motion } from "framer-motion"

export const SlideTabsExample = ()=>{
    return (
        <div className="grid h-screen place-content-center bg-neutral-200">
            <SlideTabs/>
        </div>
    )
}


const SlideTabs = ()=>{
    const [position,setPosition] =useState({
        left:0,
        width:0,
        opacity:0
    })
    return (
        <ul
        onMouseLeave={()=>{
            setPosition((previousValue)=>({
                ...previousValue,
                opacity:0
            }))
        }}
        className="relative flex p-1 mx-auto bg-white border-black rounded-full w-fit boder-2"
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>Features</Tab>
            <Tab setPosition={setPosition}>Docs</Tab>
            <Tab setPosition={setPosition}>Blog</Tab>
            <Coursor position ={position}/>
        </ul>
    )
}

const Tab = ({children,setPosition})=>{
    const ref = useRef(null)
    return(
        <li
        ref={ref}
        onMouseEnter={()=>{
            if(!ref.current) return;
            
            // width
            const {width} = ref.current.getBoundingClientRect()
            console.log(width);
            setPosition({
                width,
                opacity:1,
                left:ref.current.offsetLeft
            })
            
        }}
        className="relative z-10 block px-3 cursor-pointer py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
           {children} 
        </li>
    )
}

const Coursor =({position})=>{
    return <motion.li
        animate={position}
        className="absolute z-0 bg-black rounded-full h-7 md:h-12"
    />
}