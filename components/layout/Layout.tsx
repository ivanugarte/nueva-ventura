import Cards from "../cards/Cards"
import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"
import Image from 'next/image'



export const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Image
        src="/img/logo.jpg"
        width={800}
        height={1000}
        alt="Workflow"
        priority
      />
     <Image
        src="/img/fondo.jpeg"
        width={800}
        height={1000}
        alt="Workflow"
        priority
      />
      <Cards />
      {children}
      
    </div>
  )
}