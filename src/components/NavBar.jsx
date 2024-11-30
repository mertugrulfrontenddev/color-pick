const NavBar = ({ items }) => {
  return (
    <nav className="navbar bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand text-secondary" href="#">
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
