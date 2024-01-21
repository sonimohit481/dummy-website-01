import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 bg-green-300 py-10 flex justify-center">
        <p className=" font-bold text-5xl">User: {id}</p>
      </div>
    </div>
  );
};

export default User;
