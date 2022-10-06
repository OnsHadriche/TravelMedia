import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import "../styles/services.css";
function Service() {
  const tabService = [
    {
      icon: <FaSearchLocation />,
      title: "Find unique experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis",
    },
    {
      icon: <BsFillCalendarDateFill />,
      title: "Flexible Booking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis",
    },
    {
      icon: <HiOutlineCurrencyDollar />,
      title: "Best prices and offers ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis",
    },
    // {
    //   icon: <MdOutlineHomeWork />,
    //   title: "Create a Travel Agency ",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis",
    // }
  ];
  return (
    <div className="body-card">
      {tabService.map((el) => (
        <div className="card-service ">
          <div className="card-icon">{el.icon}</div>
          <div>
            <div className="card-title">
              <div>{el.title}</div>
            </div>
            <div className="card-description">{el.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
