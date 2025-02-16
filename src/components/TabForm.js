import React, { useState } from "react";
import { Tabs } from "../config/TabConfig";

const TabForm = () => {
  const [formData,setFormData] = useState({
    name:'',
    age:'',
    email:'',
    interests:[],
    theme:'dark'
  })
  const [activeTab, setActiveTab] = useState(0);
  const [error,setError] = useState({})

  const TabContainer = Tabs[activeTab].component;
  const handlePrevTabs = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleNextTabs = () => {
    if(Tabs[activeTab].validate(formData,setError)){
    setActiveTab((prev) => prev + 1);
    }
  };
  const handleFormSubmit = () =>{
    console.log("formData",formData);
    
  }
  return (
    <div className="p-2">
      <div className="flex">
        {Tabs.map((t, i) => {
          return (
            <div
              key={i}
              className={`${
                activeTab === i ? "bg-green-400 text-white rounded-bl-none" : ""
              } border border-black m-1 p-1 rounded-md cursor-pointer`}
            >
              <div
                onClick={() => {
                  setActiveTab(i);
                }}
              >
                {t.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-2 border border-black rounded-md min-h-48 w-11/12">
        <TabContainer formData={formData} setFormData={setFormData} error={error}/>
      </div>
      <div className="flex ">
        {activeTab > 0 && (
          <button
            className="mx-2 border border-gray-300 rounded-sm m-1 p-1"
            onClick={handlePrevTabs}
          >
            Prev
          </button>
        )}
         {activeTab === Tabs.length - 1 && (
        <div>
          <button className="bg-green-400 text-white rounded-md m-1 p-1" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      )}
        {activeTab < Tabs.length - 1 && (
          <button
            className="mx-2 border border-gray-300 rounded-sm m-1 p-1"
            onClick={handleNextTabs}
          >
            Next
          </button>
        )}
      </div>
     
    </div>
  );
};

export default TabForm;
