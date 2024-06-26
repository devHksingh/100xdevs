import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/http/api"
import useTokenStore from "@/store"
import {  useMutation } from "@tanstack/react-query"
import {  Loader2 } from "lucide-react"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


const LoginPage = () => {
  
  const navigate = useNavigate()

  const setToken = useTokenStore((state)=> state.setToken)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const mutation = useMutation({
    mutationFn:login,
    onSuccess:(response)=>{
      console.log('login succesfull',response);
      setToken(response.data.accessToken)
      // redirect to dashboard
      navigate('/dashboard/home')
      
    }
  })
  const handleLoginSubmit =()=>{
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    // make server call
    // mutation-> send data to db/server
    
    if(!email || !password){
      return alert('Please enter email and password')
    }
    mutation.mutate({email,password})    
  }
  return (
    <section className="flex items-center justify-center h-screen">
            <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
            Enter your email below to login to your account.
            {mutation.isError && <span className="inline-block text-sm text-red-600">{mutation.error.message}</span> }
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input ref={emailRef} id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" required />
            </div>
        </CardContent>
        <CardFooter className="flex flex-col">
            <Button onClick={handleLoginSubmit} className="w-full gap-2" disabled={mutation.isPending}>
              {mutation.isPending && <Loader2 className="animate-spin"/>}
              {/* <Loader2 className={mutation.isPending?'animate-spin':''}/> */}
              <span>Sign in</span>
            </Button>
            <div className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <Link to={'/auth/register'} className="underline ">
                
                <span>Sign up</span>
              </Link>
            </div>
        </CardFooter>
            </Card>
    </section>
  )
}

export default LoginPage