import { Link } from 'react-router-dom';
import styles from './not-found.module.css';


export default function NotFound() {
 return (
    <div className={styles.wrapper}>
      <h1 className='text text_type_main-large'>Ошибка 404</h1>
      <p className='text text_type_main-medium'>
        Извините, страница не найдена.
      </p>
      <Link to='/' 
            className={styles.link + ' text text_type_main-default text_color_inactive'}>
        Вернуться на главную
      </Link>
    </div>
  );
}