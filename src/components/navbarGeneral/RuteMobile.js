import { LinkCostumMobile, LogoDrop, RuteMobile } from "./Navbar.style";

export default function Rute({ rute, logo }) {
  return (
    <RuteMobile>
      {rute?.map((ruta, index) => (
        <LinkCostumMobile to={ruta.ruta} key={ruta + index}>
          {ruta.name}
        </LinkCostumMobile>
      ))}
      <LogoDrop src={logo} alt="Logo" />
    </RuteMobile>
  );
};
