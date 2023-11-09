import LabourOrganization from "../../../component/Base/Logo/Partners/LabourOrganization";
import SaudiAlFalah from "../../../component/Base/Logo/Partners/SaudiAlFalah";
import SaudiBinding from "../../../component/Base/Logo/Partners/SaudiBinding";
import MinistryAffair from "../../../component/Base/Logo/Partners/MinistryAffair";
import OnuFemmes from "../../../component/Base/Logo/Partners/OnuFemmes";
import OrangeTm from "../../../component/Base/Logo/Partners/OrangeTm";

const PartnersSection = () => {
  return (
    <div className="px-[50px] py-6 bg-[#F9F5FF]">
      <h2 className="text-center">
        <span className="text-[#7F56D9]">250+</span> Partnership with
        enterprises and universities
      </h2>

      <div className="flex justify-around">
        <LabourOrganization />
        <SaudiAlFalah />
        <SaudiBinding />
        <MinistryAffair />
        <OnuFemmes />
        <OrangeTm />
      </div>
    </div>
  );
};

export default PartnersSection;
