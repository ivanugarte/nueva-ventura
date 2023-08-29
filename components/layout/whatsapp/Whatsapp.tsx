import Image from "next/image";

export default function Whatsapp() {

  return (
    <>
        <div
          id="whatsapp"
          className="block fixed w-20 h-36 right-2 bottom-2.5 z-10"
        >
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=56944083761"
              target="_SEJ"
              rel="noreferrer"
            >
              <Image
                src="/img/btnWhatsapp.png"
                priority
                alt="..."
                width="50"
                height="50"
              />
            </a>
            <a
            className="pt-28"
              href="https://twitter.com/home"
              target="_SEJ"
              rel="noreferrer"
            >
              <Image
                src="/img/Twitter.png"
                priority
                alt="..."
                width="50"
                height="50"
              />
            </a>
            <a
              href="https://www.instagram.com/buenaventura_2022/?hl=es-la"
              target="_SEJ"
              rel="noreferrer"
            >
              <Image
                src="/img/Instagram.png"
                priority
                alt="..."
                width="50"
                height="50"
              />
            </a>
  
          </div>
        </div>
    </>
  );
}
