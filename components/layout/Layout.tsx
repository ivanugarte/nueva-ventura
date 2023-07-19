import Button from "../button/Button"
import Cards from "../cards/Cards"
import Whatsapp from "./whatsapp/Whatsapp"



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