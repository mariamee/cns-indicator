import Link from 'next/link'
import Image from 'next/image'
import logoImage from '/public/logoImage.jpeg'
const Header = () => {
  return (
    <ul className=" flex flex-col gap-2 lg:flex-row lg:items-center bg-background p-2 shadow-2xl justify-between flex-shrink-0 absolute z-10 w-full">
      <Image src={logoImage} alt="/" width={120} height={80} />
      <div className="mr-auto flex items-center rgba(14,16,119,255)">
        <div className="d-flex text-sky-100/80 font-bold tracking-wide h2 my-2">ONDA Tétouan </div>
        <div className="d-flex text-grey-10/70 font-bold tracking-wide h2 my-2">|CNS Indicator</div>
      </div>

      <Link href="login">
        <button
          className="d-flex text-sky-100  border border-sky-100/40 mx-5
         py-1 pl-2 pr-2 font-semibold shadow-2xl btn mr-2 rounded-lg group-hover:opacity-25"
        >
          Se connecter
        </button>
      </Link>
      <button className="d-flex text-red-800  border border-red-800 mx-2 py-1 pl-2 pr-2 font-semibold shadow-2xl btn mr-2 rounded-lg ">
        Se Déconnecter
      </button>
    </ul>
  )
}

export default Header
