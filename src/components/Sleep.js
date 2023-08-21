import React from "react";
import { useEffect } from "react";

const Sleep = () => {
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

      document.getElementById("badSleepBar").style.width = `${badSleepWidth}%`;
      document.getElementById(
        "betterSleepBar"
      ).style.width = `${betterSleepWidth}%`;
      document.getElementById(
        "goodSleepBar"
      ).style.width = `${goodSleepWidth}%`;
    }
    updateSleepData(); // Call the function to generate and update data on page load
  }, []);
  return (
    <div>
      <div class="col-span-12 rounded-3xl border border-stroke bg-white p-5 shadow xl:col-span-4 hidden md:block">
        <div class="mx-auto w-full">
          <div class="my-auto">
            <h2 class="mb-2 text-xl text-gray-800">Sleep</h2>
            <div class="mb-4">Sleep Analytics from 9AM to 9AM</div>
            <div class="relative mb-4 flex h-10">
              <div id="badSleepBar" class="bar bad"></div>
              <div id="betterSleepBar" class="bar better"></div>
              <div id="goodSleepBar" class="bar good"></div>
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
    </div>
  );
};

export default Sleep;
