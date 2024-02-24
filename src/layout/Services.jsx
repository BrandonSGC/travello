import { ServiceCard } from "../components";

export const Services = () => {
  return (
    <section className="my-20 bg-right-top bg-no-repeat bg-[length:150px] bg-services">
      <div className="mycontainer">
        <h2 className="mb-20 font-serif text-5xl font-bold text-center text-blue-950">
          <span className="block my-3 font-sans text-2xl font-semibold text-gray-600">
            Category
          </span>
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <ServiceCard
            image="/satelite.svg"
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <ServiceCard
            image="/plane2.svg"
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
          <ServiceCard
            image="/microphone.svg"
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening."
          />
          <ServiceCard
            image="/customization.svg"
            title="Customization"
            description="We deliver outsourced
            aviation services for
            military customers"
          />
        </div>
      </div>
    </section>
  );
};
