import React from "react";
import Events from "./components/Events";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Calendar = () => {
  return (
    <div>
      {" "}
      <div class="flex h-screen overflow-hidden cover">
        {/* <!-- ===== Content Area Start ===== --> */}
        <Sidebar />
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Main Content Start ===== --> */}
          <Header />
          <main>
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div class="mx-auto max-w-7xl">
                {/* <!-- Breadcrumb Start --> */}
                <div class="mb-6 flex flex-row items-center justify-between gap-3">
                  <h2 class="text-5xl font-bold text-gray-900">Calendar</h2>

                  <nav>
                    <ol class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        class="fill-white dark:fill-[#1D3E7D]"
                      >
                        <path
                          d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4 10.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                          class="fill-white dark:fill-[#1D3E7D]"
                        ></path>
                      </svg>
                    </ol>
                  </nav>
                </div>
                {/* <!-- Breadcrumb End -->
                 */}
                <div class="flex flex-row justify-between py-3">
                  <div class="flex items-center justify-center text-gray-900 space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="#ffffff"
                        d="M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 010-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
                      ></path>
                    </svg>

                    <span class="text-medium text-xl"> Febuary 10 2023 </span>
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32 "
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM8.5 14.498c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.2-.16.33-.21.36-.15.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29ZM12 14.499c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.2-.16.33-.21.36-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29ZM15.5 14.499c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21l-.12-.15a.757.757 0 0 1-.09-.18.636.636 0 0 1-.06-.18c-.01-.07-.02-.14-.02-.2 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18-.03.05-.08.1-.12.15-.19.18-.45.29-.71.29ZM8.5 18c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM12 18c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.37-.37 1.05-.37 1.42 0 .09.09.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM15.5 18c-.26 0-.52-.11-.71-.29a.933.933 0 0 1-.21-.33.995.995 0 0 1-.08-.38c0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM20.5 9.84h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V8.5c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75V17c0 3.65-2.1 5.75-5.75 5.75ZM8 4.25c-2.86 0-4.25 1.39-4.25 4.25V17c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V8.5c0-2.86-1.39-4.25-4.25-4.25H8Z"
                        fill="#ffffff"
                      ></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32 "
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* <!-- ====== Calendar Section Start --> */}
                <div class="w-full max-w-full overflow-hidden rounded-3xl bg-white shadow dark:bg-boxdark">
                  <table class="w-full">
                    <thead>
                      <tr class="grid grid-cols-7 rounded-t-sm bg-primary text-gray-900">
                        <th class="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Sunday </span>
                          <span class="block lg:hidden"> Sun </span>
                        </th>
                        <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Monday </span>
                          <span class="block lg:hidden"> Mon </span>
                        </th>
                        <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Tuesday </span>
                          <span class="block lg:hidden"> Tue </span>
                        </th>
                        <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Wednesday </span>
                          <span class="block lg:hidden"> Wed </span>
                        </th>
                        <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Thursday </span>
                          <span class="block lg:hidden"> Thur </span>
                        </th>
                        <th class="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Friday </span>
                          <span class="block lg:hidden"> Fri </span>
                        </th>
                        <th class="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                          <span class="hidden lg:block"> Saturday </span>
                          <span class="block lg:hidden"> Sat </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <!-- Line 1 --> */}
                      <tr class="grid grid-cols-7">
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            1
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            2
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            3
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            4
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            5
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            6
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            7
                          </span>
                        </td>
                      </tr>
                      {/* <!-- Line 1 -->
        <!-- Line 2 --> */}
                      <tr class="grid grid-cols-7">
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            8
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            9
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            10
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            11
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            12
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            13
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            14
                          </span>
                        </td>
                      </tr>
                      {/* <!-- Line 2 -->
        <!-- Line 3 --> */}
                      <tr class="grid grid-cols-7">
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            15
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            16
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            17
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            18
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            19
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center rounded-xl bg-bodydark1 px-2 text-center text-[12px] font-medium text-black dark:text-black sm:text-lg">
                            20
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            21
                          </span>
                        </td>
                      </tr>
                      {/* <!-- Line 3 -->
        <!-- Line 4 --> */}
                      <tr class="grid grid-cols-7">
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            22
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            23
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            24
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            25
                          </span>
                          {/* <!-- <div class="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
        <span class="group-hover:text-primary md:hidden">
          More
        </span>
        <div
          class="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
          <span class="event-name text-sm font-semibold text-black dark:text-gray-900">
            App Design
          </span>
          <span class="time text-sm font-medium text-black dark:text-gray-900">
            25 Dec - 27 Dec
          </span>
        </div>
      </div> --> */}
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            26
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            27
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            28
                          </span>
                        </td>
                      </tr>
                      {/* <!-- Line 4 -->
        <!-- Line 5 --> */}
                      <tr class="grid grid-cols-7">
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            29
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            30
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            31
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            1
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            2
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            3
                          </span>
                        </td>
                        <td class="ease relative flex h-12 cursor-pointer items-center justify-center border border-stroke p-2 transition duration-500 hover:bg-gray-200 md:h-25 md:p-6 xl:h-31">
                          <span class="flex items-center justify-center text-center text-[12px] font-medium text-black dark:text-gray-900 sm:text-lg">
                            4
                          </span>
                        </td>
                      </tr>
                      {/* <!-- Line 5 --> */}
                    </tbody>
                  </table>
                </div>
                {/* <!-- ====== Calendar Section End --> */}
              </div>
            </div>

            <div class="px-5 pb-5">
              {/* <!-- EVENTS  --> */}
              <Events />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== -->
      </div> */}
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default Calendar;
