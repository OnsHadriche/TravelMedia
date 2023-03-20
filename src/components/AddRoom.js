import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { GrAddCircle } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import RoomAndGuests from "./RoomGuest";
import "../styles/Addroom.css";
function AddRooms(props) {
  // const [numRoom, setNumRoom] = useState(1);
  const [addComponents, setAddComponent] = useState([{ numberRoom: 1 }]);
  const [command, setCommand] = useState([])

  const [dataFromChild, setDataFromChild] = useState(null);
  // const [addComponents, setAddComponent] = useState([
  //   <RoomAndGuests numberRoom={numRoom} />,
  // ]);
  const handleDataFromChild = (dataAdult, dataChildren)=>{
    setDataFromChild(dataAdult,dataChildren)
  }
  const handleClickAdd = () => {
    setAddComponent((prev) => [
      ...prev,
      { numberRoom: addComponents.length + 1 },
    ]);
    setCommand((prev)=>[
      ...prev,
      {nbAdult:dataFromChild.dataAdult,nbChild: dataFromChild.dataChildren}
    ])
    sendToDetailsHotel()
  };
  // const handleClickAdd = () => {
  //   setNumRoom((prevRoom) => prevRoom + 1);
  //   // if (numRoom !== 1) {
  //   setAddComponent((prev) => [
  //     ...prev,
  //     <RoomAndGuests numberRoom={numRoom + 1} />,
  //   ]);
  //   // }
  // };
  const handleClickCancel = () => {
    if (addComponents.length > 1) {
      setAddComponent((prevRooms) => {
        prevRooms.pop();
        return [...prevRooms];
      });
    }
  };
  const sendToDetailsHotel = ()=>{
    props.onDataHotel(command)
  }
  useEffect(() => {
    console.log("welcom");
  }, []);
  console.log(command)

  return (
    <div className="row ">
      <div className="col ">
        {addComponents.map((room, index) => (
          <>
            <RoomAndGuests numberRoom={room.numberRoom} key={index} onData = {handleDataFromChild}/>
          </>
        ))}
      </div>
      <div className="d-flex col mt-5 justify-content-center btn-add-delete">
        {" "}
        <button className="btn-add" onClick={handleClickAdd}>
          <span className="p-2 add-style">Add room</span>
          <i className="bi bi-plus-circle icon-add" style={{fontSize:30 }}></i>
       
        </button>
        <button className="ms-4 btn-delete" onClick={handleClickCancel}>
          <span className="p-2 cancel-style">Cancel</span>
          <i class="bi bi-x-circle icon-cancel"style={{fontSize:30 }}></i>
         
        </button>
      </div>
    </div>
  );
}

export default AddRooms;
