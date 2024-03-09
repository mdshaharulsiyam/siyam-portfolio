import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const authOptions={
    pages: {
      signIn: '/login',
    },
    providers: [
      CredentialsProvider({
        credentials: {
          username: { label: "Email", type: "Email", placeholder: "petadopter@petadopter.com", required: true },
          password: { label: "Password", type: "password", placeholder: "Password", required: true  }
        },
        async authorize(credentials) {
       if (credentials?.email===process.env.ADMIN && credentials?.password === process.env.ADMIN_PASSWORD) {
        const user = {
          email : process.env.ADMIN ,
          name: 'shaharul siyam'
        }
        //console.log(user)
        return user
       }else {
            return null
          }
  
        },
      }),
    ],
    trustHost: true,
    trustHostedDomain: true,
    secret: process.env.AUTH_SECRET,
  
}
export const {
  handlers: { GET, POST },
  auth,signIn, signOut
} = NextAuth(authOptions)
