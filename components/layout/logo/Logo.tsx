import Image from 'next/image'

export default function Logo() {

    return (
        <Image
            src="/img/logobv.jpg"
            alt="Workflow"
            height={300}
            width={300}
            priority
        />
    )
}