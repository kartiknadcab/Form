import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./form.css";
import { NotificationManager } from "react-notifications";
import { AddressDetails } from "./AddressDetails";
import { setUsersdetail } from "./redux/userSlice";
import { Thanku } from "./Thanku";
import { UserInfo } from "./UserInfo";
function Form() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mNob: "",
    email: "",
    birthday: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  dispatch(setUsersdetail({ data: formData }));
  const FormTitles = ["", "", ""];

  const PageDisplay = () => {
    if (page === 0) {
      return <UserInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Thanku />;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="form">
              <div className="progressbar">
                <div class="stepper">
                  <div class="step completed">
                    <div class="step-label"></div>
                    <div class="step-description">User Info</div>
                  </div>
                  {page == 1 || page == 2 ? (
                    <div class="step active">
                      <div class="step-label"></div>
                      <div class="step-description">Address Info</div>
                    </div>
                  ) : (
                    <div class="step">
                      <div class="step-label"></div>
                      <div class="step-description">Address Info</div>
                    </div>
                  )}
                  {page == 2 ? (
                    <div class="step active">
                      <div class="step-label"></div>
                      <div class="step-description">Address Info</div>
                    </div>
                  ) : (
                    <div class="step">
                      <div class="step-label"></div>
                      <div class="step-description">Address Info</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="form-container">
                <div className="header">
                  <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer mt-3 text-center">
                  {page == 0 || page == 1 ? (
                    <>
                      <button
                        className="btn btn-primary me-2"
                        disabled={page == 0}
                        onClick={() => {
                          setPage((currPage) => currPage - 1);
                        }}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          if (
                            page === 0 &&
                            formData.firstName.length > 0 &&
                            formData.lastName.length > 0 &&
                            formData.middleName.length > 0 &&
                            formData.mNob.length > 0 &&
                            formData.birthday.length > 0 &&
                            formData.age.length > 0 &&
                            formData.bloodGroup.length > 0 &&
                            formData.height.length > 0 &&
                            formData.weight.length > 0 &&
                            !formData.gender.cheked
                          ) {
                            setPage((currPage) => currPage + 1);
                          } else if (
                            page === 1 &&
                            formData.addressLine1.length > 0 &&
                            formData.addressLine2.length > 0 &&
                            formData.city.length > 0 &&
                            formData.state.length > 0 &&
                            formData.country.length > 0 &&
                            formData.pinCode.length > 0
                          ) {
                            setPage((currPage) => currPage + 1);
                          } else {
                            NotificationManager.error("please fill are required field!");
                          }
                        }}
                      >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
