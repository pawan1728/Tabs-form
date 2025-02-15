import React from "react";

const Profile = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData((prev)=>({...prev, name: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="enter your name"
          className="border p-1 m-1 rounded-md"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          placeholder="enter your age"
          className="border p-1 m-1 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          placeholder="enter your email"
          className="border p-1 m-1 rounded-md"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Profile;
