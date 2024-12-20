"use client";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  ChatIcon,
  GroupChatIcon,
  SettingIcon,
} from "@/components/icon";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 h-full bg-primary text-white flex flex-col items-center py-4">
      {/* Navigation container with responsive width */}
      <div className="w-[50px] md:w-[60px] flex flex-col gap-6 p-2.5 justify-between h-full">
        {/* Logo */}
        <div>
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Logo"
            />
          </div>

          {/* Navigation items */}
          <ul className="flex flex-col items-center space-y-4">
            <li
              className={
                "hover:bg-background rounded side-nav-icon-btn " +
                (pathname === "/"
                  ? "side-nav-icon-btn-active"
                  : "side-nav-icon-btn ")
              }
            >
              <Link href="/" className="block text-center p-3">
                <HomeIcon className="side-nav-icon" />
              </Link>
            </li>
            <li
              className={
                "hover:bg-background rounded side-nav-icon-btn " +
                (pathname === "/chat"
                  ? "side-nav-icon-btn-active"
                  : "side-nav-icon-btn ")
              }
            >
              <Link href="/chat" className="block text-center p-3">
                <ChatIcon className="side-nav-icon" />
              </Link>
            </li>
            <li
              className={
                "hover:bg-background rounded side-nav-icon-btn " +
                (pathname === "/group-chat"
                  ? "side-nav-icon-btn-active"
                  : "side-nav-icon-btn ")
              }
            >
              <Link href="/group-chat" className="block text-center p-3">
                <GroupChatIcon className="side-nav-icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-center space-y-4">
            <li
              className={
                "hover:bg-background rounded side-nav-icon-btn " +
                (pathname === "/setting"
                  ? "side-nav-icon-btn-active"
                  : "side-nav-icon-btn ")
              }
            >
              <Link href="/setting" className="block text-center p-3">
                <SettingIcon className="side-nav-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
