
import PropsFunction from '../SectionThree/SectionThree';

export default function SectionTwo() {
  let arr = [{ name:'GitHub'}, {name:'Frontend Mentor'}, {name:'LinkedIn'}, {name:'Twitter'}, {name:'Instagram'}];

  return (
    <div id="section-two">
      {arr.map(e => (
        <PropsFunction name={e.name} />
      ))}
  
    </div>
  );
}

