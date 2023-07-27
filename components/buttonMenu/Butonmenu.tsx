import Link from "next/link";

export default function Buttonmenu() {
    return (
        <>
            <div className="mt-80">
                <Link href={"/vinos "}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full">
                            VINOS
                        </button>
                </Link>
                <Link href={"/promocion"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            PROMOCIONES 
                        </button>
                </Link>
                <Link href={"/menu"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            ETIQ. PERS.
                        </button>
                </Link>
                <Link href={"/menu"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4 mt-4  ">
                            FOTOS
                        </button>
                </Link>
            </div>
        </>
    )
}
