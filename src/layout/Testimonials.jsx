export const Testimonials = () => {
  return (
    <section>
      <div className="mycontainer">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-600 uppercase">Testimonials</p>
            <h3 className="font-serif text-6xl font-bold text-blue-950">What People Say About Us.</h3>
            <span>...</span>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between">
          <img src="/axon.svg" alt="axon" />
          <img src="/jetstar.svg" alt="jetstar" />
          <img src="/qantas.svg" alt="qantas" />
          <img src="/expedia.svg" alt="expedia" />
          <img src="/alitalia.svg" alt="alitalia" />
        </div>
      </div>
    </section>
  );
};
