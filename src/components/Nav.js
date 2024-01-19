export default function Nav() {
  // responsive React navigation bar with small logo on the left and links on the right using tailwindcss
  return (
    <nav className="py-4 px-4 lg:px-8 border-b border-gray-100 bg-white font-medium w-full uppercase z-50">
      <div className="grid grid-flow-col grid-cols-2 lg:grid-cols-3 justify-between max-w-6xl xl:max-w-5xl mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img className="mr-2 " src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="lg:flex items-center gap-x-4 justify-center hidden">
          <a
            href="/"
            className="hover:scale-105 hover:font-bold hover:text-secondary transform transition-all"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:scale-105 hover:font-bold hover:text-secondary transform transition-all"
          >
            About
          </a>
          <a
            href="/menu"
            className="hover:scale-105 hover:font-bold hover:text-secondary transform transition-all"
          >
            Menu
          </a>
          <a
            href="/contact"
            className="hover:scale-105 hover:font-bold hover:text-secondary transform transition-all"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-x-4 justify-end">
          <a
            href="/reservation"
            className="hover:scale-105 hover:font-bold hover:text-secondary transform transition-all hidden lg:inline"
          >
            Reservation
          </a>
          <a
            href="/order"
            className="bg-secondary text-white px-3 py-1 rounded-2xl transform transition-all hover:scale-105 hover:font-bold text-nowrap hidden min-[350px]:inline"
          >
            Order online
          </a>
          <button className="transform transition-all hover:scale-105 hover:font-bold lg:hidden w-6">
            <img src="hamburger.svg" alt="Open the navigation menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}
