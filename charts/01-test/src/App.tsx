import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Label, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const userActivity = [
    {date:"6d ago", activeUsers:120},
    {date:"5d ago", activeUsers:150},
    {date:"4d ago", activeUsers:180},
    {date:"3d ago", activeUsers:220},
    {date:"2d ago", activeUsers:280},
    {date:"1d ago", activeUsers:260},
    {date:"today", activeUsers:280},
    
  ]
  return (
    <>
      <section className="flex items-center justify-center py-24 ">
        <Card className='w-screen m-24 border'>
          <CardHeader>
            <CardTitle>Active users</CardTitle>
          </CardHeader>
          <CardContent className='w-full h-72'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart width={48} height={48} data={userActivity}>
                    <Tooltip/>
                    <Bar dataKey='activeUsers' fill='#8874d8'/>
                </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>


        
      </section>

      <section>
        <Card className='p-12'>
                  <BarChart 
                    width={730} 
                    height={280} 
                    data={userActivity} 
                    margin={{ top: 25, right: 30, left: 20, bottom: 15 }}
                    
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date">
                        <Label value="Days" offset={0} position="insideBottom" />
                      </XAxis>
                      <YAxis label={{ value: 'Number of users', angle: -90, position: 'insideLeft' }} />
                      <Bar dataKey="activeUsers" fill="#8884d8">
                        <LabelList dataKey="activeUsers" position="top" />
                      </Bar>
                  </BarChart>
        </Card>
      </section>
    </>
  )
}

export default App
