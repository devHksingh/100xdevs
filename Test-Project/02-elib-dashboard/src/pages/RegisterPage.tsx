import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { register } from "@/http/api"
import useTokenStore from "@/store"
import { useMutation } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()
  const setToken = useTokenStore((state)=> state.setToken)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const mutation = useMutation({
    mutationFn:register,
    onSuccess:(response)=>{
      console.log('login succesfull');
      setToken(response.data.accessToken)
      // redirect to dashboard
      navigate('/dashboard/home')
      
    }
  })
  const handleRegisterSubmit =()=>{
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const name = nameRef.current?.value

    // make server call
    // mutation-> send data to db/server
    
    if(!name|| !email || !password){
      return alert('Please enter name, email and password')
    }
    mutation.mutate({name,email,password})    
  }
  return (
    <section className="flex items-center justify-center h-screen it">
        <Card className="max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
          {mutation.isError && <span className="inline-block text-sm text-red-600">{mutation.error.message}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input ref={nameRef} id="name" placeholder="Max" required />
            </div>
            
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              ref={emailRef}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" ref={passwordRef} type="password" />
          </div>
          <Button onClick={handleRegisterSubmit} type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending && <Loader2 className="mr-2 animate-spin"/>}
            Create an account
          </Button>
          
        </div>
        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to={'/auth/login'} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
        </Card>
    </section>
  )
}

export default RegisterPage


