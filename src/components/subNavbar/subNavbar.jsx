import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function SubNavBar() {
  const buttonStyle = {
    margin: "10px",
    padding: "4px",
    color: "green",
    fontWeight: "700",
    textDecoration: "none",
  };

  return (
    <div className="d-flex">
      <Link to="/produse/copii">
        <Button variant="link" style={buttonStyle}>
          Produse pentru Copii
        </Button>
      </Link>

      <Link to="/produse/adulti">
        <Button variant="link" style={buttonStyle}>
          Produse pentru Adulti
        </Button>
      </Link>

      <Link to="/produse/naturiste">
        <Button variant="link" style={buttonStyle}>
          Produse Naturiste
        </Button>
      </Link>

      <Link to="/produse/vitamine">
        <Button variant="link" style={buttonStyle}>
          Vitamine
        </Button>
      </Link>

      <Link to="/produse/deSlabit">
        <Button variant="link" style={buttonStyle}>
          Produse de Slabit
        </Button>
      </Link>

      <Link to="/produse/deIngrijire">
        <Button variant="link" style={buttonStyle}>
          Produse de frumusete si ingrijire
        </Button>
      </Link>
    </div>
  );
};
