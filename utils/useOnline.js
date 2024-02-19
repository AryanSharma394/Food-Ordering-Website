import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setonline] = useState(true);

  useEffect(() => {
    const handleonline = () => {
      setonline(true);
    };
    const handleoffline = () => {
      setonline(false);
    };
    //  By removing the parentheses, 
    // / you ensure that you are passing
    // /  references to the functions handleOnline
    // and handleOffline rather than executing them immediately.

    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);

    return () => {
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleoffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
