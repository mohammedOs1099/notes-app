import Loding from "../Components/Loding";
import useNotesDitails from "../hooks/use-note-ditails";

export default function Ditails() {
  const { record, loding, error } = useNotesDitails();

  return (
    <>
      <Loding error={error} loding={loding}>
        {record ? (
          <div>
            <h1 className=" text-center text-success shadow shadow-sm p-2  mb-3 ">
              {record?.title}
            </h1>
            <p className=" ditails-p shadow shadow-sm p-3 text-success   ">
              {record?.description}
            </p>
          </div>
        ) : null}
      </Loding>
    </>
  );
}
