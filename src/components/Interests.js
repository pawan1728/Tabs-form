import React from "react";

const Interests = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev,
       interests: e.target.checked ?
        [...prev.interests, e.target.name] :
         prev.interests.filter((i)=>i !== e.target.name)
     }));
  };
  console.log(formData.interests);
  
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            onChange={handleInputChange}
            checked={formData?.interests?.includes("Music")}
          />
          Music
        </label>
      </div>
      <div>
        
        <label>
          <input
            type="checkbox"
            name="Cricket"
            onChange={handleInputChange}
            checked={formData?.interests?.includes("Cricket")}
          />
          Cricket
        </label>
      </div>
      <div>
        
        <label>
          <input
            type="checkbox"
            name="Tracking"
            onChange={handleInputChange}
            checked={formData?.interests?.includes("Tracking")}
          />
          Tracking
        </label>
      </div>
    </div>
  );
};

export default Interests;
