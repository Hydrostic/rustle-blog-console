
import React from "react";
import StatisticBar from "./_statistic_bar";
import Chart from "./_chart";
import { IconArrowDownLeft, IconArrowUpRight, IconFile, IconMessage2, IconNews, IconPaperclip, IconUserPlus, IconWriting } from "@tabler/icons-react";
export default function Dashboard() {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <StatisticBar />
        <Chart />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800 mt-5 py-4 col-span-3" >
            <p className="mb-2 ml-5 text-lg">最新评论</p>
            <ul className="flex flex-col">
              {
                [...Array(5)].map((item, index) => (
                  <li className="inline-flex py-3 px-6 hover:bg-gray-100 rounded-md mx-2" key={index}>
                    <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800 shadow-md" src="https://web-ace.jp/img/comptiq/contents/632/ATRI_370.jpg" alt="Image Description" />

                    <div className="flex flex-col ml-3 grow">
                      <span className="text-xs text-gray-600">ATRI 评论了:</span>
                      <p className="text-gray-800 text-sm">我是高性能的机器人</p>
                    </div>
                    <span className="text-gray-500 text-sm my-auto">《论atri》</span>


                  </li>
                ))
              }
            </ul>
          </div>
          <div className=" bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800 mt-5 pt-4 col-span-1 flex flex-col" >
            <p className="ml-5 text-lg">服务器状态</p>
            <div className="grid grid-cols-1 place-content-center mt-5 mx-auto">
              <div className="h-32 w-32 relative">
                <svg className="h-full w-full" width="32" height="32" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" stroke-width="2"></circle>
                  <g className="origin-center -rotate-90 transform">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
                  </g>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="flex flex-col text-center">
                    <span>负载</span>
                    <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">72%</span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col mt-3 gap-2 mx-auto">
                <li className="text-sm font-semibold">CPU
                  <div className="flex gap-x-1">
                    {[...Array(7)].map((item, index) => (
                      <div className="w-1.5 rounded-sm h-3 bg-green-400"></div>
                    ))}
                    {[...Array(5)].map((item, index) => (
                      <div className="w-1.5 rounded-sm h-3 bg-gray-200"></div>
                    ))}
                  </div>
                </li>
                <li className="text-sm font-semibold">Mem
                  <div className="flex gap-x-1">
                    {[...Array(7)].map((item, index) => (
                      <div className="w-1.5 rounded-sm h-3 bg-green-400"></div>
                    ))}
                    {[...Array(5)].map((item, index) => (
                      <div className="w-1.5 rounded-sm h-3 bg-gray-200"></div>
                    ))}
                  </div>
                </li>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Network</span>
                  <div className="inline-flex text-sm">
                  <IconArrowUpRight className="text-red-600 w-5"></IconArrowUpRight>
                  1.2KB
                  <IconArrowDownLeft className="text-green-600 w-5"></IconArrowDownLeft>
                  0.8MB
                  </div>
                </div>
              </ul>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}