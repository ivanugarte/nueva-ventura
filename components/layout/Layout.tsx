import Button from "../button/Button"
import Cards from "../cards/Cards"
import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"
import Image from 'next/image'



export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="fondoLog">
      <Button />
      <Whatsapp />
      <Cards />
      {children}
    </div>
  )
}