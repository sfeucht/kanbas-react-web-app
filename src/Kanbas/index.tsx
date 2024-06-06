import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route, Navigate } from "react-router";

export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
        <div  className="d-none d-md-block bg-black">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4">
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />}></Route>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:id/*" element={<Courses />} />
            </Routes>
        </div>
        </div>
      </div>
  );
}
  