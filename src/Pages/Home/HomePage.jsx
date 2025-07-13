import { Helmet } from "react-helmet";
import Extra from "./ExtraSection/Extra";
import NeedNow from "./NeedNow/NeedNow";
import Slider from "./Slider";

const HomePage = () => { 

  return (
    <div>
      <Helmet>
        <title>Home | helpMates</title>
      </Helmet>
      <Slider></Slider>
      
      <NeedNow></NeedNow>
      <Extra></Extra>
    </div>
  );
};

export default HomePage;
