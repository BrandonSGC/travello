export const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center shadow rounded-3xl p-14">
      <img className="service-card" src={image} alt="satelite" />
      <p className="my-4 font-semibold text-center">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
