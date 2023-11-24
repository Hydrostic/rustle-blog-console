import { IconEye, IconMessage, IconTextCaption, IconUsers } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";
export default function StatisticBar(){
    const statisticItems = [{
        title: "总用户数",
        num: 11690,
        tend: 1.2,
        icon: <IconUsers />
      }, {
        title: "文章数",
        num: 115690,
        icon: <IconTextCaption />
      }, {
        title: "页面浏览",
        num: 121560,
        tend: 1.2,
        icon: <IconEye />
      }, {
        title: "评论数",
        num: 115690,
        tend: -1.2,
        icon: <IconMessage />
      }]
    return (

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {
            statisticItems.map(entry => (
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                  {React.cloneElement(entry.icon, { className: 'flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400' })}
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        {entry.title}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                        {entry.num.toString().replace(/(?=(\B\d{3})+$)/g, ",")}
                      </h3>
                      {entry.tend ? (
                        <span className={classNames("inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full",
                          entry.tend > 0 ? "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100" : "bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100"
                        )}>
                          
                          <svg className="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                          <span className="inline-block text-xs font-medium">
                            {entry.tend}%
                          </span>
                        </span>
                      ) : null}

                    </div>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
    )
}