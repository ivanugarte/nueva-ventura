import Link from "next/link";
import Image from 'next/image'

import { Layout } from "../components/layout/Layout";

export default function Promocion() {
  return (
    <>
      <div className="">
      <Image
          className='rounded shadow-slate-900'
          src='/img/logobv.jpg'
          alt="Workflow"
          height={700}
          width={600}
          priority
        />
        <Image
          className='rounded shadow-slate-900'
          src='/img/promocion.jpeg'
          alt="Workflow"
          height={700}
          width={500}
          priority
        />

        <h2 className="fixed mt-80 text-center promocion">

        </h2>
        <Link href={"/"}>
        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full">
          VOLVER
        </button>
      </Link>
    </div >
    </>
  )
}