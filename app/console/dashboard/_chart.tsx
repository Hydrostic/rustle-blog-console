"use client";

import { createChart, ColorType, LineType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

// export const ChartComponent = props => {


// 	return (
// 		<div
// 			ref={chartContainerRef}
// 		/>
// 	);
// };

const initialData = [
    { time: '2018-12-22', value: 32 },
    { time: '2018-12-23', value: 31 },
    { time: '2018-12-24', value: 27 },
    { time: '2018-12-25', value: 27 },
    { time: '2018-12-26', value: 25 },
    { time: '2018-12-27', value: 28 },
    { time: '2018-12-28', value: 25 },
    { time: '2018-12-29', value: 23 },
    { time: '2018-12-30', value: 22 },
    { time: '2018-12-31', value: 22 },
];
export default function Chart() {

    const {
        backgroundColor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {}


    const chartContainerRef = useRef<HTMLDivElement>(null);
    useEffect(
        () => {
            const node = chartContainerRef.current as any
            const handleResize = () => {
                chart.applyOptions({ width: node.clientWidth });
            };

            const chart = createChart(node, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: node.clientWidth,
                height: 300,
                localization: {
                    priceFormatter: (x: number) => Math.trunc(x).toString()
                }
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor, lineType: LineType.Curved });
            newSeries.setData(initialData);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [initialData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );
    return (
        <div className=" bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800 mt-5" >
            <p className="mt-4 ml-5 text-lg">访问量</p>
            <div ref={chartContainerRef} className="m-5" />
        </div>
    )
}