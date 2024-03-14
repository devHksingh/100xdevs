import  { useEffect, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Progress } from "@/components/ui/progress"

function Register() {
  const [progress, setProgress] = useState(13)
  
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
      console.log(progress);
      
    
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  const donestatus:boolean = true;
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="lg:max-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={20}>
        <div className="flex h-screen items-center justify-center p-6" id="bg-form">
          <div className="font-semibold">
              <div className="flex flex-col gap-8">
                <div className="flex items-center p-2">
                  {donestatus ? (<div className="border-4 border-lime-400 px-4 py-2 rounded-full mr-4">1</div>):(<div className="border-4 border-red-400 px-4 py-2 rounded-full mr-4">1</div>)}
                  <div className="uppercase">
                    <h2 className="text-gray-400 font-mono tracking-widest ">step 1</h2>
                    <p className="tracking-widest text-slate-200">Info {donestatus ? 'done':''}</p>
                  </div>
                </div>
                <div className="flex items-center p-2">
                  <div className="border-4 border-red-400 px-4 py-2 rounded-full mr-4">2</div>
                  <div className="uppercase">
                    <h2 className="text-gray-400 font-mono tracking-widest ">step 2</h2>
                    <p className="tracking-widest text-slate-200">address</p>
                  </div>
                </div>
                <div className="flex items-center p-2">
                  <div className="border-4 border-red-400 px-4 py-2 rounded-full mr-4">3</div>
                  <div className="uppercase">
                    <h2 className="text-gray-400 font-mono tracking-widest ">step 3</h2>
                    <p className="tracking-widest text-slate-200">account</p>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={85}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={8}>
            <div className="flex h-full items-center justify-center p-6 
            ">
              <div className="font-semibold flex gap-4 items-center ">
                
                <div className='flex items-center'>
                  <span className='border-2 border-red-400 rounded-full px-4 py-3'>1</span>
                  <span className='border w-40'><Progress value={progress} className="w-[100%]" /></span>
                  <div className='border-2 border-red-400 rounded-full px-4 py-3'>2</div>
                  <span className='border w-40'><Progress value={progress} className="w-[100%]" /></span>
                  <div className=' border-2 border-red-400 rounded-full px-4 py-3'>3</div>
                </div>
                           
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={92}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three
              {/* <Progress value={33} /> */}
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )

}

export default Register