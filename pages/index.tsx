import About from "../components/about/About";
import Advantage from "../components/advantage/Advantage";
import { Layout } from "../components/layout/Layout";
import paisaje from "/img/paisaje.jpeg";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className="fondoPantalla">
        <Layout>
          {/* <Slider deviceType="desktop" /> */}
          {/* <PanelSip /> */}
          <About />
          <Advantage />
        </Layout>
      </div>
    </>
  )
}
