import { Nav, Footer } from '@/components'
import '@/styles/globals.css'


export const  metadata = {
    title:'Car Show case',
    description:'this is tamjid ahmed website'
}



const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className="relative">
            <main className="overflow-hidden">
              <Nav />            
                {children}               
              <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout