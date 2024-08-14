import "./SectionOne.css";
import UserImage from "/Images/avatar-jessica.jpeg";

export default function SectionOne() {
  return (
    <div id="section-one">
      <img src={UserImage} alt="Not Found" />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>“Front-end developer and avid reader.”</p>
    </div>
  );
}
