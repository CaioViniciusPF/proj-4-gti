import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-[#6FA8BF] flex w-full  flex-wrap flex-col  items-center justify-center gap-y-6 gap-x-12  px-4 py-3 text-center md:flex-row md:justify-between  lg:px-8   ">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Caio Vinicius
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#C9F2E3] focus:text-[#C9F2E3]"
          >
            <Link to={"/"}  >
                Home
            </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#C9F2E3] focus:text-[#C9F2E3]"
          >
            <Link to={"/sobre"} className="flex items-center" >
                Sobre Nós
            </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#C9F2E3] focus:text-[#C9F2E3]"
          >
            <Link to={"/contato"} className="flex items-center" >
            Contato
            </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-[#C9F2E3] focus:text-[#C9F2E3]"
          >
            <Link to={"/quiz"} className="flex items-center" >
                Quiz
            </Link>
          </Typography>
        </li>
      </ul>
    </footer>
  );
}