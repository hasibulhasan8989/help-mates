import Extra from "./ExtraSection/Extra";
import NeedNow from "./NeedNow/NeedNow";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      
      <NeedNow></NeedNow>
      <Extra></Extra>
    </div>
  );
};

export default HomePage;
