import Link from "next/link";
import DarkmodeSwitch from "./DarkmodeSwitch";

export default function Header() {
  return (
    <header>
      <div className="fixed left-0 top-0 w-screen z-20 bg-white">
        <nav
          id="navbar-top"
          className="flex flex-col items-start justify-start z-20"
        >
          <span className="grid grid-cols-3  lg:grid-cols-6 items-center justify-start gap-x-4 px-4 pt-3 pb-0 w-full ">
            <Link href="/">
              <h2 className="col-start-1 row-start-1 col-span-3 lg:col-span-1 font-super text-xl lg:text-xl">
                Joel Järvi
              </h2>
            </Link>

            <span className="col-start-3 lg:col-start-6 col-span-1 row-start-1">
              <DarkmodeSwitch />
            </span>

            <nav
              id="desktop-menu-links"
              className="hidden lg:flex col-start-4 row-start-1 col-span-3 gap-16 items-baseline justify-start w-full"
            >
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl font-super">
                  Projects
                </div>
                <ul tabIndex={0} className="dropdown-content menu z-1 -mt-2">
                  <Link href="/">
                    <li className="text-xl font-super -ml-2">Index</li>
                  </Link>
                  <Link href="/">
                    <li className="text-xl font-super -ml-2">Other</li>
                  </Link>
                </ul>
              </div>
              <h2 className="font-super text-xl">Info</h2>
              <h2 className="font-super text-xl">Github</h2>
            </nav>
          </span>
          {/* <div className="divider divider-neutral divider-end mt-0 -mb-2 px-4"></div> */}
        </nav>
      </div>
      <div className="fixed left-0 bottom-0 w-screen z-20">
        <nav
          id="desktop-floating footer"
          className="hidden lg:flex flex-col items-start justify-baseline z-20 pb-2 bg-white"
        >
          <span className="grid grid-cols-6 items-baseline gap-x-4 px-4 pt-3 pb-0 w-full">
            <Link href="/admin">
              <h2 className="col-start-1 font-super text-xl">Admin</h2>
            </Link>
            <span className="col-start-4 col-span-2 flex items-baseline gap-x-2 justify-start">
              <div className="dropdown dropdown-top dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl font-super">
                  Social Media
                </div>
                <ul tabIndex={0} className="dropdown-content menu z-1 -mb-2">
                  <Link href="/">
                    <li className="font-super text-xl -ml-2"> Instagram</li>
                  </Link>
                  <Link href="/">
                    <li className="font-super text-xl -ml-2"> LinkedIn</li>
                  </Link>
                </ul>
              </div>
            </span>
          </span>
        </nav>
        <nav
          id="mobile-navbar-bottom"
          className="flex flex-col items-start justify-baseline z-20 lg:hidden bg-white"
        >
          <span className="grid grid-cols-3 gap-x-4 px-4 pt-2 pb-2 w-screen">
            <h2 className="col-start-1 font-super text-xl">Projects</h2>
          </span>
          {/* <div className="divider divider-neutral divider-end mt-0 mb-0 px-4"></div> */}
          <span className="grid grid-cols-3 gap-x-4 px-4 pb-4 w-screen">
            <h2 className="col-start-1 font-super text-xl">About</h2>
            <h2 className="col-start-2 font-super text-xl">Contact</h2>
            <h2 className="col-start-3 col-span-2 font-super text-xl">
              Social Media
            </h2>
          </span>
        </nav>
      </div>
    </header>
  );
}
