import Particles from "../Components/Particles";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particles />
      </div>
      <div className="typography">
        <h1>
          Tadeusz<span> Makowski</span>
        </h1>
        <p>
          (ur. 29 stycznia 1882 w Oświęcimiu, zm. 1 listopada 1932 w Paryżu) –
          polski malarz działający w Paryżu, przedstawiciel
          <b> École de Paris.</b>
        </p>
        <div className="icons">
          <a
            href="https://pl-pl.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-youtube"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }

      .i-facebook {
        &:hover {
          border: 2px solid #3b5998;
          color: #3b5998;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid #e62117;
          color: #e62117;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid #00acee;
          color: #00acee;
        }
      }
    }
  }
`;

export default HomePage;
