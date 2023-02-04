import { Link } from 'react-router-dom';
import styles from './not-found.module.css';

export default function NotFound() {
 return (
    <article className={styles.wrapper}>
      <h1 className='text text_type_main-medium'>
        Извините, страница не найдена.
      </h1>
      <p className='text text_type_main-medium'>ошибка 
      <span className='text text_type_digits-large pl-10'>404</span>
      </p>
      <Link to='/' 
            className={styles.link + ' text text_type_main-default text_color_inactive'}>
        Вернуться на главную
      </Link>
    </article>
  );
}