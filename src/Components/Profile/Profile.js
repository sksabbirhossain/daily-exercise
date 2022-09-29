import React from "react";
import "./Profile.css"

const Profile = () => {
  return (
    <div>
      <div>
        <h4 className="m-0">sk sabbir hossain</h4>
        <p>Jessore Khulna</p>
      </div>
      <div className="information">
        <div>
          <p>52kg</p>
          <span>Weight</span>
        </div>
        <div>
          <p>5.11</p>
          <span>Height</span>
        </div>
        <div>
          <p>25</p>
          <span>Age</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
