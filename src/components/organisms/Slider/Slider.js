import { Link } from 'react-router-dom';
import './Slider.scss';
import { observer } from 'mobx-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import SliderItem from './SliderItem';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BannersStore } from '../../../stores/';

const Slider = observer(() => {
  const pathname = useLocation().pathname;
  const { bannersList } = BannersStore;
  const list =
    pathname === '/'
      ? bannersList.filter((el) => {
          return el.showOnHomepage;
        })
      : bannersList.filter((el) => {
          return !el.showOnHomepage;
        });

  return (
    <div className="slider-vpn__wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        navigation
        // centeredSlides={true}
        // breakpoints: {
        //   // when window width is >= 320px
        //   320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   }
        slidesPerView="auto"
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet'
        }}
      >
        {list && (
          <>
            {list.map((node, key) => {
              return (
                <SwiperSlide key={key}>
                  <SliderItem item={node} />
                </SwiperSlide>
              );
            })}
          </>
        )}
      </Swiper>
    </div>
  );
});

export default Slider;
