import Navbar from "../../components/navbar/Navbar";
import StaffLeft from "../../components/staff/staffLeft/StaffLeft";
import StaffRight from "../../components/staff/staffRight/StaffRight";
import StaffSelect from "../../components/staff/staffSelect/StaffSelect";

const Staff = () => {
  return (
    <div className="staff">
      <Navbar />
      <div className="flex">
        <StaffLeft />
        <StaffRight />
        {/* <StaffSelect /> */}
      </div>
    </div>
  );
};

export default Staff;
