import { SearchOutlined } from "@ant-design/icons";
import WeCodeLogo from "../../../component/Base/WeCodeLogo";
import DropDown from "../../../component/Base/DropDown";
import Button from "../../../component/Base/Button";

const NavBar = () => {
  return (
    <header className="px-[50px] py-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-8 items-center">
          <div className="flex space-x-6">
            <WeCodeLogo />
            <div className="border border-solid border-[#D0D5DD] rounded-lg flex justify-between space-x-5 items-center pl-3.5">
              <div className="flex space-x-2 py-2.5">
                <SearchOutlined />
                <div className="text-[#667085]">Want to learn ?</div>
              </div>
              <DropDown />
            </div>
          </div>

          <div className="flex space-x-6 text-[#7A3781] font-semibold">
            <div>Courses</div>
            <div>For Trainers</div>
            <div>Become a Host</div>
          </div>
        </div>

        <div className="flex space-x-5 font-semibold items-center">
          <div className="text-[#7A3781]">Sign In</div>
          <Button name="Create your account" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
