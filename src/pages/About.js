import SectionWrapper from "../components/Wrappers/SectionWrapper";
import ContentWrapper from "../components/Wrappers/ContentWrapper";
import Logo from "../components/Logo";
import BreadCrumb from "../components/BreadCrumb";

export default function About() {
  return (
      <SectionWrapper>
          <a href={"/"}>
          <Logo height={50} width={80} />
          </a>
          <ContentWrapper>
            <BreadCrumb/>
            <h1>About me</h1>
            <div id="info-container">
                  <div className="col-l"> </div>
            </div>
          </ContentWrapper>
    </SectionWrapper>
  );
}
