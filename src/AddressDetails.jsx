import React from "react";

export const AddressDetails = ({ formData, setFormData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form class="was-validated">
              <input
                className="form-control mb-2"
                type="text"
                id="validationFormCheck3"
                required
                placeholder="Address Line 1"
                value={formData.addressLine1}
                onChange={(e) => {
                  setFormData({ ...formData, addressLine1: e.target.value });
                }}
              />
              <div class="invalid-feedback">address line1 is required</div>
              <select
                className="form-select mb-2"
                required
                aria-label="select example mb-1"
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                }}
                value={formData.city}
              >
                <option value="">--City--</option>
                <option value="Pune">Pune</option>
                <option value="Pune">Prayagraj</option>
                <option value="Surat">Surat</option>
              </select>
              <div class="invalid-feedback">city is required</div>
              <select
                className="form-select mb-2"
                required
                aria-label="select example mb-1"
                onChange={(e) => {
                  setFormData({ ...formData, country: e.target.value });
                }}
                value={formData.country}
              >
                <option value="">--Country--</option>

                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Uk">Uk</option>
              </select>
              <div class="invalid-feedback">country is required</div>
            </form>
          </div>
          <div className="col-md-6">
            <form class="was-validated">
              <input
                className="form-control mb-2"
                type="text"
                id="validationFormCheck3"
                required
                placeholder="Address Line 2"
                value={formData.addressLine2}
                onChange={(e) => {
                  setFormData({ ...formData, addressLine2: e.target.value });
                }}
              />
              <div class="invalid-feedback">address line2 is required</div>
              <select
                className="form-select"
                required
                aria-label="select example mb-2"
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });
                }}
                value={formData.state}
              >
                <option value="">--State--</option>
                <option value="Assam">Assam</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Utter Pradesh">Utter Pradesh</option>
              </select>
              <div class="invalid-feedback">state is required</div>
              <input
                className="form-control mt-2 mb-2"
                type="text"
                placeholder="Pin Code "
                id="validationFormCheck3"
                required
                value={formData.pinCode}
                onChange={(e) => {
                  setFormData({ ...formData, pinCode: e.target.value });
                }}
              />
              <div class="invalid-feedback">pin code is required</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
