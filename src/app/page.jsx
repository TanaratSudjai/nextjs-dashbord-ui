import Image from "next/image";
import Container from "./components/Container";
import Navber from "./components/Navber";
import Vercel from "../../public/vercel.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Navber />
        <div className="flex-groe text-center p-10">
          <h3 className="text-5xl">NextJS Dashborad</h3>
          <p>Become full-stack developer with NextJS</p>
          <div className="flex justify-center my-10">
            <Image src={Vercel} width={300} height={0} alt="logo vercel" />
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
