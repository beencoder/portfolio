import styles from '@/styles/layout/header.module.scss';
import Logo from '../ui/logo';
import MainNavigation from './main-navigation';

const navItems = [
  { type: 'section', href: '#intro', label: 'Start' },
  { type: 'section', href: '#about', label: 'Who I Am' },
  { type: 'section', href: '#skills', label: 'Skills' },
  { type: 'section', href: '#works', label: 'Works' },
  { type: 'page', href: '/posts', label: 'Notes' },
  { type: 'section', href: '#contact', label: 'Let’s Talk' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className="sr-only">
        Skip to content
      </a>
      <div className="container">
        <h1 className="sr-only">dakong.dev</h1>
        <Logo />
        <MainNavigation navItems={navItems} />
      </div>
    </header>
  );
}
