export const Footer = () => {
  return (
    <footer className="mt-20 mycontainer">
      <div className="grid grid-cols-5 gap-10">
        <div>
          <img src="/TravelloLogo.png" alt="logo" />
          <p className="mt-10 text-sm font-semibold text-gray-500">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-3xl font-bold">Company</h4>
          <ul className="space-y-1 text-xl font-semibold text-gray-500">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-3xl font-bold">Contact</h4>
          <ul className="space-y-1 text-xl font-semibold text-gray-500">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-3xl font-bold">More</h4>
          <ul className="space-y-1 text-xl font-semibold text-gray-500">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <a href="https://facebook.com/" target="_blank">
              <img src="/facebook.svg" alt="facebook" />
            </a>
            <a href="https://instagram.com/" target="_blank">
              <img
                className="size-[55px]"
                src="/instagram.svg"
                alt="instagram"
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img src="/twitter.svg" alt="twitter" />
            </a>
          </div>
          <p className="mt-1 mb-3 text-2xl font-semibold text-center text-gray-500">Discover our App</p>
          <div>
            <div className="grid grid-cols-2 gap-1">
              <a target="_blank" href="https://play.google.com/store">
                <img src="/google-play.svg" alt="" />
              </a>
              <a target="_blank" href="https://www.apple.com/store">
                <img src="/apple-store.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="my-16 text-xl font-semibold text-center text-gray-500">
        All rights reserved @jadoo.co
      </p>
    </footer>
  );
};
