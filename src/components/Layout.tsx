import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;