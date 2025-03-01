import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex p-4 justify-between items-center">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICONS AND USERS */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="rounded-full w-7 h-7 flex items-center justify-center bg-white cursor-pointer">
          <Image src="/message.png" alt="message icon" width={20} height={20} />
        </div>
        <div className="rounded-full w-7 h-7 flex items-center justify-center bg-white hover:cursor-pointer">
          <Image
            src="/announcement.png"
            alt="announcement icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col">
          <span className="leading-3 text-sm font-medium">Notorious</span>
          <span className="text-gray-500 text-sm text-right text-[10px]">
            Admin
          </span>
        </div>
        {/* PROFILE */}
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
