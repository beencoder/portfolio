// components/about/AboutStacks.js
import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/pages/home/about.module.scss';

const STACK_ITEMS = [
  { id: 'html', src: '/images/icons/html5.png', alt: 'HTML5' },
  { id: 'css', src: '/images/icons/css3.png', alt: 'CSS3' },
  { id: 'js', src: '/images/icons/js.png', alt: 'JavaScript' },
  { id: 'react', src: '/images/icons/react.png', alt: 'React' },
  { id: 'next', src: '/images/icons/next.png', alt: 'Next.js', resize: true },
  { id: 'vue', src: '/images/icons/vue.png', alt: 'Vue.js' },
  { id: 'sass', src: '/images/icons/sass.png', alt: 'Sass' },
  { id: 'ts', src: '/images/icons/ts.png', alt: 'TypeScript' },
  { id: 'git', src: '/images/icons/git.png', alt: 'Git' },
  { id: 'figma', src: '/images/icons/figma.png', alt: 'Figma' },
];

function StackList({ isDuplicate = false }) {
  return (
    <ul className={styles['stack-list']} aria-hidden={isDuplicate ? 'true' : undefined}>
      {STACK_ITEMS.map((item) => (
        <li
          key={item.id}
          className={clsx(styles['stack-item'], {
            [styles.resize]: item.resize,
          })}>
          <Image src={item.src} alt={isDuplicate ? '' : item.alt} width={128} height={128} />
        </li>
      ))}
    </ul>
  );
}

export default function AboutStacks() {
  return (
    <div className={styles['stacks-wrap']}>
      <div className={styles['stacks-inner']} aria-label="기술 스택">
        <StackList />
        <StackList isDuplicate />
      </div>
    </div>
  );
}
