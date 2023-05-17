import { Link } from "react-router-dom";

function Tabs({to, name}) {
  return (
    <div>
      <Link
        to={to}
        className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all"
      >
        {name}
      </Link>
    </div>
  );
}

export default Tabs;
