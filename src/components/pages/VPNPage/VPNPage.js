import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Footer, Navigator, TopPanel } from '../../organisms/';
import { ButtonLink } from '../../atoms/';
import GeneralRating from './components/GeneralRating';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { VPNsStore } from '../../../stores/';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './VPNPage.scss';
import Promocode from './components/atoms/Promocode';

const VPNPage = observer(() => {
  const params = useParams().vpn;
  useEffect(() => {
    console.log('params', params);
    if (params) VPNsStore.getVPNAsync(params);
  }, [params]);

  const { vpnDescr } = VPNsStore;

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
                <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.description) }} />
              </div>
              <div className="description__rating">
                <div className="rating">
                  <div className="rating__data">
                    <span className="rating__value">????????</span>
                    <span className="rating__full">/10</span>
                  </div>
                  <div className="rating__place">???????? место из 15</div>
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
                  {vpnDescr.promocode && <Promocode discount={vpnDescr.discount} promocode={vpnDescr.promocode} />}
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
                  <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={25}
                    slidesPerView="auto"
                    navigation
                    // pagination={{ clickable: true }}
                  >
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

            <div className="vpn-rating__inner-details">
              <div className="title title-50">Подробнее</div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Стоимость</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">????????</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                {vpnDescr.paymentInfo && (
                  <div className="details-item__description">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.paymentInfo) }} />
                  </div>
                )}
                <div className="border-dashed"></div>

                <div className="block__buy-vpn">
                  <div className="block__buy-vpn__price">
                    от {vpnDescr.currencySymbol}
                    {vpnDescr.price}
                    {vpnDescr.promocode && <Promocode discount={vpnDescr.discount} promocode={vpnDescr.promocode} />}
                  </div>

                  <ButtonLink
                    text="Купить"
                    iconId="exportsquare"
                    url={vpnDescr.website}
                    externalURL={true}
                    align="center"
                    colored={true}
                    customClass="button_vpn-link"
                  />
                </div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Серверы и страны</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">????????</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                <div className="details-item__place">
                  <div className="details-item__place-value">???????? место из ????????</div>
                </div>
                <div className="details-item__rating-line progress-line">
                  <div className="filled" style={{ width: '76%', borderRadius: '4px 0 0 4px' }}></div>
                </div>
                <div className="details-item__description details-item__description-countries">
                  {vpnDescr.countries.map((node, key) => {
                    return (
                      <div key={key} className="country__item">
                        <span className={`fi fi-${node.code.toLowerCase()}`}></span>
                        <span className="country-name">{node.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Скорость</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">????????</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                <div className="details-item__place">
                  <div className="details-item__place-value">???????? место из ????????</div>
                </div>
                <div className="details-item__rating-line progress-line">
                  <div className="filled" style={{ width: '76%', borderRadius: '4px 0 0 4px' }}></div>
                </div>
                <div className="details-item__description">????????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Поддержка плаформ</div>
                  <div className="details-item__header-rating">
                    <div className="rating__data">
                      <span className="rating__value">????????</span>
                      <span className="rating__full">/10</span>
                    </div>
                  </div>
                </div>
                <div className="details-item__place">
                  <div className="details-item__place-value">???????? место из ????????</div>
                </div>
                <div className="details-item__rating-line progress-line">
                  <div className="filled" style={{ width: '76%', borderRadius: '4px 0 0 4px' }}></div>
                </div>
                <div className="details-item__description">
                  {vpnDescr.platforms.map((node, key) => {
                    return (
                      <span key={key} style={{ marginRight: '10px' }}>
                        {node.name}
                      </span>
                    );
                  })}
                </div>
                {vpnDescr.platformsInfo && (
                  <div className="details-item__description">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.platformsInfo) }} />
                  </div>
                )}
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Торренты</div>
                  {vpnDescr.torrents ? (
                    <div className="details-item__header-status positive">Есть</div>
                  ) : (
                    <div className="details-item__header-status negative">Отсутствует</div>
                  )}
                </div>
                {vpnDescr.torrentsInfo && (
                  <div className="details-item__description">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.torrentsInfo) }} />
                  </div>
                )}
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Логирование</div>
                  {vpnDescr.logging ? (
                    <div className="details-item__header-status negative">Есть</div>
                  ) : (
                    <div className="details-item__header-status positive">Отсутствует</div>
                  )}
                </div>
                {vpnDescr.loggingInfo && (
                  <div className="details-item__description">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.loggingInfo) }} />
                  </div>
                )}
              </div>
              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Обфускация</div>
                  {vpnDescr.obfuscation ? (
                    <div className="details-item__header-status positive">Есть</div>
                  ) : (
                    <div className="details-item__header-status negative">Отсутствует</div>
                  )}
                </div>
                {vpnDescr.obfuscationInfo && (
                  <div className="details-item__description">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(vpnDescr.obfuscationInfo) }} />
                  </div>
                )}
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Оплата из России</div>
                  <div className="details-item__header-status negative">??????</div>
                </div>
                <div className="details-item__description">??????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Оплата криптовалютой</div>
                  {vpnDescr.acceptsCryptocurrency ? (
                    <div className="details-item__header-status positive">Есть</div>
                  ) : (
                    <div className="details-item__header-status negative">Отсутствует</div>
                  )}
                </div>
                <div className="details-item__description">????????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Аудит безопасности</div>
                  <div className="details-item__header-status negative">??????</div>
                </div>
                <div className="details-item__description">??????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Kill Switch</div>
                  {vpnDescr.killSwitch ? (
                    <div className="details-item__header-status positive">Есть</div>
                  ) : (
                    <div className="details-item__header-status negative">Отсутствует</div>
                  )}
                </div>
                <div className="details-item__description">??????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Информации о пользователях </div>
                  <div className="details-item__header-status positive">?????</div>
                </div>
                <div className="details-item__description">??????</div>
              </div>

              <div className="details-item background">
                <div className="details-item__header">
                  <div className="details-item__header-title">Поддержка</div>

                  <div className="details-item__header-status positive">?????</div>
                </div>
                <div className="details-item__description">??????</div>
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
