import { Component } from 'react';
import { Link } from 'react-router-dom';
import './GeneralRating.scss';
import { Progress } from '../../../atoms/';
import FeatureItem from './FeatureItem';

const GeneralRating = () => {
  return (
    <div className="vpn-rating__inner">
      <div className="background">
        <div className="vpn-rating__inner-header">
          <div>
            <div className="tag">Рейтинг</div>
            <div className="title-50">Mullvad VPN</div>
            <div className="desclaimer">Сравнить с другими VPN</div>
          </div>
          <div className="rating">
            <div className="rating__place">9 место из 15</div>
            <div className="rating__data">
              <span className="rating__value">7,6</span>
              <span className="rating__full">/10</span>
            </div>
          </div>
        </div>
        <div className="vpn-rating__inner-feature">
          <Progress title="Стоимость" value="6,1" fullValue="10" />
          <Progress title="Серверы и страны" value="4,5" fullValue="10" />
          <Progress title="Скорость" value="3,0" fullValue="10" />
          <Progress title="Поддержка плаформ" value="8,0" fullValue="10" />
          <Progress title="Поддержка" value="6,5" fullValue="10" />
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
