"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="p-4">
      <Link href="/" className={`text-lg font-medium rounded-full py-2 px-4 ${pathname === "/" ? "bg-secondary" : ""}`}>
        Summary
      </Link>
      <Link href="/group-chat" className={`text-lg font-medium rounded-full py-2 px-4 ${pathname === "/group-chat" ? "bg-secondary" : ""}`}>
        Sales
      </Link>
      <Link href="/chat" className={`text-lg font-medium rounded-full py-2 px-4 ${pathname === "/chat" ? "bg-secondary" : ""}`}>
        Chat
      </Link>
    </div>
  );
};

export default Header;
