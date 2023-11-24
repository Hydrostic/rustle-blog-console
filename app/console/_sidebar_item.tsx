"use client"
import classNames from "classnames"
import React from "react"
import { usePathname } from "next/navigation"
interface Entry{
    link?: string,
    icon?: React.ReactElement,
    text: string,
}
export default function SidebarItem({link,icon,text}:Entry) {
    const path = usePathname();
    return (
        <li>
            <a className={classNames("flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600", {
                "bg-gray-100": link && path.includes(link)
            })} href={"/console" + link}>
                {icon && React.cloneElement(icon, { className: 'flex-shrink-0 w-4 h-4' })}
                {text}
            </a>
        </li>
    )
}