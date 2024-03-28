import './CertificatesCard.css'

const CertificatesCard = ({year , edu , university}) => {
  return (
    <div className="box">
        <p>{year}</p>
        <h3>{edu}</h3>
        <h3>{university}</h3>
    </div>
  )
}

export default CertificatesCard