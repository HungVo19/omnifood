import OmnifoodLogo from "../../../assets/img/omnifood-logo.png";
const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="Omnifood logo" src={OmnifoodLogo} />
      <nav className="main-nav">Navigation</nav>
    </header>
  );
};

export default Header;
