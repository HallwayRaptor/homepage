

const Sidebar = () => {
  const categories = ["Music", "Programming", "Linux", "Games", "Work"];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl">My Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mt-2">
              <a href={`#${category}`} className="hover:text-blue-500">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;