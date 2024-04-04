import Image from "next/image";
import Container from "./components/Container";
import Navber from "./components/Navber";
import Vercel from "../../public/vercel.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <Navber />
        <div className="flex-groe text-center p-10">
          <h3 className="text-5xl">License Dashborad</h3>
          <p>Become full-stack developer with NextJS</p>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center my-10 w-[60%]">
              <Image src={Vercel} width={200} height={0} alt="logo vercel" />
              <p>
                Welcome to our web dashboard! We're thrilled to have you here.
                Our dashboard provides a modern, user-friendly interface
                designed to make accessing information and services as seamless
                as possible. Whether you're looking for analytics, reports, or
                managing your account, our dashboard has got you covered. Dive
                in, explore the various features, and make the most out of your
                experience. If you have any questions or need assistance, feel
                free to reach out to our support team. We're here to help you
                every step of the way. Enjoy your journey with us!
              </p>
              <p className="mt-10">
                <Link
                  className="bg-blue-400 text-white border py-2 px-3 rounded text-lg my-2 w-[300px]"
                  href="/admin"
                >
                  Manage Dashborad
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
