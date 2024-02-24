export const Header = () => {
  return (
    <header className="py-10 bg-header bg-no-repeat bg-right-top bg-contain">
      <div className="mycontainer">
        <div className="flex justify-between items-center mb-28">
          <div className="w-40">
            <img src="/TravelloLogo.png" alt="Logo" />
          </div>
          <nav>
            <ul className="flex gap-12">
              <li>
                <a
                  className="hover:bg-light-beige hover:rounded-lg py-2 px-4"
                  href="#"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-light-beige hover:rounded-lg py-2 px-4"
                  href="#"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-light-beige hover:rounded-lg py-2 px-4"
                  href="#"
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-light-beige hover:rounded-lg py-2 px-4"
                  href="#"
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-light-beige hover:rounded-lg py-2 px-4"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-light-beige border rounded-md py-2 px-4 border-black"
                  href="#"
                >
                  Sign up
                </a>
              </li>
              <select className="cursor-pointer" name="" id="">
                <option value="ENG">EN</option>
                <option value="ESP">ES</option>
              </select>
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <p className="uppercase text-orange-600 font-bold">
              Best destinations around the world
            </p>
            <h1 className="text-7xl text-blue-950 font-serif font-bold">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="text-gray-600 font-medium">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-10">
              <button className="bg-yellow-500 text-white px-6 py-4 rounded-lg">
                Find out more
              </button>
              <div className="flex gap-6 items-center">
                <img className="w-14" src="play.svg" alt="play" />
                <p className="text-gray-600 font-medium">Play Demo</p>
              </div>
            </div>
          </div>

          <div>
            <img src="/woman.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
