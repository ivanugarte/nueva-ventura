import Cards from "../cards/Cards"
import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"
import Image from 'next/image'



export const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Image
        src="/img/logobv.jpg"
        width={800}
        height={1000}
        alt="Workflow"
        priority
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
        ESPAÑOL
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
        INGLES
      </button> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
        FRANCES
      </button>
      <Image
        src="/img/fondo.jpeg"
        width={800}
        height={1100}
        alt="Workflow"
        priority
      />
      <Whatsapp />
      <Cards />
      {children}

    </div>
  )
}