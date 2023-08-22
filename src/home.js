import React from "react";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Sleep from "./components/Sleep";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    function updateSleepData() {
      const currentTime = new Date();
      const startTime = new Date(currentTime);
      startTime.setHours(9, 0, 0, 0);
      const endTime = new Date(startTime);
      endTime.setDate(endTime.getDate() + 1);

      const elapsedMilliseconds = currentTime - startTime;
      const totalMilliseconds = endTime - startTime;

      const badSleep = Math.random() * 100;
      const betterSleep = Math.random() * (100 - badSleep);
      const goodSleep = 100 - (badSleep + betterSleep);

      const containerWidth = 100; // Set the width of the container in percentage
      const badSleepWidth = (badSleep / 100) * containerWidth;
      const betterSleepWidth = (betterSleep / 100) * containerWidth;
      const goodSleepWidth = (goodSleep / 100) * containerWidth;

      document.getElementById("badSleepBarTwo").style.width = `${badSleepWidth}%`;
      document.getElementById(
        "betterSleepBarTwo"
      ).style.width = `${betterSleepWidth}%`;
      document.getElementById(
        "goodSleepBarTwo"
      ).style.width = `${goodSleepWidth}%`;
    }
    updateSleepData(); // Call the function to generate and update data on page load
  }, []);
  return (
    <div className="cover">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div class="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar />
        {/* <!-- ===== Sidebar End ===== --> */}

        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main class="">
            <div class="mx-auto max-w-screen-2xl p-2 md:p-6 2xl:p-10">
              {/* <!-- ===== Content Area Start ===== --> */}
              <div class="mb-6 flex flex-row items-center justify-between gap-3 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent rounded-t-3xl px-2 py-3">
                <h2 class="text-5xl font-bold text-[#1D3E7D]">Beth</h2>

                <div class="relative">
                  <Link class="flex items-center gap-4" to="/profile">
                    <span class="h-16 w-16 rounded-full">
                      <img src="./images/user/user-01.png" alt="User" />
                    </span>
                  </Link>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
                {/* <!-- <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"> --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Heart Rate
                  </span>
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
                        fill="#f47373"
                      ></path>
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        90 bpm
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Blood Pressure
                  </span>
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.588 7.41 6.309 17.69c-.48.48-1.3.37-1.59-.24a8.122 8.122 0 0 1-.82-3.55c-.02-5.52 5.58-10.24 7.48-11.69.37-.28.87-.28 1.23 0 .87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37ZM20.1 13.91c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 0 1-4.81-1.58c-.49-.36-.53-1.08-.1-1.51L17.16 8.84c.47-.47 1.26-.37 1.58.21.82 1.51 1.37 3.15 1.36 4.86Z"
                        fill="#f47373"
                      ></path>
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        143/90
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- ====== Chart One Start --> */}
                <div class="col-span-12 rounded-3xl border border-stroke bg-white p-5 shadow xl:col-span-4 md:hidden">
                  <div class="mx-auto w-full">
                    <div class="my-auto">
                      <h2 class="mb-2 text-xl text-gray-800">Sleep</h2>
                      <div class="mb-4">Sleep Analytics from 9AM to 9AM</div>
                      <div class="relative mb-4 flex h-10">
                        <div id="badSleepBarTwo" class="bar bad"></div>
                        <div id="betterSleepBarTwo" class="bar better"></div>
                        <div id="goodSleepBarTwo" class="bar good"></div>
                      </div>
                      <div class="flex w-full justify-between">
                        <div class="">9am</div>
                        <div class="">9am</div>
                      </div>
                      <div class="mt-4 flex items-end justify-center">
                        <h4
                          id="sleepdata"
                          class="text-title-md font-bold text-black"
                        >
                          10 hr 32 min
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- ====== Chart One End --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Oxygen Level
                  </span>
                  {/* <!-- card logo --> */}
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <circle cx="14" cy="14.5017" r="14" fill="" />
                      <path
                        d="M20.3552 16.3787V12.1508C20.3552 9.44012 18.7637 7.11115 16.5066 6.13103C16.432 5.60702 16 5.20506 15.4782 5.20506H14.8891V4.58914C14.8891 3.98857 14.4235 3.50171 13.8492 3.50171C13.2748 3.50171 12.8092 3.98857 12.8092 4.58914V5.20506H12.2201C12.2153 5.20506 12.2105 5.20536 12.2057 5.20545V5.18766C12.2057 4.94782 12.0191 4.75269 11.7897 4.75269H10.6787C10.4494 4.75269 10.2628 4.94782 10.2628 5.18766V7.3974C10.2628 7.63725 10.4494 7.83237 10.6787 7.83237H11.7897C12.0191 7.83237 12.2057 7.63725 12.2057 7.3974V7.37957C12.2105 7.37961 12.2153 7.37996 12.2201 7.37996H12.8092V8.4399C11.1904 8.9155 10 10.4728 10 12.3155V19.4768C10 21.6961 11.7267 23.5017 13.8492 23.5017C15.9716 23.5017 17.6983 21.6961 17.6983 19.4768V12.3154C17.6983 10.4727 16.508 8.91541 14.8891 8.43986V7.37992H15.4782C15.4951 7.37992 15.512 7.37944 15.5288 7.37857C17.4784 8.00702 18.8993 9.90858 18.8993 12.1507V16.3787C18.5124 16.6328 18.2546 17.0827 18.2546 17.5947C18.2546 18.3862 18.8704 19.0302 19.6273 19.0302C20.3842 19.0302 21 18.3862 21 17.5947C21 17.0828 20.7421 16.6328 20.3552 16.3787Z"
                        class="fill-indigo-600"
                      />
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        99 SpO<sub class="text-xs">2</sub>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Breathing Rate
                  </span>
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <path
                        d="M9.11243 5.3091C8.22336 5.3091 8.1798 5.00504 8.1798 4.42212V1.24012C8.1798 0.832988 7.86522 0.501709 7.4786 0.501709C7.09198 0.501709 6.77739 0.832988 6.77739 1.24012V4.42212C6.77739 5.00504 6.73384 5.3091 5.84453 5.3091C5.77991 5.3091 5.72559 5.36416 5.72559 5.43221V6.66294C5.72559 6.73099 5.78039 6.78605 5.84501 6.78605C6.53963 6.78605 7.08935 6.61833 7.47824 6.28731C7.86725 6.61833 8.41792 6.78605 9.11243 6.78605C9.17704 6.78605 9.23161 6.73099 9.23161 6.66294V5.43221C9.23161 5.36416 9.17704 5.3091 9.11243 5.3091Z"
                        class="fill-indigo-600"
                      />
                      <path
                        d="M6.13327 8.59467C6.05095 7.81669 5.96611 7.01187 5.96611 6.23212C5.96611 4.25314 5.76041 1.62231 3.98347 1.62231C1.82302 1.62231 0.000124979 7.66296 0.000124979 11.456C-0.000712637 11.5757 -0.0139949 14.3977 0.719877 15.1767C0.853656 15.3185 1.0061 15.3906 1.17327 15.3906C1.61493 15.3906 1.8345 15.2129 2.13856 14.9674C2.52003 14.659 3.04223 14.2366 4.36746 13.8343C6.61418 13.1521 6.38073 10.9386 6.13327 8.59467Z"
                        class="fill-indigo-600"
                      />
                      <path
                        d="M14.9572 11.457C14.9572 7.66308 13.1344 1.62231 10.9741 1.62231C9.19693 1.62231 8.9916 4.25314 8.9916 6.23212C8.9916 7.01187 8.90664 7.81656 8.82455 8.59467C8.5771 10.9386 8.3434 13.1521 10.5904 13.8343C11.9154 14.2366 12.4377 14.659 12.819 14.9671C13.1231 15.2129 13.3427 15.3906 13.7843 15.3906C13.9514 15.3906 14.1038 15.3185 14.2376 15.1767C14.9713 14.3977 14.9582 11.5758 14.9572 11.457Z"
                        class="fill-indigo-600"
                      />
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        18 bpm
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 shadow dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Temperature
                  </span>
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <circle cx="14" cy="14.5017" r="14" fill="#F89739" />
                      <path
                        d="M14.3535 17.5362V9.97896C14.3535 9.77402 14.2729 9.57748 14.1295 9.43257C13.9861 9.28765 13.7917 9.20624 13.5889 9.20624C13.3861 9.20624 13.1916 9.28765 13.0482 9.43257C12.9048 9.57748 12.8242 9.77402 12.8242 9.97896V17.5362C12.5931 17.671 12.4009 17.8647 12.2667 18.0978C12.1326 18.331 12.0612 18.5956 12.0596 18.8653C12.0596 19.2752 12.2207 19.6682 12.5075 19.9581C12.7943 20.2479 13.1833 20.4107 13.5889 20.4107C13.9944 20.4107 14.3834 20.2479 14.6702 19.9581C14.957 19.6682 15.1182 19.2752 15.1182 18.8653C15.1165 18.5956 15.0451 18.331 14.911 18.0978C14.7768 17.8647 14.5846 17.671 14.3535 17.5362ZM21.2353 7.66079H20.853V7.27443C20.853 7.06949 20.7725 6.87295 20.6291 6.72803C20.4857 6.58312 20.2912 6.50171 20.0884 6.50171C19.8856 6.50171 19.6911 6.58312 19.5477 6.72803C19.4043 6.87295 19.3237 7.06949 19.3237 7.27443V7.66079H18.9414C18.7386 7.66079 18.5441 7.74221 18.4007 7.88712C18.2573 8.03203 18.1768 8.22858 18.1768 8.43352C18.1768 8.63846 18.2573 8.835 18.4007 8.97991C18.5441 9.12483 18.7386 9.20624 18.9414 9.20624H19.3237V9.5926C19.3237 9.79754 19.4043 9.99409 19.5477 10.139C19.6911 10.2839 19.8856 10.3653 20.0884 10.3653C20.2912 10.3653 20.4857 10.2839 20.6291 10.139C20.7725 9.99409 20.853 9.79754 20.853 9.5926V9.20624H21.2353C21.4381 9.20624 21.6326 9.12483 21.776 8.97991C21.9194 8.835 22 8.63846 22 8.43352C22 8.22858 21.9194 8.03203 21.776 7.88712C21.6326 7.74221 21.4381 7.66079 21.2353 7.66079ZM17.0298 9.97896C17.0298 9.05674 16.6673 8.17228 16.022 7.52017C15.3767 6.86806 14.5014 6.50171 13.5889 6.50171C12.6763 6.50171 11.8011 6.86806 11.1558 7.52017C10.5105 8.17228 10.1479 9.05674 10.1479 9.97896V15.7744C9.61944 16.3796 9.25645 17.1137 9.09486 17.9042C8.93328 18.6947 8.97871 19.5141 9.22664 20.2813C9.47458 21.0486 9.91645 21.7372 10.5085 22.279C11.1006 22.8207 11.8224 23.1969 12.6025 23.3703C12.924 23.4444 13.2516 23.4884 13.5812 23.5016C14.4693 23.5073 15.34 23.2524 16.0875 22.7677C16.8351 22.2831 17.4273 21.5896 17.7925 20.7715C18.1576 19.9533 18.2799 19.0456 18.1445 18.1586C18.0091 17.2716 17.6219 16.4433 17.0298 15.7744V9.97896ZM15.5005 21.2684C15.0977 21.5994 14.6183 21.8212 14.1073 21.9132C13.5962 22.0052 13.0705 21.9642 12.5794 21.7942C12.0884 21.6241 11.6483 21.3306 11.3005 20.9412C10.9527 20.5519 10.7087 20.0794 10.5914 19.5685C10.4733 19.0519 10.4886 18.5134 10.6359 18.0046C10.7832 17.4957 11.0575 17.0338 11.4325 16.663C11.5048 16.5915 11.5623 16.5061 11.6016 16.4119C11.641 16.3178 11.6615 16.2166 11.6619 16.1144V9.97896C11.6619 9.46662 11.8633 8.97525 12.2218 8.61297C12.5803 8.25068 13.0666 8.04716 13.5736 8.04716C14.0806 8.04716 14.5668 8.25068 14.9253 8.61297C15.2838 8.97525 15.4852 9.46662 15.4852 9.97896V16.1144C15.4856 16.2166 15.5061 16.3178 15.5455 16.4119C15.5849 16.5061 15.6423 16.5915 15.7146 16.663C16.0271 16.9681 16.2718 17.3371 16.4321 17.7452C16.5925 18.1534 16.665 18.5914 16.6448 19.0301C16.6245 19.4688 16.512 19.8981 16.3147 20.2894C16.1173 20.6807 15.8398 21.025 15.5005 21.2994V21.2684Z"
                        class=""
                        fill=" #FFFFFF"
                      />
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        98.7 F
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- Card Item Start --> */}
                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">
                    Glucose
                  </span>
                  <div class="my-1.5 flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <circle cx="14" cy="14.5017" r="14" fill="#53C5EA" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="-5 -4 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.04536 16.0469C9.38412 16.0469 12.0907 13.3403 12.0907 10.0016V3.30631C12.0907 1.75734 10.8351 0.501709 9.28613 0.501709H2.8046C1.25563 0.501709 0 1.75734 0 3.30631V10.0016C0 13.3403 2.70661 16.0469 6.04536 16.0469Z"
                          fill="black"
                        />
                        <path
                          d="M6.90914 14.3198H5.18188V19.5016H6.90914V14.3198Z"
                          fill="white"
                        />
                        <path
                          d="M3.21458 9.13828H8.8761C9.2206 9.13828 9.49986 8.85903 9.49986 8.51453V2.853C9.49986 2.50851 9.2206 2.22925 8.8761 2.22925H3.21458C2.87008 2.22925 2.59082 2.50851 2.59082 2.853V8.51453C2.59082 8.85903 2.87008 9.13828 3.21458 9.13828Z"
                          fill="#ECF0F1"
                        />
                        <path
                          d="M4.5564 6.27932C4.5564 5.45706 6.04518 3.30176 6.04518 3.30176C6.04518 3.30176 7.53396 5.45706 7.53396 6.27932C7.53396 7.10158 6.86744 7.76811 6.04518 7.76811C5.22292 7.76811 4.5564 7.10158 4.5564 6.27932Z"
                          fill="#D35400"
                        />
                      </svg>
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        106 mg/dl
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}

                {/* <!-- Card Item Start --> */}

                <div class="w-44 rounded-3xl border border-stroke bg-white py-6 px-5 dark:border-strokedark dark:bg-boxdark sm:w-52">
                  <span class="text-base font-semibold sm:text-xl">Weight</span>
                  <div class="my-1.5   flex h-10 w-10 items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="14 3 28 29"
                    >
                      <circle cx="28" cy="14.5017" r="14" fill="#F89739" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="32"
                        viewBox="-3 -5 28 30"
                      >
                        <path
                          d="M10.1111 0.501709H3.88889C1.55556 0.501709 0 2.10171 0 4.50171V12.5017C0 14.9017 1.55556 16.5017 3.88889 16.5017H10.1111C12.4444 16.5017 14 14.9017 14 12.5017V4.50171C14 2.10171 12.4444 0.501709 10.1111 0.501709ZM11.3322 5.68571L9.63667 8.48571C9.59 8.55771 9.51222 8.61371 9.43444 8.62171C9.41889 8.62171 9.40333 8.62171 9.39556 8.62171C9.32556 8.62171 9.25556 8.59771 9.20111 8.54971C7.94889 7.40571 6.06667 7.40571 4.81444 8.54971C4.75222 8.60571 4.66667 8.63771 4.58111 8.62171C4.49556 8.60571 4.41778 8.55771 4.37889 8.48571L2.68333 5.68571C2.59 5.56571 2.61333 5.40571 2.72222 5.30171C5.15667 3.06971 8.83556 3.06971 11.2778 5.30171C11.3867 5.40571 11.41 5.56571 11.3322 5.68571Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </svg>
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <h4 class="text-title-md font-bold text-black ">
                        124 lbs
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Item End --> */}
              </div>

              <div class="my-5 space-y-5 items-center">
                {/* <!-- ====== Chart One Start --> */}
                <Sleep />
                {/* <!-- ====== Chart One End --> */}

                {/* <!-- ====== Chart Two Start --> */}
                <Events />
                {/* <!-- ====== Chart Two End --> */}

                {/* <!-- ====== Table One End --> */}
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

export default Home;
