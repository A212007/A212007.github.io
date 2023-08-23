import React from "react";

const JournalEvents = () => {
  const events = [
    {
      name: "Murthy",
      title: "Medication",
      desc: "Gave 10mg Topomax via g-tube",
      color: "#F9C200",
      date: "12",
      time: "11:00 Am",
      month: "jan",
    },
    {
      name: "Taher",
      title: "Toileting",
      desc: "She is a bit constipated",
      color: "#F97700",
      date: "30",
      time: "12:00 Pm",
      month: "feb",
    },
    {
      name: "Huzefa",
      title: "Meals",
      desc: "Breakfast - Cereal with banana",
      color: "#00D9CC",
      date: "21",
      time: "1:00 Pm",
      month: "March",
    },
  ];
  return (
    <div>
      <div class="col-span-12 rounded-3xl bg-white h-screen px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-8">
        {events.map((item, index) => {
          return (
            <div key={index} class="my-3 flex items-center">
              <div class="bg-[#001640] w-screen flex items-center">
                <div class="flex flex-col items-center justify-center bg-[#F89739] p-2 text-black w-20">
                  <span className="font-medium text-white text-2xl">
                    {item.date}
                  </span>
                  <div class="text-[13px] first-letter:capitalize font-semibold">
                    {item.month}
                  </div>
                  <div class="text-[13px]">{item.time}</div>
                </div>
                {/* Event Description */}
                <div className="text-white mx-5 flex items-center gap-2">
                  {/* User Profile Image  */}
                  <div class="flex items-center gap-4">
                    <span class="h-10 w-10 rounded-full">
                      <img src="/images/user/user-03.png" alt="User" />
                    </span>
                  </div>

                  {/* Event Desc */}
                  <div className="flex flex-col">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-gray-200 font-medium">{item.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JournalEvents;
