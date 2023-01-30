import { Component } from 'react';
import { Footer, Navigator, TopPanel } from '../../organisms/';
import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="about-page about-page__wrapper">
          <div className="about-page__inner">
            <div className="about-page__title title-50">О нас</div>
            <div className="about-page__description">
              <p>
                <b>VPN Love</b>&nbsp;&mdash; это сервис, где вы&nbsp;сможете изучить информацию о&nbsp;различных
                VPN-сервисах, прочитать новости о&nbsp;VPN, изучить альтернативы VPN и&nbsp;многое другое.
              </p>
              <p>
                Наша команда стремится дать прозрачную оценку каждому сервису. Мы&nbsp;хотим, чтобы пользователи сами
                выбирали себе инструмент и&nbsp;ни&nbsp;в&nbsp;коем случае не&nbsp;навязываем свое мнение.
              </p>
              <p>
                Мы&nbsp;считаем, что каждый человек имеет право&nbsp;на:
                <ul>
                  <li>свободное получение информации в&nbsp;интернете;</li>
                  <li>анонимность и&nbsp;конфиденциальность;</li>
                  <li>безопасность;</li>
                  <li>удобство доступа к&nbsp;нужной ему информации.</li>
                </ul>
              </p>
              <p>
                Мы&nbsp;выступаем против цензуры, а&nbsp;также неправомерных блокировок, которые власти многих стран
                практикуют, минуя суды, закон и&nbsp;здравый смысл. Подключаясь к&nbsp;рекомендованным нами ресурсам,
                вы&nbsp;поддерживаете общее дело борьбы за&nbsp;цифровые права не&nbsp;только в&nbsp;России,
                но&nbsp;и&nbsp;по&nbsp;всему миру.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
