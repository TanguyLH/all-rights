import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import { useState } from 'react';
import style from './cookie.module.css'

interface Props {
  props: {

  }
}

export type NullableObject = null | Storage;

export default function Cookie() : JSX.Element {
  const localStorageParsing = localStorage.getItem("cookie") || 0 ;
  const [counter, setcounter] = useState(JSON.parse(localStorage.getItem("cookie")?) || 0);
  const click = (multiplier: number) => {
    setcounter(counter => counter + multiplier);
    localStorage.setItem("cookie", JSON.stringify(counter));
  }
  return (
    <div className={style.cookieContainer}>
        <Image
          priority
          src="/images/primary-cookie.svg"
          className={`${utilStyles.borderCircle} ${style.image}`}
          onClick={() => click(1)}
          height={300}
          width={300}
          alt="cookie getting clicked"
        />
      <p>You have {counter} clicks</p>
    </div>
  )
}