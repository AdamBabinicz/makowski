import { MainLayout, InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  return (
    <MainLayout>
      <Title title={"Kontakt"} span={"Kontakt"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Skontaktuj się</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Wpisz swój email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Wpisz swój temat</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text">Wpisz swoją wiadomość</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Wyślij!"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Telefon"}
              icon={phone}
              contact1={"+775652298392"}
              // contact2={"+775652298392"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              contact1={"puaro@vp.pl"}
              // contact2={"info.lorem.ipsum@gmail.com"}
            />
            <ContactItem
              title={"Adres"}
              icon={location}
              contact1={"rue Vercingétorix, Paris, France"}
              // contact2={"United Kingdom"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: 1fr;
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
