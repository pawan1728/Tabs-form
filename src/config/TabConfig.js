import Profile from "../components/Profile";
import Interests from "../components/Interests";
import Settings from "../components/Settings";
export const Tabs = [
  {
    name: "Profile",
    component: Profile,
    validate: (formData, setError) => {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const err = {};
      if (formData.name.length < 2) {
        err.name = "pls enter a name";
      }
      if (formData.age < 18) {
        err.age = "pls enter a valid age";
      }
      if (!regex.test(formData.email)) {
        err.email = "pls enter a email";
      }
      setError(err);
      return err.name || err.age || err.email ? false : true;
    },
  },
  {
    name: "Interest",
    component: Interests,
    validate: (formData, setError) => {
      const err = {};
      if (formData.interests.length === 0) {
        err.interests = "pls select atleast a interest";
      }
      setError(err);
      return err.interests ? false : true;
    },
  },
  {
    name: "Setting",
    component: Settings,
  },
];
