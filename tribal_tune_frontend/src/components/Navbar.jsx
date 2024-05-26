import { UserProvider, useUser } from "../lib/context/user";

export const Navbar = () => {
  const user = useUser();

  return (
    <div class="relative w-full bg-white  py-2">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div class="inline-flex items-center space-x-2">
          <a href="/" class="font-bold text-xl">
            Tribal Tunes
          </a>
        </div>
        <div class="hidden lg:block ">
          <ul class="inline-flex space-x-12 ">
            <li>
              <a
                href="/"
                class="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/instruments"
                class="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Instruments
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block">
          <div className="rounded-md bg-amber-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {" "}
            {user.current ? (
              <>
                <span>{user.current.email}</span>
                <button
                  type="button"
                  onClick={() => {
                    console.log(user);
                    user.logout();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <a href="/login">Login</a>
            )}
          </div>
        </div>
      </div>
    </div>

    // <nav>
    //   <a href="/">Home</a>
    //   <a href="/instruments">Instruments</a>
    //   <div>
    //     {user.current ? (
    //       <>
    //         <span>{user.current.email}</span>
    //         <button type="button" onClick={() => {
    //           console.log(user)
    //           user.logout()
    //         }}>
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <a href="/login">Login</a>
    //     )}
    //   </div>
    // </nav>
  );
};
