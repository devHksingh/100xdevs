
import {boolean, z} from 'zod'

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const USERTITLE = ['Mr','Mrs','Miss','Dr'] as const
const USERROLE = ['SD1','SD2','SD3','TeamLead','Manager'] as const


// export const UserFormSchema = z
//                                 .object({
//                                     currentStep: z.number().gt(0),
//                                     fromError: z.string(),
//                                     stepOneForm: z.object({
//                                         isCompleted:boolean(),
//                                     }),
//                                     stepTwoForm: z.object({
//                                         isCompleted:boolean(),
//                                     }),
//                                     stepThreeForm: z.object({
//                                         isCompleted:boolean(),
//                                     }),
//                                     formData: z.object({
//                                         firstName: z
//                                                     .string().trim() 
//                                                     .min(2,{message:'Name must be 2 or more characters long'}),
//                                         lastName: z
//                                                   .string().trim() 
//                                                   .min(2,{message:'Name must be 2 or more characters long'}),
//                                         email: z
//                                                 .string()
//                                                 .email()
//                                                 .refine((str)=> emailRegex.test(str),{
//                                                     message:'Please provide right email format'
//                                                 }),
//                                         phone: z
//                                                 .number()
//                                                 .min(10,{message: "Phone numbers are a minimum of 10 digits"}),
//                                         website: z
//                                                  .string()
//                                                  .url()
//                                                  .trim()
//                                                  .toLowerCase()
//                                                  .optional(),
                                        
//                                         title:  z.enum(USERTITLE),
//                                         role: z.enum(USERROLE),
//                                         userPassword: z.object({
//                                             password: z
//                                                   .string()
//                                                   .min(8)
//                                                   .refine((str)=>passwordRegex.test(str),{message:`Password at least 8 characters.
//                                                   must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number Can contain special characters`}),
//                                             confirmPassword: z  
//                                                   .string()
//                                                   .min(8),
//                                         }).refine((data)=> data.password === data.confirmPassword ,{
//                                             message:'Password not match',
//                                             path:['confirmPassword']
//                                         }),
//                                         address: z.object({
//                                             street: z   
//                                                 .string().trim()
//                                                 .min(4,{message: 'Street must be 5 or more characters long'}),
//                                             city: z
//                                                 .string().trim()
//                                                 .min(2,{message:'City must be 2 or more characters long'}),
//                                             state: z
//                                                 .string().trim()
//                                                 .min(2),
//                                             zipcode: z  
//                                                 .string()
//                                                 .min(6)
//                                                 .regex(/^\d{5}(-\d{4})?/,{message:'Must be 6 digit zip.'})
//                                         }),
                                
//                                         id: z.number().int().positive().min(2).optional()


                                            
                                                
                                        
//                                     })
                                    
//                                 })

export const BasicFormSchema = z.object({
    formData: z.object({
        firstName: z
            .string().trim() 
            .min(2,{message:'Name must be 2 or more characters long'}),
    lastName: z
                .string().trim() 
                .min(2,{message:'Name must be 2 or more characters long'}),
    
    phone: z
            .number()
            .min(10,{message: "Phone numbers are a minimum of 10 digits"}),
    website: z
            .string()
            .url()
            .trim()
            .toLowerCase()
            .optional(),
                                        
    title:  z.enum(USERTITLE),
    role: z.enum(USERROLE),
    })
    
})

const UserLoginFormSchema = z.object({
    loginData: z.object({
        
    email: z
    .string()
    .email()
    .refine((str)=> emailRegex.test(str),{
             message:'Please provide right email format'
            }),
    userPassword: z.object({
    password: z
      .string()
      .min(8)
      .refine((str)=>passwordRegex.test(str),{message:`Password at least 8 characters.
      must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number Can contain special characters`}),
    confirmPassword: z  
      .string()
      .min(8),
}).refine((data)=> data.password === data.confirmPassword ,{
message:'Password not match',
path:['confirmPassword']
}),
userId: z.number().int().positive().min(2).optional()
    })
})
                                
const UserAddressFormSchema= z.object({
    street: z   
            .string().trim()
            .min(4,{message: 'Street must be 5 or more characters long'}),
    city: z
        .string().trim()
        .min(2,{message:'City must be 2 or more characters long'}),
    state: z
        .string().trim()
        .min(2),
    zipcode: z  
        .string()
        .min(6)
        .regex(/^\d{5}(-\d{4})?/,{message:'Must be 6 digit zip.'})
})
    

const UserFormStateSchema = z.object({
    currentStep: z.number().gt(0),
    fromError: z.string(),
    stepOneForm: z.object({
        isCompleted:boolean(),
    }),
    stepTwoForm: z.object({
        isCompleted:boolean(),
    }),
    stepThreeForm: z.object({
        isCompleted:boolean(),
    }),
})

// export type FormSchema = z.infer<typeof UserFormSchema>

export const UserSchemaFormWithAddress = BasicFormSchema.extend({address:UserAddressFormSchema})

export const UserSchemaFormWithLogin = BasicFormSchema.extend({UserLoginFormSchema})

export const UserSchemaFormWithBasicAndFormState = BasicFormSchema.extend({UserFormStateSchema})

export const UserSchemaFormWithLoginAndFormState = UserLoginFormSchema.extend({UserFormStateSchema})

export const UserSchemaFormWithAddressAndFormState = UserAddressFormSchema.extend({UserFormStateSchema})

// export type UserSchemaFormWithBasicAndFormState ,UserSchemaFormWithLoginAndFormState, UserSchemaFormWithAddressAndFormState

export type UserFormWithBasicAndState = z.infer<typeof UserSchemaFormWithBasicAndFormState>

export type UserFormWithAddressAndState = z.infer<typeof UserSchemaFormWithAddressAndFormState>

export type UserFormWithLoginAndState = z.infer<typeof UserSchemaFormWithLoginAndFormState>

export const UserSchemaWithAddressAndLogin = UserSchemaFormWithAddress.merge(UserLoginFormSchema)

export const UserSchemaCompleteSchema = UserSchemaWithAddressAndLogin.extend({formState:UserFormStateSchema})

export type UserFormWithBasicAndAddress = z.infer<typeof UserSchemaFormWithAddress>

export type UserFormWithAddressAndLogin = z.infer<typeof UserSchemaWithAddressAndLogin>

// export seprate state

export type UserFormWithBasic = z.infer<typeof BasicFormSchema>

export type UserFormWithLogin = z.infer<typeof UserLoginFormSchema>

export type UserFormWithAddress = z.infer<typeof UserAddressFormSchema>


export type UserFormComplete = z.infer<typeof UserSchemaCompleteSchema>
