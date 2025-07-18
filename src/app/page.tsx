import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-center items-center flex flex-col h-screen bg-black">
      <Link href={"/dashboard/admin"}>
        <button className="px-8 py-3 border-2 border-black rounded-full bg-red-800 text-slate-200">
          Press........ when you are ready!!!
        </button>
      </Link>
    </div>
  );
}
