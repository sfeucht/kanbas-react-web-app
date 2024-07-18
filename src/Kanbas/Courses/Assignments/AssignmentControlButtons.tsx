import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

// import { deleteAssignment } from "./reducer";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";

import * as client from "./client"; 

export default function AssignmentControlButtons(assignId : any) {
  // const dispatch = useDispatch(); 
  console.log("button", assignId); 

  // TODO fix bug where for some reason assignId is A101 inside this helper 
  const deleteButton = () => {
    console.log("id", assignId); 
    client.deleteAssignment(assignId);
  }

  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
      <FaTrash className="text-danger me-2 mb-1"
      data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/>
      <DeleteModal dialogTitle="Delete Assignment?" deleteFunc={deleteButton} />
    </div>
);}

