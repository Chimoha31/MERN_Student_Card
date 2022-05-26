import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import Header from "./Header";

const StudentsCardList = () => {
  const [studentsList, setStudentsList] = useState([]);

  axios.get()

  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>

        
        {/* ------------------------------------------------------------- */}
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>
        <ul className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg">
          <li className="flex flex-col items-center py-2 px-0">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg"
              alt="student"
              className="w-48 h-48 rounded-full inline-block"
            />
          </li>
          <li>
            <label>【Name】</label>
            <h4>Rihanna Fenty</h4>
          </li>
          <li>
            <label>【Email】</label>
            <p>rihanna0220@fenty.com</p>
          </li>
          <li>
            <label>【Phone】</label>
            <p>123-456-7890</p>
          </li>
          <li>
            <label>【College】</label>
            <p className="mb-0">Cornerstone</p>
          </li>
          <li className="flex justify-end gap-3">
            <p> ✍🏼</p>
            <p> 🗑</p>
          </li>
        </ul>
        {/* ---------------------------------------------- */}
      </div>
    </Fragment>
  );
};

export default StudentsCardList;
