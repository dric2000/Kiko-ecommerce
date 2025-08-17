import { useNavigate } from "react-router-dom";

const Navbar = ({ userName, numberOfProducts }) => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row gap-28 items-center md:justify-between">
      <div className="flex gap-3 items-center">
        <img src="/myLogo.png " alt="" className="w-15 h-15" />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Kiko</h1>
          <span className="text-[#FFC8BE] text-sm">Gérez vos produits</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 bg-white text-gray-600 p-4 rounded-md">
        <div className="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            className="text-[#FFC8BE]"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          {numberOfProducts > 0 && (
            <span className="absolute -top-2 -right-2 text-gray-200 font-bold text-sm bg-red-400 rounded-full px-2 py-0.5 ">
              {numberOfProducts}
            </span>
          )}
        </div>
        <div className="w-1 h-8 bg-[#FFC8BE]"></div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-icon lucide-user"
            className="text-[#FFC8BE]"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <h2 className="text-xl font-bold"> {userName} </h2>
        </div>
        <div className="w-1 h-8 bg-[#FFC8BE]"></div>
        <div className="flex items-center gap-2">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <h2 className="text-xl font-bold">Déconnexion</h2>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-out-icon lucide-log-out"
            className="text-[#FFC8BE]"
          >
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          </svg>
        </div>
      </div>
      <button className="md:hidden text-[#FFC8BE]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
