import React from "react";

export const UserInfo = ({ formData, setFormData }) => {

  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form class="was-validated">
              <input
                className="form-control mb-2  mt-2 "
                type="text"
                required
                id="validationTextarea"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                }}
              />
              <div class="invalid-feedback">First Name is required</div>
              <input
                className="form-control mb-2  mt-2"
                type="text"
                required
                id="validationTextarea"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
              />
              <div class="invalid-feedback">Last Name is required</div>
              <input
                className="form-control mb-2  mt-2"
                type="email"
                required
                id="validationTextarea"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <div class="invalid-feedback">email is required</div>
              <input
                className="form-control mb-2  mt-2"
                type="text"
                placeholder="Age"
                required
                id="validationTextarea"
                value={formData.age}
                onChange={(e) => {
                  setFormData({ ...formData, age: e.target.value });
                }}
              />
              <div class="invalid-feedback">age is required</div>
              <input
                className="form-control mb-2  mt-2"
                type="text"
                placeholder="Height"
                required
                id="validationTextarea"
                value={formData.height}
                onChange={(e) => {
                  setFormData({ ...formData, height: e.target.value });
                }}
              />
              <div class="invalid-feedback">height is required</div>
              <h6 className="mt-3">Gender</h6>
              <div className="d-flex">
                <div className="form-check">
                  <input
                    id="validationFormCheck3"
                    required
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => {
                      setFormData({ ...formData, gender: e.target.value });
                    }}
                  />
                  <label className="pe-2" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  {" "}
                  <input
                    className="form-check-input"
                    type="radio"
                    id="validationFormCheck3"
                    required
                    name="gender"
                    value="Female"
                    onChange={(e) => {
                      setFormData({ ...formData, gender: e.target.value });
                    }}
                  />
                  <label className="pe-2" for="female">
                    Female
                  </label>
                  <div class="invalid-feedback">gender is required</div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <form class="was-validated">
              <input
                className="form-control mt-2 mb-2 "
                type="text"
                required
                id="validationTextarea"
                placeholder="Middle name"
                value={formData.middleName}
                onChange={(e) => {
                  setFormData({ ...formData, middleName: e.target.value });
                }}
              />
              <div class="invalid-feedback ">middle name is required</div>
              <input
                className="form-control mb-2 mt-2"
                type="text"
                required
                id="validationTextarea"
                placeholder="Mobile No"
                value={formData.mNob}
                onChange={(e) => {
                  setFormData({ ...formData, mNob: e.target.value });
                }}
              />
              <div class="invalid-feedback">mobile no is required</div>
              <input
                className="form-control mb-2 "
                type="date"
                required
                id="validationTextarea"
                placeholder="Birthday"
                value={formData.birthday}
                onChange={(e) => {
                  setFormData({ ...formData, birthday: e.target.value });
                }}
              />
              <div class="invalid-feedback">date is required</div>

              <select
                className="form-select"
                required
                aria-label="select example mb-2   mt-2"
                onChange={(e) => {
                  setFormData({ ...formData, bloodGroup: e.target.value });
                }}
                value={formData.bloodGroup}
              >
                <option value="">--Blood group--</option>

                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O+">O+</option>
              </select>
              <div class="invalid-feedback">blood group is required</div>
              <input
                className="form-control mb-2  mt-2"
                type="text"
                placeholder="Weight"
                required
                id="validationTextarea"
                value={formData.weight}
                onChange={(e) => {
                  setFormData({ ...formData, weight: e.target.value });
                }}
              />
              <div class="invalid-feedback">weight is required</div>
              <h6 className="mt-2">Marital Status</h6>
              <div className="d-flex mobile-view">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="validationFormCheck3"
                    required
                    name="marital status"
                    value="Single"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        maritalStatus: e.target.value,
                      });
                    }}
                  />
                  <label className="pe-2" for="single">
                    Single
                  </label>
                </div>
                <div class="form-check">
                  {" "}
                  <input
                    className="form-check-input"
                    type="radio"
                    id="validationFormCheck3"
                    required
                    name="marital status"
                    value="Married"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        maritalStatus: e.target.value,
                      });
                    }}
                  />
                  <label className="pe-2" for="married">
                    Married
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="validationFormCheck3"
                    required
                    name="marital status"
                    value="Divorced"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        maritalStatus: e.target.value,
                      });
                    }}
                  />
                  <label className="pe-2" for="divorced">
                    Divorced
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="validationFormCheck3"
                    required
                    name="marital status"
                    value="Widoved"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        maritalStatus: e.target.value,
                      });
                    }}
                  />
                  <label className="pe-2" for="widoved">
                    Widoved
                  </label>
                  <div class="invalid-feedback">marital status required</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
