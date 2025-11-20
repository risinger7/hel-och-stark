import Navbar from "@/app/navbar/Navbar";
import "./ovrigt.css";
import Container from "@/components/container/Container";
import { lexend200 } from "@/components/fonts/fonts";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function OvrigtPage() {
    return (
        <div className="ovrigt-page">
            <Navbar />
            <Container>
                <div className="ovrigt-content">
                    <h1 className={`ovrigt-text ${lexend200.className}`}>
                        Återförsäljare av Forever Livings Aloe vera produkter
                    </h1>
                    <div className="ovrigt-images">
                        <div className="ovrigt-image-wrapper">
                            <Image
                                src="/aloe2.png"
                                alt="picture of aloe vera gel"
                                fill
                                className="ovrigt-image"
                                priority
                            />
                        </div>
                        <div className="ovrigt-image-wrapper">
                            <Image
                                src="/forever4.png"
                                alt="forever commercial picture"
                                fill
                                className="ovrigt-image"
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
