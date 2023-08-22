import React from "react";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="cover">
      <div class="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar />

        {/* <!-- ===== Content Area Start ===== --> */}
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar />

          {/* <!-- ===== Main Content Start ===== --> */}
          <main class="pt-10 sm:px-5">
            <div class="h-full rounded-t-3xl  bg-white">
              <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-between items-center">
                  <div class="">
                    <h2 class="text-3xl font-bold text-[#1D3E7D]">Edit Profile</h2>
                    <p class="text-gray-600">Manage your information</p>
                  </div>

                  <div>
                    <Link
                      to="/profile"
                      class="rounded-lg bg-gray-400 px-4 py-1.5 text-xl text-white">
                      Save
                    </Link>
                  </div>
                </div>

                {/* <!-- Content  --> */}
                <div class="">
                  <h2 class="font-bold text-[#1D3E7D]">Your care recepients</h2>

                  <div class="flex items-center gap-3">
                    <div class="z-10 my-3 h-10 w-10 rounded-full">
                      <img src="./images/user/user-01.png" alt="User" />
                    </div>
                    <div class="my-3 -ml-5 h-10 w-10 rounded-full">
                      <img src="./images/user/user-02.png" alt="User" />
                    </div>
                    <p class="">+3 more</p>
                  </div>
                </div>

                {/* <!-- Details  --> */}
                <div class="pt-5">
                <h1 class="font-bold  text-black">Name</h1>
                <input
                    type="text"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>
              
                <div class="pt-5">
                  <h1 class="font-bold text-black">Email</h1>
                  <input
                    type="email"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Phone</h1>
                  <input
                    type="tel"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Timezone</h1>
                  <input
                    type="datetime-local"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Gender</h1>
                  <input
                    type="text"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Location</h1>
                  <input
                    type="text"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Qualification</h1>
                  <input
                    type="text"
                    class="w-3/4 h-11 rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Age</h1>
                  <input
                    type="number"
                    class="w-3/4 h-11  text-base rounded-xl border px-5 py-4"
                    placeholder="Enter Here"
                  />
                </div>
              </div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default EditProfile;
