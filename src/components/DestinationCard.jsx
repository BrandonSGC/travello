export const DestinationCard = ({ image }) => {
  return (
    <>
      <div className="h-[400px] w-[300px] overflow-hidden shadow rounded-3xl m-auto">
        <img className="object-cover h-[70%]" src={image} alt="satelite" />

        <div className="p-4 font-semibold text-gray-500 bg-white">
          <div className="flex items-center justify-between">
            <p className="my-2 text-center">Rome, Italy</p>
            <span>$5,42k</span>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4" src="/navigation.svg" alt="navigation" />
            <p className="text-gray-600">{"10 Days Trip"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
