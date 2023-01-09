import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Footer, Navigator, TopPanel, NewsList, RedactionTop, Slider, FullListVpn } from '../../organisms/';
import { ButtonLink } from '../../atoms/';
import GeneralRating from './components/GeneralRating';
import DetailsBlock from './components/DetailsBlock';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { VPNsStore } from '../../../stores/';
import { useParams } from 'react-router-dom';
import './VPNPage.scss';
import { toJS } from 'mobx';

const VPNPage = observer(() => {
  const params = useParams().vpn;
  useEffect(() => {
    console.log('params', params);
    if (params) VPNsStore.getVPNAsync(params);
  }, [params]);

  const { vpnDescr } = VPNsStore;
  console.log('vpnDescr', toJS(vpnDescr));
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="vpn-page page__wrapper">
        {vpnDescr && (
          <div className="page__inner">
            <div className="categories">Обзоры</div>
            <div className="title title-50">{vpnDescr.name}</div>
            <div className="description">
              <div className="description__logo">
                <img src={`${vpnDescr.iconUrl}`} />
              </div>
              <div className="description__text">
                <div dangerouslySetInnerHTML={{ __html: vpnDescr.description }} />
              </div>
              <div className="description__rating">
                <div className="rating">
                  <div className="rating__data">
                    <span className="rating__value">------</span>
                    <span className="rating__full">/10</span>
                  </div>
                  <div className="rating__place">------ место из 15</div>
                </div>
                <div className="rating">
                  <div className="rating__data">
                    <span className="rating__full">{vpnDescr.currencySymbol}</span>
                    <span className="rating__value">{vpnDescr.price}</span>
                  </div>
                  <span className="rating__place">мин. цена</span>
                </div>
              </div>
              <div className="description__footer">
                <div className="block__buy-vpn">
                  <ButtonLink
                    text={`Сайт ${vpnDescr.name}`}
                    iconId="exportsquare"
                    url={vpnDescr.website}
                    externalURL={true}
                    align="center"
                    colored={true}
                    customClass="button_vpn-link"
                  />
                  {vpnDescr.promocode && (
                    <div className="vpn-discount">
                      Скидка&nbsp;{vpnDescr.discount}% с&nbsp;промокодом{' '}
                      <span className="vpn-discount__code">{vpnDescr.promocode}</span>
                    </div>
                  )}
                </div>
                {vpnDescr.recommended && (
                  <div className="border__wrapper block__rks-recommended">
                    <div className="rks-recommended ">
                      <div className="rks"></div>
                      <div className="text">рекомендует</div>
                    </div>
                  </div>
                )}
              </div>
              {vpnDescr.screenshots.length > 0 && (
                <div className="description__images slider-vpn__wrapper">
                  <Swiper modules={[Navigation, Scrollbar, A11y]} spaceBetween={25} slidesPerView="auto">
                    {vpnDescr.screenshots.map((node, key) => {
                      return (
                        <SwiperSlide key={key}>
                          <img src={`${node.imageUrl}`} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )}
            </div>
            <GeneralRating vpnDescr={vpnDescr} />
            <div className="line"></div>
            {/* <DetailsBlock /> */}

            <div className="vpn-rating__inner-details">
              <div className="title title-50">Подробнее</div>
              {/* <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Стоимость</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">7,6</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                <div className="details-item__place">
                  <div className="details-item__place-value">9 место из 15</div>
                </div>
                <div className="details-item__rating-line">
                  <div className="filled" style={{ width: '76%', borderRadius: '4px 0 0 4px' }}></div>
                </div>
                <div className="details-item__description">
                  Имеет всего 1 тариф оплаты — 5 Евро в месяц. Сервис имеет гибкую систему возврата средств — 30 дней.
                  Помимо VPN услуг компания предлагает своим пользователям собственный DNS (3 вариации — чистый; с
                  блокировкой рекламы; с блокировкой рекламы и опасных сайтов)
                </div>
                <div className="details-item____buy">
                  <div className="block__buy-vpn">
                    <ButtonLink
                      text="Сайт Mullvad VPN"
                      iconId="exportsquare"
                      url="https://mullvad.net/ru/"
                      align="center"
                      colored={true}
                      customClass="button_vpn-link"
                    />
                    <div className="vpn-discount">
                      Скидка&nbsp;50% с&nbsp;промокодом <span className="vpn-discount__code">VPNLOVE</span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Серверы и страны</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">7,6</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                <div className="details-item__place">
                  <div className="details-item__place-value">9 место из 15</div>
                </div>
                <div className="details-item__rating-line progress-line">
                  <div className="filled" style={{ width: '76%', borderRadius: '4px 0 0 4px' }}></div>
                </div>
                <div className="details-item__description">
                  Сервис имеет 901 сервис в 38 странах — Албания, Австралия, Австрия, Бельгия, Бразилия, Болгария,
                  Канада, Чехия, Дания, Эстония, Финляндия, Франция, Германия, Греция, Гонконг, Венгрия, Ирландия,
                  Израиль, Италия, Япония, Латвия, Молдавия, Нидерланды, Новая Зеландия, Норвегия, Польша, Португалия,
                  Румыния, Сербия, Сингапур, Словакия, Испания, Швеция, Швейцария, Британия, ОАЭ, США.
                </div>
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Торренты</div>
                  <div className="details-item__header-status neutral">Не понятно</div>
                </div>
                <div className="details-item__description">
                  Сервис заявляет, что Торренты работают через некоторые локации, но они не могут гарантировать их 100%
                  работоспособность из-за претензий со стороны правообладателей.
                </div>
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Логирование</div>
                  <div className="details-item__header-status positive">Отсутствует</div>
                </div>

                <div className="details-item__description">
                  По заявлениям сервиса — он не логирует трафик совсем, а их физические сервера надежно охраняются и
                  доступ имеют очень ограниченный круг лиц.
                </div>
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Оплата из России</div>
                  <div className="details-item__header-status negative">Нет</div>
                </div>

                <div className="details-item__description">
                  К сожалению сервис не принимает к оплате Российские карты, но компания Mullvad совместно с новостным
                  изданием DOXA проводили/проводят акцию, где пользователь получал аккаунт Mullvad на 3 месяца. Также
                  если вы уже использовали Mullvad, перед тем, как они перестали принимать Российские карты к оплате или
                  уже оплатили и не знаете как быть дальше, то вам может повезти, как некоторым пользователям, и аккаунт
                  будет автоматически продлеваться абсолютно бесплатно.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
});

export default VPNPage;
