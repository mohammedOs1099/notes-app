import { cloneElement } from "react";
import { Spinner } from "react-bootstrap";

export default function Loding({ loding, error, children }) {
  const elementType = children?.type?.render?.displayName;
  const handelRenderer = () => {
    if (elementType === "Button") {
      const clonElmemt = cloneElement(
        children,
        { disabled: true },
        "loading..."
      );
      return loding ? clonElmemt : children;
    }
    return (
      <>
        {loding ? (
          <div className=" d-flex justify-content-center align-items-center flex-column   ">
            <p className="text-center m-1 " colSpan={3}>
              <span> Loading data Please Wait...</span>
            </p>
            <div>
              <Spinner variant="success" animation="grow" size="sm" />
              <Spinner variant="success" animation="grow" />
            </div>
          </div>
        ) : error ? (
          <div>
            <p className="text-center" colSpan={3}>
              {error}
            </p>
          </div>
        ) : (
          children
        )}
      </>
    );
  };
  return handelRenderer();
}
