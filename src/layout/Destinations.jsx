import { DestinationCard } from "../components";

export const Destinations = () => {
  return (
    <section className="relative my-20 mycontainer">
      <img
        className="absolute bottom-14 right-[-10px] -z-10 h-56"
        src="/background-destinations.svg"
        alt="destinations"
      />
      <h2 className="mb-20 font-serif text-5xl font-bold text-center text-blue-950">
        <span className="block my-3 font-sans text-2xl font-semibold text-gray-600">
          Top Selling
        </span>
        Top Destinations{" "}
      </h2>

      <div className="grid grid-cols-3 gap-10">
        <DestinationCard
          image="rome.jpg"
          location="Rome, Italy"
          price="5,42k"
          days="10"
        />
        <DestinationCard
          image="london.jpg"
          location="London, UK"
          price="4,2k"
          days="12"
        />
        <DestinationCard
          image="europe.jpg"
          location="Full Europe"
          price="15k"
          days="28"
        />
      </div>
    </section>
  );
};
