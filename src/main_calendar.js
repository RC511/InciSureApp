import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./utils/calendar";
import cn from "./utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./main_calendar.css";
import {BsPersonCircle} from "react-icons/bs";

function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	let now = dayjs().format("ddd, MMMM D YYYY");
	return (
		
		<div className="flex gap-10 sm:w-1/2 mx-auto h-screen items-center flex-col calendar-container">
			

			<div className="flex w-96 h-0 flex date-header">
					 <span>{now}</span>
			</div>
			
			<div className="w-96 h-224 ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 mt-4">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="font-sans text-center h-10 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="font-sans p-2 text-center h-15 grid place-content-center text-s border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-red-600 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			
			<div className="h-96 w-96 sm:px-13 flex flex-col schedule-container">
				<h1 className="font-semibold h-2 m-0">
					Schedule for {selectDate.toDate().toDateString()}
				</h1>
				<p className="text-gray-400 text-base mt-4">No appointment made on the specified date</p>
				<div className="doctor-name mt-4">
					 <BsPersonCircle size={25}/><span> &nbsp;Dr. Lee Yeu Hann</span>
				</div>
				<p className="appointment-text">No upcoming appointment</p>

				
			</div>

		</div>
	);
}
export default Calendar