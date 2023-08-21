import React from "react";
import { useSidebar } from "../context/sidebarcontext";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <header class="z-999 flex w-full  bg-black/10 drop-shadow-1 dark:bg-boxdark/80 dark:drop-shadow-none">
        <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
          <div class="flex items-center gap-2 sm:gap-4">
            {/* <!-- User Area --> */}
            <div class="relative">
              <a class="flex items-center gap-4" href="#">
                <span class="h-12 w-12 rounded-full">
                  <img src="./images/user/user-01.png" alt="User" />
                </span>
              </a>
            </div>
            {/* <!-- User Area --> */}

            <a
              class="flex h-12 w-12 flex-shrink-0 items-center justify-center"
              href="index.html"
            >
              <img src="./images/logo/logo-single.png" alt="Logo" />
            </a>
          </div>

          <div class="flex items-center gap-3">
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              class="z-99999 block rounded-sm p-1.5 lg:hidden"
              onClick={toggleSidebar}
            >
              <span class="relative block h-6 w-6 scale-125 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
