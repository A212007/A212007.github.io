import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import JournalEvents from "../components/JuornalEvents";

const Journal = () => {
  const [active, setActive] = useState(1);
  const toggleActive = (index) => {
    setActive(index);
  };
  return (
    <div>
      <div className=""></div>
      <div class="flex h-screen overflow-hidden cover">
        {/* Side Menu  */}
        <Sidebar />
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Navbar */}
          <Navbar />
          <main className="bg-white mt-10 rounded-t-3xl">
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div class="mx-auto max-w-7xl">
                {/* <!-- Breadcrumb Start --> */}
                <div class="mb-6 flex flex-row items-center justify-between gap-3">
                  <h2 class="text-5xl font-bold text-[#1D3E7D]">Journal</h2>

                  <nav>
                    <ol class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        class="fill-[#1D3E7D]"
                      >
                        <path
                          d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4 10.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                          class="fill-[#1D3E7D]"
                        ></path>
                      </svg>
                    </ol>
                  </nav>
                </div>

                {/* Toggle Button  */}
                <div class="flex flex-row gap-5 justify-around items-center py-3">
                  <button
                    onClick={() => toggleActive(1)}
                    className={`font-bold text-2xl ${
                      active === 1 ? "underline" : ""
                    }`}
                    setActive={true}
                  >
                    Notes
                  </button>
                  <button
                    onClick={() => toggleActive(2)}
                    className={`font-bold text-2xl ${
                      active === 2 ? "underline" : ""
                    }`}
                  >
                    Events
                  </button>
                </div>

                {/* Content - Notes and Events */}

                {active === 1 && (
                  <>
                    {/* Notes Wrapper */}
                    <NoteBox
                      profileImage="images/user/user-01.png"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                      numquam similique. Accusamus molestias quaerat laborum. Id, repudiandae
                      rem voluptas voluptatum rerum at accusamus magnam non, blanditiis
                      placeat quia deserunt? Numquam reiciendis animi suscipit quam corrupti
                      non ab ducimus ipsa ea?"
                      time="February 20, 8:12 AM"
                    />
                    <NoteBox
                      profileImage="images/user/user-01.png"
                      image="./images/notes/img-long.jpg"
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                      numquam similique. Accusamus molestias quaerat laborum. Id, repudiandae
                      rem voluptas voluptatum rerum at accusamus magnam non, blanditiis
                      placeat quia deserunt? Numquam reiciendis animi suscipit quam corrupti
                      non ab ducimus ipsa ea?"
                      time="February 20, 8:12 AM"
                    />
                  </>
                )}

                {active === 2 && (
                  <>
                    <JournalEvents />
                  </>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Journal;

const NoteBox = ({ profileImage, description, image, time }) => {
  return (
    <div className="flex gap-3 items-end my-5 ">
      {/* Search Bar  */}
      <div className="bg-gray-200 p-2 ">
        <input type="text" placeholder="Search"/>
      </div>

      <div className="">
        {/* User profile Image  */}
        <div class="flex items-center gap-4">
          <span class="h-10 w-10 rounded-full">
            <img src={`/${profileImage}`} alt="User" />
          </span>
        </div>
      </div>
      <div className="">
        {/* Note Box */}
        <div className="bg-gray-200 flex flex-col gap-1 rounded-y-xl w-96 h-auto p-5 rounded-2xl rounded-bl-none">
          {/* Description and Image  */}
          {image && (
            <div className="">
              <img
                src={`/${image}`}
                alt="Note_Image"
                className="object-contain w-64 h-auto rounded-2xl"
              />
            </div>
          )}
          {description}
        </div>

        {/* Date */}
        <span className="text-sm text-gray-500">{time}</span>
      </div>
    </div>
  );
};
