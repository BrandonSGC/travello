export const Header = () => {
  return (
    <header className="py-10 bg-right-top bg-no-repeat bg-contain bg-header">
      <div className="mycontainer">
        <div className="flex items-center justify-between mb-28">
          <div className="w-40">
            <img src="/TravelloLogo.png" alt="Logo" />
          </div>
          <nav>
            <ul className="flex gap-12">
              <li>
                <a
                  className="px-4 py-2 hover:bg-light-beige hover:rounded-lg"
                  href="#"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 hover:bg-light-beige hover:rounded-lg"
                  href="#"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 hover:bg-light-beige hover:rounded-lg"
                  href="#"
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 hover:bg-light-beige hover:rounded-lg"
                  href="#"
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 hover:bg-light-beige hover:rounded-lg"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 border border-black rounded-md hover:bg-light-beige"
                  href="#"
                >
                  Sign up
                </a>
              </li>
              <select className="bg-transparent cursor-pointer" name="" id="">
                <option value="ENG">EN</option>
                <option value="ESP">ES</option>
              </select>
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-orange-600 uppercase">
              Best destinations around the world
            </p>
            <h1 className="font-serif font-bold text-7xl text-blue-950">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="font-medium text-gray-600">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-10">
              <button className="px-6 py-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
                Find out more
              </button>
              <div className="flex items-center gap-6">
                <img className="w-14" src="play.svg" alt="play" />
                <p className="font-medium text-gray-600">Play Demo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img className="absolute w-28 top-6 left-6" src="/plane.svg" alt="woman" />
            <img className="absolute right-16" src="/woman.svg" alt="woman" />
            <img className="absolute right-6 bottom-4 w-28" src="/plane.svg" alt="woman" />
          </div>
        </div>
      </div>
    </header>
  );
};
