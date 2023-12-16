import React from "react";
import {
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Nav({tema,absoluto}) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const headerAb = absoluto == "1" ? "absolute" : " bg-[#6FA8BF]  ";
  const corTextHeader = tema == "claro" ? "text-blue-gray-900 " : " text-light-blue-50";
    
  const navList = (
    <ul className={`  ${corTextHeader} bg-opacity-50 bg-[#6FA8BF] flex  flex-col items-center gap-2 rounded-md p-1 lg:bg-transparent lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 `}>
      <Typography
        as="li"
        variant=""
        className="p-1 font-normal transition-transform hover:scale-125 focus:scale-125"
      >
        <Link to={"/"} className="flex items-center " >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant=""
        className="p-1 font-normal transition-transform hover:scale-125 focus:scale-125"
      >
        <Link to={"/sobre"} className="flex items-center" >
          Sobre Nós
        </Link>
      </Typography>
      <Typography
        as="li"
        variant=""
        className="p-1 font-normal transition-transform hover:scale-125 focus:scale-125"
      >
        <Link to={"/contato"} className="flex items-center" >
          Contato
        </Link>
      </Typography>
      <Typography
        as="li"
        variant=""
        className="p-1 font-normal transition-transform  hover:scale-125 focus:scale-125"
      >
        <Link to={"/quiz"} className="flex items-center " >
          Quiz
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    
      <header className={`${headerAb} z-10 w-full    rounded-none px-4 py-4  lg:px-8 lg:py-4 `}>
        <div className={` flex  items-center justify-between ${corTextHeader} `}>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-2xl"
          >
           Logo  
          </Typography>
          <div className=" flex items-center gap-4">
            <div className="  hidden lg:block">{navList}</div>
           
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 bg-[#6FA8BF] rounded-md bg-opacity-50"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 bg-[#6FA8BF] rounded-md bg-opacity-50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="absolute z-10 flex justify-end  right-[16px] ">
          {navList}
        </MobileNav>
      </header>
  );
}