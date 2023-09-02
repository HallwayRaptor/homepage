import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode;
  activePage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage }) => {
  return (
    <div>
      <Navbar activePage={activePage} />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;