import BreadCrumb from "@/components/common/BreadCrumb";
import ProfileInputs from "../components/ProfileInputs";
import UserProfileTabTop from "../components/UserProfileTabTop";
import HeadingOne from "@/components/typography/HeadingOne";

const EditProfile = () => {
  return (
    <section className="space-y-8">
      <div>
        <HeadingOne text="User Management" />

        <BreadCrumb
          route="all-users"
          linkName="Users"
          subRoute={"Edit Profile"}
        />
      </div>

      <UserProfileTabTop />

      <section className="bg-off-white px-4 pt-6 pb-13.5 rounded-lg">
        <ProfileInputs />
      </section>
    </section>
  );
};

export default EditProfile;
