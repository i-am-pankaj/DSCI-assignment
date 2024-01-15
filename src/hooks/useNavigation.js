import { useState } from "react";

const useNavigation = () => {
  const [activeView, setActiveView] = useState("home");

  const activeViewHandler = (e) => {
    setActiveView(e);
  };

  return {
    activeView,
    activeViewHandler,
  };
};

export default useNavigation;
