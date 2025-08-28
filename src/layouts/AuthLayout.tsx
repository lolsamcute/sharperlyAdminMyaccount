import { type ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="flex justify-center lg:justify-between max-md:p-5 font-poppins">
      <div
        className="hidden lg:flex items-center justify-center bg-primary bg-cover bg-no-repeat relative bg-center w-full max-w-[50.83333333%] min-h-screen"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/sharperly/image/upload/v1753783882/Sharperly%20Admin/loginBg_wmk23z.svg"})`,
        }}
      >
        <img
          width={649.78857421875}
          height={706.345703125}
          loading="eager"
          alt="banner_bg"
          src={
            "https://res.cloudinary.com/sharperly/image/upload/v1753783887/Sharperly%20Admin/loginImg_jmocke.svg"
          }
        />
      </div>
      <section
        className={`flex items-center justify-center w-full max-lg:min-h-screen`}
      >
        {children}
      </section>
    </section>
  );
};

export default AuthLayout;
