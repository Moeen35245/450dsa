import About from "../components/common/About";
function AboutInfo() {
  return (
    <div className="mt-20 max-w-[900px] mx-auto">
      <About />
    </div>
  );
}

export default AboutInfo;
export async function getStaticProps(context) {
  return {
    props: {},
  };
}
