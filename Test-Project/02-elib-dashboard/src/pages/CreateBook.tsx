import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
import { Ban, Loader2, Upload } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBook } from "@/http/api"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
    title: z.string().min(2, {
      message: "Book title must be at least 2 characters.",
    }),
    genre: z.string().min(2, {
      message: "Genre must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Book description must be at least 2 characters.",
    }),
    coverImage: z.instanceof(FileList).refine((file)=>{
        return file.length === 1
    }, "CoverImage is required"),
    file: z.instanceof(FileList).refine((file)=>{
        return file.length === 1
    }, "Book PDF is required")
    
  })

const CreateBook = () => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title:'',
            genre:'',
            description:'',
            
        }
    });

    const coverImageRef = form.register('coverImage')
    const fileRef = form.register('file')
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn:createBook,
        onSuccess:(response)=>{
          queryClient.invalidateQueries({
            queryKey:['books']
          })
          console.log('book created succesfully',response);
          navigate('/dashboard/books')
          
        }
      })

      // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    const formData = new FormData()
    
    formData.append('title',values.title)
    formData.append('genre',values.genre)
    formData.append('description',values.description)
    formData.append('coverImage',values.coverImage[0])
    formData.append('file',values.file[0])

    mutation.mutate(formData)
  }
    
  return (
    <section>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/books">Books</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Create</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex items-center space-x-2">
                    
                        <Button variant={"outline"} >
                            <Ban size={20}/>
                            <span className="ml-2">Cancel</span>
                        </Button>
                        <Button type="submit" disabled={mutation.isPending}>
                            {mutation.isPending?  <Loader2 className="mr-2 animate-spin"/>:<Upload size={20}/>}
                            
                            <span className="ml-2">Submit</span>
                        </Button>
                        
                    
                </div>
                
        </div>
        <Card className="mt-6">
                <CardHeader>
                    <CardTitle> Create a new book</CardTitle>
                    <CardDescription>
                        Fill out the form below to create a new book.
                    </CardDescription>
                </CardHeader>
                
                <CardContent>
                    {/* Form goes here */}
                    
                            <div className="grid gap-6">
                                
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        
                                        <Input
                                        
                                        type="text"
                                        className="w-full"
                                        
                                        
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>This is your Book title display name.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                control={form.control}
                                name="genre"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        
                                        <Input
                                        
                                        type="text"
                                        className="w-full"
                                        
                                        
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>Add your book genre.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        
                                        <Input
                                        
                                        type="text"
                                        className="min-h-32"
                                        
                                        
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>This is your Book Description.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                                
                                <FormField
                                control={form.control}
                                name="coverImage"
                                render={() => (
                                    <FormItem>
                                    <FormLabel>Cover Image</FormLabel>
                                    <FormControl>
                                        
                                        <Input
                                        
                                        type="file"
                                        className="w-full"
                                        
                                        
                                        {...coverImageRef}
                                        />
                                    </FormControl>
                                    <FormDescription>Upload Cover Image here.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                                
                                <FormField
                                control={form.control}
                                name="file"
                                render={() => (
                                    <FormItem>
                                    <FormLabel>Book PDF</FormLabel>
                                    <FormControl>
                                        
                                        <Input
                                        
                                        type="file"
                                        className="w-full"
                                        
                                        
                                        {...fileRef}
                                        />
                                    </FormControl>
                                    <FormDescription>Upload Book PDF file here.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                                
                                {/* <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                    id="name"
                                    type="text"
                                    className="w-full"
                                    defaultValue="Gamer Gear Pro Controller"
                                    />
                                </div> */}
                                {/* <div className="grid gap-3">
                                    <Label htmlFor="genre">Genre</Label>
                                    <Input
                                    id="genre"
                                    type="text"
                                    className="w-full"
                                    defaultValue="Gamer Gear Pro Controller"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                    id="description"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                    className="min-h-32"
                                    />
                                </div> */}
                                {/* upload */}
                                {/* <div className="grid gap-3">
                                    <Label htmlFor="coverImage">Cover Image</Label>
                                    <Input
                                    id="coverImage"
                                    type="file"
                                    className="w-1/2"
                                    />
                                </div> */}
                                {/* <div className="grid gap-3">
                                    <Label htmlFor="bookFile">Book PDF</Label>
                                    <Input
                                    id="bookFile"
                                    type="file"
                                    className="w-1/2"
                                    />
                                </div> */}
                            </div>
                    
                </CardContent>
                              
                
        </Card>
            </form>
        </Form>
        
            
    </section>
  )
}

export default CreateBook