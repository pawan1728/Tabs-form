import React from "react";

const Profile = ({ formData, setFormData,error }) => {
  const handleInputChange = (e) => {
    setFormData((prev)=>({...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          name='name'
          placeholder="enter your name"
          className="border p-1 m-1 rounded-md"
          value={formData.name}
          onChange={handleInputChange}
        />
      {error && <p className="text-red-500">{error.name}</p>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          name="age"
          placeholder="enter your age"
          className="border p-1 m-1 rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={formData.age}
          onChange={handleInputChange}
        />
      {error && <p className="text-red-500">{error.age}</p>}

      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          className="border p-1 m-1 rounded-md"
          value={formData.email}
          onChange={handleInputChange}
        />
      {error && <p className="text-red-500">{error.email}</p>}
      </div>
    </div>
  );
};

export default Profile;
