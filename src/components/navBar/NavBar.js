import "./NavBar.scss";
import Icon from "../cartWidgets/CardWidgets";
import { Link } from "react-router-dom";
import { VideogameAsset, VideogameAssetOffOutlined } from "@mui/icons-material";

function Navbar() {
  const pages = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Nosotros", url: "/nosotros" },
    { id: 3, title: "Contacto", url: "/contacto" }
  ];

  return (
    <section className="header">
      <Link to={"/"} className="logo">
        <VideogameAsset  />
        Hourglass house
        {/* <FontAwesomeIcon icon={faGamepad} /> Hourglass house{" "} */}
      </Link>
      <nav className="navbar">
        {pages.map((page) => {
          return <Link key={page.id} to={page.url}>{page.title}</Link>;
        })}
        <Link to={"/electronica"}>Electronica</Link>
        <Link to={"/carrito"}><Icon /></Link>
      </nav>
    </section>
  );
}

export default Navbar;
