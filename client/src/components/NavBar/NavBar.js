const NavBar = (props) => {
  const { left, center, right } = props;
  return (
    <div className={NavBar}>
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </div>
  );
};
export default NavBar;
