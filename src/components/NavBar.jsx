const NavBar = ({ items }) => {
  return (
    <nav className="navbar bg-body-tertiary m-">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span>
            {items.filter((item) => item.isComplete).length} tasks completed!
            Remaining tasks:
            {items.length - items.filter((item) => item.isComplete).length}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
