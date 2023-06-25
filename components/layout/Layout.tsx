import Cards from "../cards/Cards"
import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"
import Image from 'next/image'



export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="fondoPantalla">
      <Whatsapp />
      <Image
        // className='rounded-full'
        src="/img/logo.jpg"
        width={600}
        height={1250}
        alt="Workflow"
        priority
      />

      {/* <Nav /> */}
      {/* <Cards /> */}
      {/* {children} */}
      {/* <Footer /> */}
    </div>
  )
}