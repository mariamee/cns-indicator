import Link from 'next/link'
const Header = () => {
  return (
    <div className="d-flex bg-sky-100 p-2 shadow-lg justify-content-start align-items-center">
      <div className="mr-auto flex items-center rgba(14,16,119,255)">
        <div className="d-flex text-slate-50 font-bold tracking-wide h2 my-2">
          ONDA Tétouan - CNS Indicator -
        </div>
      </div>

      <Link href="login">
        <button className="d-flex text-slate-50  border border-slate-50/40 mx-5 py-1 pl-2 pr-2 font-semibold shadow-2xl btn mr-2 rounded-lg ">
          Se connecter
        </button>
      </Link>
      <button className="d-flex text-red-800  border border-red-800 mx-2 py-1 pl-2 pr-2 font-semibold shadow-2xl btn mr-2 rounded-lg ">
        Se Déconnecter
      </button>
    </div>
  )
}

export default Header
