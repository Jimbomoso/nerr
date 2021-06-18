import Link from "next/link";
import "tailwindcss/tailwind.css";
import Container from "../components/container";

export default function Header() {
  return (
    <Container>
      {/* <div class="hidden lg:block">
        <ul class="inline-flex">
          <li class="-mb-px mr-1">
            <Link href="/">
              <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                {" "}
                Home{" "}
              </a>
            </Link>
          </li>
          <li class="mr-1">
            <Link href="/about">
              <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                About
              </a>
            </Link>
          </li>
          <li class="mr-1">
            <Link href="/events">
              <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                Events
              </a>
            </Link>
          </li>
          <li class="mr-1">
            <a
              class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
              href="/events"
            >
              History
            </a>
          </li>
        </ul>
      </div> */}
      <nav>
        <div class="container mx-auto px-6 py-2 flex justify-between items-center">
          <a class="font-bold text-2xl lg:text-4xl" href="#">
            NERR
          </a>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li>
                <a class="px-4 font-bold" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link href="/events">
                <a class="px-4 hover:text-gray-800">
                  Events
                </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                <a class="px-4 hover:text-gray-800">
                  About
                </a>
                </Link>
              </li>
              <li>
                <a class="px-4 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}
