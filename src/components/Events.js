import React from "react";

const Events = () => {
  const events = [
    {
      name: "Murthy",
      title: "This is title one",
      desc: "Descripton is very short here",
      color: "#F9C200",
      date: ["12"],
      time: "11:00",
      month: "man",
    },
    {
      name: "Taher",
      title: "This is title two",
      desc: "description is short but not more short here",
      color: "#F97700",
      date: "30",
      time: "12:00",
      month: "Meb",
    },
    {
      name: "Huzefa",
      title: "This is title three",
      desc: "description is not s long but is is long here more than before",
      color: "#00D9CC",
      date: "21",
      time: "1:00",
      month: "March",
    },
  ];
  return (
    <div>
      <div class="col-span-12 rounded-3xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <h2 class="mb-2 text-xl text-black-2 dark:text-white">Events</h2>

        {events.map((item, index) => {
          return (
            <div key={index} class="my-3 flex rounded-xl border items-center">
              <div class="flex flex-col items-center justify-center rounded-xl border-r-6 border-[#F9C200] bg-[#F9C200]/30 p-2 text-black">
                <span className="font-bold">{item.date}</span>
                <div class="text-[13px] first-letter:capitalize font-semibold">
                  {item.month}
                </div>
                <div class="text-[13px]">{item.time}</div>
              </div>
              <div class="p-2 text-black">{item.desc}</div>
            </div>
          );
        })}

        {/* <div class="my-3 flex rounded-xl border bg-bodydark1">
          <div class="flex flex-col items-center justify-center rounded-xl border-r-6 border-[#F97700] bg-[#F97700]/30 p-2 text-black">
            20
            <div class="text-[13px] font-semibold">Feb</div>
            <div class="text-[13px]">4:00pm</div>
          </div>
          <div class="p-2 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, enim. Odit numquam sit repellat, ullam sequi earum
            maxime quae totam?
          </div>
        </div>

        <div class="my-3 flex rounded-xl border bg-bodydark1">
          <div class="flex flex-col items-center justify-center rounded-xl border-r-6 border-[#00D9CC] bg-[#00D9CC]/30 p-2 text-black">
            20
            <div class="text-[13px] font-semibold">Feb</div>
            <div class="text-[13px]">4:00pm</div>
          </div>
          <div class="p-2 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, enim. Odit numquam sit repellat, ullam sequi earum
            maxime quae totam?
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
