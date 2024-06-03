import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";
import b3 from "../assets/b3.avif";

export const Login = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-amber-950 sm:text-4xl text-center mt-[-4rem]">
              Log in
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-amber-950"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-amber-950"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-amber-950 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-amber-900"
                    onClick={() => {
                      console.log(user);
                      user.login(email, password);
                      if (user) {
                        navigate("/instruments");
                      }
                    }}
                  >
                    Login
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover mt-[-2rem]"
            src={b3}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

// <section>
//   <h1>Login or register</h1>
//   <form>
//     <input
//       type="email"
//       placeholder="Email"
//       value={email}
//       onChange={(event) => {
//         setEmail(event.target.value);
//       }}
//     />
//     <input
//       type="password"
//       placeholder="Password"
//       value={password}
//       onChange={(event) => {
//         setPassword(event.target.value);
//       }}
//     />
//     <div>
//       <button
//         classNameName="button"
//         type="button"
//         onClick={() => {
//           console.log(user)
//           user.login(email, password)
//         }}
//       >
//         Login
//       </button>
//       {/* <button
//         classNameName="button"
//         type="button"
//         onClick={() => user.register(email, password)}
//       >
//         Register
//       </button> */}
//     </div>
//   </form>
// </section>
