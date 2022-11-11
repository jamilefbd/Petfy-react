import { Wrapper, Container, Content } from "./styles";

// images
import logo from "../../assets/img/logo.svg";
import partners from "../../assets/img/partners.png";

import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Content>
          <section>
            <img src={logo} alt="logo" />
            <div className="text">
              <h2>Sobre</h2>
              <p>
                Nullam purus magna, euismod vitae mauris eu, feugiat interdum
                sem. Praesent ut magna eget mauris lacinia luctus. Morbi mollis
                quam non mollis lacinia. Maecenas maximus velit sed tincidunt
                lobortis. In pretium vehicula lacus, in tristique ligula
                hendrerit quis.{" "}
              </p>
            </div>
          </section>

          <section>
            <b>Apoiadores</b>
            <div className="partners">
              <img src={partners} alt="partners" />
            </div>
          </section>
        </Content>
        <button onClick={() => navigate("/login")}>
          <AiOutlineClose size="1.5em" />
        </button>
      </Container>
    </Wrapper>
  );
};

export default About;
