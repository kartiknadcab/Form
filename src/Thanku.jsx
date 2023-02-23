import React from "react";
import { useSelector } from "react-redux";
export const Thanku = () => {
  const { usersDetail } = useSelector(
    (state) => state.detail
  );

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="text-center text-success ">Data Added Succssfully</h3>
          {Object.keys(usersDetail).map((key) => (
                <>
                <div className="border-bottom"  key={key}>
                  <div className="text-center  text-uppercase fw-bolder p-3">
                    {key}: {usersDetail[key]}
                  </div>
                </div>
                </>
              ))} 
          
        </div>
      </div>
    </>
  );
};
