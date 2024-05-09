import MobileNav from "../../banking/components/MobileNav";
import Sidebar from "@/componenets/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Wolf', lastName:'Botha' };

  return (
    <main className="flex h-screen w-ffull font-inter">
      <Sidebar user={loggedIn }

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
          <div>
            <MobileNav user={loggedIn}
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}