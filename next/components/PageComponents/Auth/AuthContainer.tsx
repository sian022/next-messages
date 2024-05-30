import Image from "next/image";

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className="flex flex-col items-center w-[400px]">
      <Image
        src="/NextMessagesLogoText.png"
        width={400}
        height={400}
        alt="logo"
      />

      {children}
    </div>
  );
};

export default AuthContainer;
