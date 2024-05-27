import './App.css'
import { Button } from './components/ui/button'

function App() {
  const userActivity = [
    {date:"6d ago", activeUsers:120},
    {date:"6d ago", activeUsers:120},
    {date:"6d ago", activeUsers:120},
    {date:"6d ago", activeUsers:120},
    {date:"6d ago", activeUsers:120},
    
  ]
  return (
    <>
      <div>
        <h1 className='text-center text-orange-400'> test</h1>
        <Button>test</Button>
      </div>
    </>
  )
}

export default App
