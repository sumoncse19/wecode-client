import { useState } from "react";
import Button from "../../../component/Base/Button";

const MostPopularCourse = () => {
  const [buttonsData, setButtonsData] = useState([
    { id: 0, name: "All Programme", isRounded: true, isActive: true },
    {
      id: 1,
      name: "Coding",
      isRounded: true,
      isActive: false,
      withoutBg: true,
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 2,
      name: "Digital Marketing",
      isRounded: true,
      isActive: false,
      withoutBg: true,
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 3,
      name: "Business Skills",
      isRounded: true,
      isActive: false,
      withoutBg: true,
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ]);

  const handleActiveButton = (buttonId: number) => {
    const oldSelectedButton = buttonsData.find((button) => button.isActive);
    if (oldSelectedButton) {
      oldSelectedButton.isActive = false;
    }

    const oldButtonData = buttonsData.filter(
      (button) => button.id !== buttonId
    );

    const selectedButton = buttonsData.find((button) => button.id === buttonId);
    if (selectedButton) {
      selectedButton.isActive = true;

      oldButtonData.push(selectedButton);

      oldButtonData.sort((a, b) => {
        return a.id - b.id;
      });

      setButtonsData(oldButtonData);
    }
  };
  return (
    <div
      className="px-[50px] py-20"
      style={{ backgroundImage: "linear-gradient(45deg, #F9F5FF, #e9e3f3c7)" }}
    >
      <h2>Our Most Popular Courses</h2>
      <div className="flex justify-between items-center">
        <div className="text-[#667085] text-xl">
          Join our famous classes, the knowledge provided will definitely be
          useful for you.
        </div>
        <Button name="Demo button" />
      </div>

      <div>
        {/* Category list */}
        <div className="py-6 flex space-x-5">
          {buttonsData.map((button, index) => (
            // <Button key={index} {...button} />
            <Button
              key={index}
              name={button.name}
              isRounded={true}
              bgColor={!button.isActive ? button.bgColor : ""}
              withoutBg={!button.isActive}
              onClick={() => handleActiveButton(button.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularCourse;
