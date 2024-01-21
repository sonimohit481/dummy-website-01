import { useLoaderData } from "react-router-dom";

function Github() {
  const data: { followers: number; avatar_url: string } = useLoaderData() as {
    followers: number;
    avatar_url: string;
  };

  console.log("🚀 ~ Github ~ data:", data);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sonimohit481");
  return response.json();
};
