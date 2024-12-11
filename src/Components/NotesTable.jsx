import { Table } from "react-bootstrap";
import NotesListItem from "./NotesListItem";
import { memo } from "react";

function NotesTable({ data, deleteNote, isLoggedIn }) {
  return (
    <>
      {data?.length ? (
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "70%" }}>Title</th>
              <th className=" text-center " style={{ width: "10%" }}>
                Edit / Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <NotesListItem
              isLoggedIn={isLoggedIn}
              data={data}
              deleteitems={deleteNote}
            />
          </tbody>
        </Table>
      ) : (
        <h4
          className=" text-danger h5 my-5 d-flex justify-content-center
          align-items-center "
        >
          <p className="text-center"> No Notes Yet!</p>
        </h4>
      )}
    </>
  );
}
export default memo(NotesTable);
