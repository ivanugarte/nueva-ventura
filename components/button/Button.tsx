import Link from "next/link";

export default function Button() {
    return (
        <>
            <div className="mt-80">
                <Link href={"/pagina2"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            ESPAÑOL
                        </button>
                </Link>
                <Link href={"/pagina2"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            INGLES
                        </button>
                </Link>
                <Link href={"/pagina2"}>
                        <button className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            FRANCES
                        </button>
                </Link>
            </div>
        </>
    )
}
