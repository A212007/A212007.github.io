import React from "react";
// import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="cover" >
      <div class="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar />

        {/* <!-- ===== Content Area Start ===== --> */}
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar />

          {/* <!-- ===== Main Content Start ===== --> */}
          <main class="pt-10 sm:px-5">
            <div class="h-full rounded-t-3xl bg-white">
              <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-between items-center">
                  <div class="">
                    <h2 class="text-3xl font-bold text-[#1D3E7D]">Profile</h2>
                    <p class="text-gray-600">Manage your information</p>
                  </div>

                  <div>
                    <Link
                      to="/edit-profile"
                      class="rounded-lg bg-gray-400 px-4 py-1.5 text-xl text-white"
                    >
                      Edit
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
                  <h1 class="font-bold text-black">Name</h1>
                  <p class="" id='Profile_name'>Sophia Thomas</p>
                </div>

              
                <div class="pt-5">
                  <h1 class="font-bold text-black">Email</h1>
                  <p class="" id='Profile_mail'>sophia.thomas@mirakare.com</p>
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Phone</h1>
                  <p class="" id='Profile_number'>07587425048</p>
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Timezone</h1>
                  <p class="" id='Profile_timezone'>Central Standard Time (GMT -6)</p>
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Gender</h1>
                  <p class="" id='Profile_gender'>Female</p>
                </div>

                <div class="pt-5">
                  <h1 class="font-bold text-black">Location</h1>
                  <p class="" id='Profile_location'>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</p>
                </div>
                <div class="pt-5">
                  <h1 class="font-bold text-black">Qualification</h1>
                  <p class="" id='Profile_qualification'>Masters in Care Giving</p>
                </div>
                <div class="pt-5">
                  <h1 class="font-bold text-black">Age</h1>
                  <p class="" id='Profile_age'>34</p>
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

export default Profile;
