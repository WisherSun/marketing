function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>

      <div className="section-title__box">
        <div className="section-title__line" />
        <div className="section-title__point" />
      </div>

      <div className="section-title__box">
        <div className="section-title__line" />
        <div className="section-title__point section-title__point--reverse" />
      </div>

      <p>{props.subtitle}</p>
    </div>
  );
}

export default SectionTitle;
