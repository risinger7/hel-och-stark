import "../../app/(pages)/behandlingar/behandlingar.css"
import { lexend200, lexend700 } from "../fonts/fonts"

type BehandlingProps = {
  title: string // title
  text: string // description
  image: string | undefined // url
  bookingUrl: string
  price: number
}

export default function Behandling(props: BehandlingProps) {
  const { title, text, image, bookingUrl, price } = props

  return (
    <div className="grid-item">
      <h1 className={`${lexend700.className} grid-item-title`}>
        Behandlande/Terapeutisk Massage
      </h1>
      <p className={`${lexend200.className} grid-text`}>
        För stela, korta, ömma, inflammerade muskler passar det bra med en
        mjukgörande massage och spänningsbehandling i kombination med
        djupverkande muskelbehandling och stretch. En mycket effektiv
        behandlingsform för nacke, axlar och rygg, tennis- mus- eller
        golfarmbåge, löparknä eller allmän trötthetskänsla i ryggen. Om du har
        ett specifikt problem, rekommenderar jag massage, 3-5 gånger med ungefär
        en veckas mellanrum.
      </p>

      <div className="grid-image-container">
        <img src="/hel1.png" className="grid-image"></img>
      </div>
      <div className="grid-buttons">
        <button className={`${lexend700.className} grid-button boka`}>
          Boka
        </button>
      </div>
    </div>
  )
}
