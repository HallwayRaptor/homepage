import Link from "next/link";
import { useRouter } from 'next/router';
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  
  const router = useRouter();
  const activePage = router.pathname.substring(0);

  return (
    <nav className="flex items-center justify-between p-4 font-bold text-zinc-800 drop-shadow-sm backdrop-blur dark:backdrop-blur dark:text-zinc-100 dark:drop-shadow">
      <div
        className={
          activePage === "/"
            ? "underline decoration-pink-500 decoration-2"
            : "hover:underline hover:decoration-pink-500 hover:decoration-2"
        }
      >
        <Link href="/">Home</Link>
      </div>

      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          <li
            className={
              activePage === "/programming"
                ? "underline decoration-emerald-500 decoration-2"
                : "hover:underline hover:decoration-emerald-500 hover:decoration-2"
            }
          >
            <Link href="/programming">Programming</Link>
          </li>
          <li
            className={
              activePage === "/linux"
                ? "underline decoration-cyan-500 decoration-2"
                : "hover:underline hover:decoration-cyan-500 hover:decoration-2"
            }
          >
            <Link href="/linux">Linux</Link>
          </li>
          <li
            className={
              activePage === "/games"
                ? "underline decoration-indigo-500 decoration-2"
                : "hover:underline hover:decoration-indigo-500 hover:decoration-2"
            }
          >
            <Link href="/games">Games</Link>
          </li>
        </ul>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
