import HomeHeroGirl from "../../../assets/heroLaptop.svg";
import Button from "../../../component/Base/Button";

const HeroSection = () => {
  return (
    <div className="pl-[50px] relative">
      <div className="flex h-[80vh] items-center">
        <div className="flex flex-col space-y-5 w-1/2">
          <div className="capitalize text-6xl font-bold">
            your <span className="text-purple-primary">platform</span> for{" "}
            <span className="text-purple-primary">in-person learning</span>
          </div>
          <div>
            We provide you with in-person courses in hottest, and most
            profitable skills that anyone can learn in design, development,
            machine learning, and anything related to IT.
          </div>
          <div className="flex space-x-7 mt-4">
            <Button name="Start Learning" />
            <Button name="Explore our courses" withoutBg={true} />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0">
        <img src={HomeHeroGirl} alt="HomeHeroGirl" />
      </div>
    </div>
  );
};

export default HeroSection;
