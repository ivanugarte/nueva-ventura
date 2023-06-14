import About from "../components/about/About";
import Advantage from "../components/advantage/Advantage";
  import { Layout } from "../components/layout/Layout";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>    
    
    <Layout>
    {/* <Slider deviceType="desktop" /> */}
    {/* <PanelSip /> */}
    <About />
    <Advantage />
  </Layout>
           </>
  )
}
