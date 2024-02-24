export const Booking = () => {
  return (
    <section className="my-20">
      <div className="mycontainer">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-5 p-10">
            <p className="text-xl font-semibold text-gray-600">Easy and Fast</p>
            <h3 className="font-serif text-5xl font-bold text-blue-950">
              Book Your Next Trip In 3 Easy Steps
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <img src="/choose-destination.svg" alt="destination" />
                <div>
                  <p className="font-semibold text-gray-600">
                    Choose Destination
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elitsit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/make-payment.svg" alt="payment" />
                <div>
                  <p className="font-semibold text-gray-600">Make Payment</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elitsit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <img src="/reach-airport.svg" alt="airport" />
                <div>
                  <p className="font-semibold text-gray-600">
                    Reach Airport on Selected Date
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elitsit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative flex items-center">
            <div className="flex flex-col gap-3 p-6 shadow-lg rounded-3xl max-w-[400px] m-auto">
              <img src="/Rectangle 17.png" alt="image" />
              <p className="font-semibold">Trip to Greece</p>
              <div className="flex gap-2 font-medium text-gray-500">
                <p className="pr-2 border-r-2 border-gray-400">14-29 June</p>
                <p>by Robbin Johnson</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/leaf.svg" alt="leaf" />
                <img src="/map.svg" alt="map" />
                <img src="/navegation-card.svg" alt="navegation" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 font-medium text-gray-500">
                  <img className="h-4" src="/building.svg" alt="building" />
                  <p>24 people going</p>
                </div>
                <img className="h-4" src="heart.svg" alt="heart" />
              </div>
            </div>

            <div className="absolute bottom-[23%] right-0 flex gap-4 p-4 bg-white rounded-lg shadow">
              <img src="/profile-circle.svg" alt="profile" />
              <div className="w-[70%]">
                <p className="font-medium text-gray-500">Ongoing</p>
                <p className="my-1 text-2xl font-semibold">Trip to Rome</p>
                <p className="mb-1 font-semibold">
                  <span className="font-semibold text-purple-600">40%</span>{" "}
                  completed
                </p>
                <div className="h-1 bg-gray-200 w-[100%] rounded-lg">
                  <div className="rounded-lg h-1 w-[40%] bg-purple-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
