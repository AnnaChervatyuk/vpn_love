import { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './GeneralRating.scss';
import { Progress } from '../../../atoms/';
import FeatureItem from './FeatureItem';

const GeneralRating = (props) => {
  const { vpnDescr } = props;
  const navigate = useNavigate();
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
            <div className="rating__place">--- место из 15</div>
            <div className="rating__data">
              <span className="rating__value">-----</span>
              <span className="rating__full">/10</span>
            </div>
          </div>
        </div>
        <div className="vpn-rating__inner-feature">
          <Progress title="Стоимость" value="0" fullValue="10" />
          <Progress title="Серверы и страны" value="0" fullValue="10" />
          <Progress title="Скорость" value="0" fullValue="10" />
          <Progress title="Поддержка платформ" value="0" fullValue="10" />
          <Progress title="Поддержка" value="0" fullValue="10" />
          <FeatureItem title="Торренты" value="Не понятно" customClass="neutral" />
          <FeatureItem title="Логирование" value="Отсутствует" customClass="positive" />
          <FeatureItem title="Обфускация" value="Есть" customClass="positive" />
          <FeatureItem title="Аудит безопасности" value="Есть" customClass="positive" />
          <FeatureItem title="Kill Switch" value="Есть" customClass="positive" />
          <FeatureItem title="Собираемая информация о пользователях" value="Минимальная" customClass="positive" />
          <div className="comment">Параметры, не влияющие на рейтинг</div>
          <FeatureItem title="Оплата криптовалютой" value="Есть" customClass="positive" />
          <FeatureItem title="Оплата из России" value="Нет" customClass="negative" />
          <FeatureItem title="Доступ из России" value="Нет" customClass="negative" />
        </div>
      </div>
    </div>
  );
};

export default GeneralRating;
