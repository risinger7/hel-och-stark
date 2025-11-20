import "./footer.css";

export default function MapIframe() {
    return (
        <div>
            <iframe
                className="map"
                src="https://www.google.com/maps?q=Gustavslundsvägen+149R,+167+51+Bromma&output=embed"
                width="100%"
                height="450"
                loading="lazy"
            ></iframe>
        </div>
    );
}
