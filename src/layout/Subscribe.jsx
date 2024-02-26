import React from "react";

export const Subscribe = () => {
  return (
    <section className="relative my-20 mycontainer">
      <img className="w-20 absolute top-[-20px] right-[-20px]" src="/navigation-purple.svg" alt="navigation" />
      <div className="rounded-2xl rounded-tl-[100px] bg-purple-50 py-20 space-y-8 bg-[url('/background-subscribe.svg')] bg-no-repeat bg-left-bottom bg-contain ">
        <h4 className="w-4/5 m-auto text-4xl font-bold text-center text-gray-500">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h4>
        <form className="flex items-center justify-center gap-4 m-0">
          <div className="relative flex items-center">
            <img className="absolute w-6 left-4" src="/letter.svg" alt="icon" />
            <input
              className="py-4 pl-12 pr-4 w-[350px] bg-white font-light text-xl"
              type="email"
              placeholder="Your email"
            />
          </div>
          <button className="px-8 py-4 font-medium text-white bg-orange-400 rounded-xl">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
