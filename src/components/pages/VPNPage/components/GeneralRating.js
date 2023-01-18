import { marked } from 'marked';
import { useNavigate } from 'react-router-dom';
import './GeneralRating.scss';
import { Progress } from '../../../atoms/';
import FeatureItem from './FeatureItem';
import { toJS } from 'mobx';

const GeneralRating = (props) => {
  const { vpnDescr, vpnCount } = props;
  const navigate = useNavigate();

  const listRatingState = [];
  const listWithoutRating = [];
  const listRating = [];
  vpnDescr.cards.forEach((element) => {
    if (typeof element.rating === 'number') {
      listRating.push(element);
    } else if (element.state != null && typeof element.state == 'boolean' && element.type !== 'payment_methods') {
      if (element.type !== 'accepts_russian_creditcards' && element.type !== 'cryptocurrency') {
        listRatingState.push(element);
      } else {
        listWithoutRating.push(element);
      }
    } else if (
      (element.type !== 'connection_speed' || element.type !== 'data_collection') &&
      element.type !== 'payment_methods'
    ) {
      listRatingState.push(element);
    }
  });

  return (
    <div className="vpn-rating__inner">
      <div className="background">
        <div className="vpn-rating__inner-header">
          <div>
            <div className="tag">Рейтинг</div>
            <div className="title-50">{vpnDescr.name}</div>
            <div
              className="desclaimer"
              onClick={() => {
                navigate(`/rating`);
              }}
            >
              Сравнить с другими VPN
            </div>
          </div>
          <div className="rating">
            <div className="rating__place">
              {vpnDescr.rank} место из {vpnCount}
            </div>
            <div className="rating__data">
              <span className="rating__value">{vpnDescr.rating}</span>
              <span className="rating__full">/10</span>
            </div>
          </div>
        </div>
        <div className="vpn-rating__inner-feature">
          <div className="extended-description__text">
            {vpnDescr.extendedDescription && (
              <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.extendedDescription) }} />
            )}
          </div>
          {listRating.map((element) => {
            return <Progress title={element.name} value={element.rating} key={element.type} fullValue="10" />;
          })}
          {listRatingState.map((element) => {
            let value = element.state ? 'Есть' : 'Отсутствует';
            let customClass = element.state || element.type === 'logging' ? 'positive' : 'negative';
            if (element.type === 'connection_speed') {
              value = element.qualityVerbose;
              customClass = ` ${element.quality.toLowerCase()}`;
            }
            if (element.type === 'data_collection') {
              value = element.stateVerbose;
              customClass = `collection_${element.state.toLowerCase()}`;
            }
            return <FeatureItem key={element.type} title={element.name} value={value} customClass={customClass} />;
          })}
          <div className="comment">Параметры, не влияющие на рейтинг</div>
          {listWithoutRating.map((element) => {
            let value = element.state ? 'Есть' : 'Отсутствует';
            if (element.type === 'accepts_russian_creditcards') {
              value = element.state ? 'Да' : 'Нет';
            }
            return (
              <FeatureItem
                key={element.type}
                title={element.name}
                value={value}
                customClass={element.state ? 'positive' : 'negative'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralRating;
