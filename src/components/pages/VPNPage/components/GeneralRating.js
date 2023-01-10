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
            <div className="rating__place">???????? место из ????????</div>
            <div className="rating__data">
              <span className="rating__value">????????</span>
              <span className="rating__full">/10</span>
            </div>
          </div>
        </div>
        <div className="vpn-rating__inner-feature">
          <Progress title="Стоимость ??????" value="0" fullValue="10" />
          <Progress title="Серверы и страны ??????" value="0" fullValue="10" />
          <Progress title="Скорость ??????" value="0" fullValue="10" />
          <Progress title="Поддержка платформ ??????" value="0" fullValue="10" />
          <Progress title="Поддержка ??????" value="0" fullValue="10" />

          <FeatureItem
            title="Торренты"
            value={vpnDescr.torrents ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.torrents ? 'positive' : 'negative'}
          />
          <FeatureItem
            title="Логирование"
            value={vpnDescr.logging ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.logging ? 'negative' : 'positive'}
          />
          <FeatureItem
            title="Обфускация"
            value={vpnDescr.obfuscation ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.obfuscation ? 'positive' : 'negative'}
          />
          <FeatureItem title="Аудит безопасности ??????" value="Есть" customClass="positive" />
          <FeatureItem
            title="Kill Switch"
            value={vpnDescr.killSwitch ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.killSwitch ? 'positive' : 'negative'}
          />
          <FeatureItem
            title="Multi hop"
            value={vpnDescr.multihop ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.multihop ? 'positive' : 'negative'}
          />
          <FeatureItem
            title="Собираемая информация о пользователях ??????"
            value="Минимальная"
            customClass="positive"
          />
          <div className="comment">Параметры, не влияющие на рейтинг</div>
          <FeatureItem
            title="Оплата криптовалютой"
            value={vpnDescr.acceptsCryptocurrency ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.acceptsCryptocurrency ? 'positive' : 'negative'}
          />
          <FeatureItem
            title="Оплата из России ??????"
            value={vpnDescr.acceptsRussianCreditcards ? 'Есть' : 'Отсутствует'}
            customClass={vpnDescr.acceptsRussianCreditcards ? 'positive' : 'negative'}
          />
          <FeatureItem title="Доступ из России" value="Нет" customClass="negative" />
        </div>
      </div>
    </div>
  );
};

export default GeneralRating;
