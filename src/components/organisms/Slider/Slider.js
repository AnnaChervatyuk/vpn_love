import { Link } from 'react-router-dom';
import './Slider.scss';
import SliderItem from './SliderItem';

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const list = [
    {
      title: 'О VPN LOVE',
      description:
        'Наши эксперты проверяют и оценивают VPN-сервисы, чтобы вы могли выбрать для себя лучший. Прозрачные критерии оценки тра та та, описание что это и для кого/чего.',
      url: '',
      titleUrl: 'Подробнее о VPN LOVE',
      img: 'slider/slider1.png',
      backgroundColor: '#F8F8F8'
    },
    {
      title: 'Новый обзор',
      description:
        'Наши эксперты проверяют и оценивают VPN-сервисы, чтобы вы могли выбрать для себя лучший. Прозрачные критерии и оценки тра та та, описание что это и для кого/чего.',
      url: '',
      titleUrl: 'Подробнее о VPN LOVE',
      img: 'slider/slider1.png',
      backgroundColor: '#CEDAE1'
    },
    {
      title: 'О VPN LOVE',
      description:
        'Наши эксперты проверяют и оценивают VPN-сервисы, чтобы вы могли выбрать для себя лучший. Прозрачные критерии оценки тра та та, описание что это и для кого/чего.',
      url: '',
      titleUrl: 'Подробнее о VPN LOVE',
      img: 'slider/slider1.png',
      backgroundColor: '#F8F8F8'
    },
    {
      title: 'Новый обзор',
      description:
        'Наши эксперты проверяют и оценивают VPN-сервисы, чтобы вы могли выбрать для себя лучший. Прозрачные критерии и оценки тра та та, описание что это и для кого/чего.',
      url: '',
      titleUrl: 'Подробнее о VPN LOVE',
      img: 'slider/slider1.png',
      backgroundColor: '#CEDAE1'
    },
    {
      title: 'О VPN LOVE',
      description:
        'Наши эксперты проверяют и оценивают VPN-сервисы, чтобы вы могли выбрать для себя лучший. Прозрачные критерии оценки тра та та, описание что это и для кого/чего.',
      url: '',
      titleUrl: 'Подробнее о VPN LOVE',
      img: 'slider/slider1.png',
      backgroundColor: '#F8F8F8'
    }
  ];

  return (
    <div className="slider-vpn__wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
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
        {list.map((node, key) => {
          return (
            <SwiperSlide key={key}>
              <SliderItem item={node} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
