import { motion } from "framer-motion";
import { Home, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const data = [
  {
    href: "/dashboard",
    icon: <Home size={24} />,
    text: "Home",
  },
  {
    href: "/settings",
    icon: <Settings size={24} />,
    text: "Settings",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <motion.div
        animate={{ width: isOpen ? 250 : 80 }}
        className="h-screen bg-gray-900 text-white p-5 flex flex-col space-y-4 shadow-lg"
      >
        <div className="flex flex-row gap-4 items-center justify-between">
          {isOpen && <h1 className="text-2xl font-bold mb-4">Sidebar</h1>}

          <button onClick={toggleSidebar} className="mb-4 focus:outline-none">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          {data.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              text={item.text}
              isOpen={isOpen}
            />
          ))}
        </nav>
      </motion.div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  text,
  isOpen,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  href: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        to={href}
        className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700"
      >
        {icon}
        {isOpen && <span>{text}</span>}
      </Link>
    </motion.div>
  );
}
