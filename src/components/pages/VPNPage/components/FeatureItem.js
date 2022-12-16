const FeatureItem = (props) => {
  const { customClass, value, title } = props;

  return (
    <div className={`feature-item ${customClass}`}>
      <div className="feature-item-title">{title}</div>
      <div className="feature-item-line"></div>
      <div className={`feature-item-value ${customClass}`}>{value}</div>
    </div>
  );
};

export default FeatureItem;
