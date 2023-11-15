import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import Search from "../../components/search/Search";
import { ruteAdmin } from "../../constants/rute";
import Navbar from "../../components/navbarGeneral/Navbar";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import { toast } from "react-toastify";
import { ResponsiveContainer } from "recharts";

const Homepage = () => {
  return (
    <div>
      <Navbar 
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
    
      <Slider></Slider>
      <Newsletter></Newsletter>
      <Footer />
      
    </div>
  );
};

export default Homepage;
