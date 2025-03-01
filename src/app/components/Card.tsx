import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card = ({ type }: { type: string }) => {
  return (
    <div className="p-4 rounded-2xl odd:bg-notoPurple even:bg-notoYellow flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-600">
          2025/02/25
        </span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-gray-500 font-medium text-sm">{type}s</h2>
    </div>
  );
};

export default Card;
