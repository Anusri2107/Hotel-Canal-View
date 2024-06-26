import "./App.css";
import ServicesAndFacilities from "./Screens/ServicesAndFacilities";
import RestaurantAndBar from "./Screens/RestaurantAndBar";
import BanquetsAndLeisureArea from "./Screens/BanquetsAndLeisureArea";
import ContactUs from "./Screens/ContactUs";
import Rooms from "./Screens/Rooms";
import About from "./Screens/About";
import Home from "./Screens/Home";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/ScrollToTop";
import Policies from "./Screens/Policies";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route
          path="/services&facilities"
          element={<ServicesAndFacilities />}
        />
        <Route path="/restaurant&bar" element={<RestaurantAndBar />} />
        <Route
          path="/banquets&leisurearea"
          element={<BanquetsAndLeisureArea />}
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "white",
            border: "1px solid var(--color5)",
            color: "var(--color1)",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <ScrollToTop />
    </>
  );
}
