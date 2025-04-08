import Nav from "react-bootstrap/nav";

function Header() {
  return (
    <div className="fixed-top ms-1 me-1">
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">All Foods</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/food/add/">Add Food</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
