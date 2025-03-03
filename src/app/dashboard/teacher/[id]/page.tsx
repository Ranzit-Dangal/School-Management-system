import Announcement from "@/app/components/Announcement";
import BigCalendar from "@/app/components/BigCalendar";
import Performance from "@/app/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherpage = () => {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-notoSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/* USER IMAGE */}
            <div className="w-1/3">
              <Image
                src="/johncena.png"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* USER CARD DETAIL */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">John Cena</h1>
              <p className="text-sm text-gray-500">
                John Felix Anthony Cena was born on April 23, 1977 in West
                Newbury, Massachusetts to Carol Cena and John Joseph Cena.
              </p>
              <div className="flex items-center gap-2 justify-between flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/blood.png"} alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/date.png"} alt="" width={14} height={14} />
                  <span>March 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/mail.png"} alt="" width={14} height={14} />
                  <span>cena@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/phone.png"} alt="" width={14} height={14} />
                  <span>98 98111</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDs */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={"/singleBranch.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white p-4 rounded-md h-[800px]">
          <h1 className="font-semibold">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4  rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-notoSkyLight" href={"/"}>
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-notoPurpleLight" href={"/"}>
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-notoYellowLight" href={"/"}>
              Teacher&apos;s lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={"/"}>
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-notoSkyLight" href={"/"}>
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherpage;
