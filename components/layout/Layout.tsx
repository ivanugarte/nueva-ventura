import Button from "../button/Button"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"
import Logo from "./logo/Logo" 

import Image from 'next/image'


export const Layout = ( children :any) => {
  return (
    <div >
      <Logo />
      <Whatsapp />
      <Nav />
      {/* <di v className="fondoLog">sdfsdf</div> */}

        <Image className="mt-40 fixed " 
          src="/img/fondo.jpeg"
          alt="Workflow"
          height={1200}
          width={1800}
          priority
        />
    </div>
  )
}