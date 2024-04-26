import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center h-screen it">
        <Card className="max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Max" required />
            </div>
            
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          
        </div>
        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to={'login'} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
        </Card>
    </section>
  )
}

export default RegisterPage