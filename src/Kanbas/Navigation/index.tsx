import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa6";
import { HiMiniBeaker } from "react-icons/hi2";
import { useLocation } from "react-router";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    return (
      <div id="wd-kanbas-navigation" className="nav list-group rounded-0">
        <a id="wd-neu-link" target="_blank" 
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0">
          <img src="/images/NEU.png" width="75px" /> </a>

        <a id="wd-account-link" href="#/Kanbas/Account"
        className={`list-group-item text-center border-0
                    ${pathname.includes("Account") ? "text-danger bg-white" : "text-white bg-black"} `}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </a>

        <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
          className={`list-group-item text-center border-0
                      ${pathname.includes("Dashboard") ? "text-danger bg-white" : "text-white bg-black"}`}>
          <AiOutlineDashboard className="fs-1 text-danger" /><br />
          Dashboard</a>

        <a id="wd-course-link" href="#/Kanbas/Courses"
        className={`list-group-item text-center border-0
        ${pathname.includes("Courses") ? "text-danger bg-white" : "text-white bg-black"} `}>
        <LiaBookSolid className="fs-1 text-danger"  /><br />
        Courses </a>

        <a id="wd-calendar-link" href="#/Kanbas/Calendar"
        className={`list-group-item text-center border-0
        ${pathname.includes("Calendar") ? "text-danger bg-white" : "text-white bg-black"} `}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar</a>

        <a id="wd-inbox-link" href="#/Kanbas/Inbox"
        className={`list-group-item text-center border-0
        ${pathname.includes("Inbox") ? "text-danger bg-white" : "text-white bg-black"} `}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox</a>

        <a id="wd-labs-link" href="#/Labs"
        className={`list-group-item text-center border-0
        ${pathname.includes("Labs") ? "text-danger bg-white" : "text-white bg-black"} `}>
        <HiMiniBeaker className="fs-1 text-danger" /><br />
        Labs</a>
      </div>
  );}
  