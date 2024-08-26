import { FromHeader } from "../components/FormHeader";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="bg-white sm:w-[670px] rounded-xl pb-5">
        <FromHeader />
        {children}
      </div>
    </div>
  );
};
