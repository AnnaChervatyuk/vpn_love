const DetailsItem = (props) => {
  const { customClass, value, title, text, fullValue, place } = props;

  return (
    <div className={`details-item ${customClass}`}>
      <div className="background">
        <div className="details-item-title">{title}</div>
        <div className="progress-value">
          <span className="rating_value">{value}</span>
          <span className="rating_full">/{fullValue}</span>
        </div>
        <div className="rating__place">9 место из 15</div>

        <div className="details-item-line"></div>
        <div className={`details-item-value ${customClass}`}>{value}</div>
      </div>
      <div className="details-item-text">{text}</div>
    </div>
  );
};

export default DetailsItem;
