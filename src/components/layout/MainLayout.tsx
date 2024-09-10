import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  // Alert before reloading page
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to reload this page? Cart data might be lost.";
      event.preventDefault();
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
