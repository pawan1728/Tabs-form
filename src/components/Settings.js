import React from "react";

const Settings = ({ formData, setFormData }) => {
  const handleThemeChange = (e) => {
    setFormData((prev) => {
      return { ...prev, theme: e.target.name };
    });
  };
  return (
    <div>
      <div>
        <label>dark</label>
        <input
          type="radio"
          checked={formData.theme === "dark"}
          name="dark"
          onChange={handleThemeChange}
        />
      </div>
      <div>
        <label>light</label>
        <input
          type="radio"
          checked={formData?.theme === "light"}
          name="light"
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
};

export default Settings;
