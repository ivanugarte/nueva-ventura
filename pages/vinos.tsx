import Link from "next/link";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <div>
        <h2 className="fixed fondoBlanco mt-80 text-center">

          En vinos Buenaventura hemos apostado por lo artesanal, rescatando el origen del vino hecho a mano, de manera orgánica y respetuosa. Con uvas seleccionadas del Valle del Itata, envejecidas en Roble Americano, logramos un ensamble Misión & Cinsault, con suave aroma y sabor, rico en taninos con astringencia moderada, llegando a los 13,5° alc%vol.

          Para mantener la escénica intacta de nuestro vino utilizamos un corcho (Diam) que permite la oxigenación y lenta maduración, complementado con un lacre color bermellón para certificar la calidad.

          Comprometidos con el medio ambiente trabajamos con botellas reutilizadas de 750 ml, las cuales pasan por un proceso exhaustivo de limpieza y esterilización. Contribuyendo con esto a la disminución de la huella de carbono, promoviendo el reciclaje  y comercio circular de nuestra región.

          Lo invitamos a descorchar, descubrir y disfrutar nuestro vino …
          Salud!

        </h2>
        <Link href={"/"}>
          <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full">
            VOLVER
          </button>
        </Link>
      </div>
    </>
  )
}