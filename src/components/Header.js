import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-blue-500 p-2 shadow-lg">
      <div className="mr-auto flex items-center bg-amber-400">
        <Link href="/" className="text-decoration-none text-black h3 my-2">
          Mariame
        </Link>
      </div>
      <div>
        <Link href="login">
          <button className="btn mr-2">Se connecter</button>
        </Link>
        <Link href="register">
          <button className="btn ">S&apos;inscrire</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
