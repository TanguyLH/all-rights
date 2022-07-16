import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

interface Props {
  props: {

  }
}

export default function Cookie() : JSX.Element {
  return (
    <div>
      <Image
        priority
        src="/images/primary-cookie.svg"
        className={utilStyles.borderCircle}
        height={300}
        width={300}
        alt="cookie getting clicked"
      />

    </div>
  )
}