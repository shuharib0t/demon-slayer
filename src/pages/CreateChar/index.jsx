import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import hashiras from "../../assets/hashiras-bg.jpg";
import onis from "../../assets/upper-moons.png";
import { Container, Content } from "./styles";

export function CreateChar() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <h1>CHOOSE YOUR WAY</h1>

        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
      </header>

      <Content>
        <div>
          <h2 className="good">GOOD</h2>
          <Link to="/createhuman">
            <img src={hashiras} alt="good way image" />
          </Link>
        </div>

        <div>
          <h2 className="evil">EVIL</h2>
          <Link to="/createoni">
            <img src={onis} alt="bad way image" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
