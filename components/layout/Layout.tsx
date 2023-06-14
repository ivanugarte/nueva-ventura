import Cards from "../cards/Cards"
import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"


export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Whatsapp/>
      <Nav />
      <Cards />
      {children}
      <Footer />
    </>
  )
}