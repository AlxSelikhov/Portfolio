import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import "../global.css"

function MainPage() {
  return (
    <>
      <div className="home-page">
        <NavbarComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default MainPage;
