import './Button.scss';
import { Link } from 'react-router-dom';
import { Icon } from './../';
import cn from 'classnames';

const ButtonLink = (props) => {
  const { text, url, iconId, colored, customClass } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  const isColored = colored ? 'colored' : '';
  console.log('text', text);
  return (
    <a href={url} className={`button button_link ${align} ${arrow} ${isColored} ${customClass}`}>
      {text}
      {/* <Icon id="exportsquare" /> */}
      {/* {icon && <Icon id="exportsquare" />} */}
    </a>
  );
};

export default ButtonLink;
