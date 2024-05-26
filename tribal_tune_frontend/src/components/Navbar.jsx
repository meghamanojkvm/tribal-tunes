import { UserProvider, useUser } from "../lib/context/user";

export const Navbar= () => {
    const user = useUser();
  
    return (
      <nav>
        <a href="/">Home</a>
        <a href="/instruments">Instruments</a>
        <div>
          {user.current ? (
            <>
              <span>{user.current.email}</span>
              <button type="button" onClick={() => {
                console.log(user)
                user.logout()
              }}>
                Logout
              </button>
            </>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </nav>
    );
  }