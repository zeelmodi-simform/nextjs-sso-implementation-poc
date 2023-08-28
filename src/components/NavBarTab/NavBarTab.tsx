import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = { path: string; label: string };

const NavBarTab = ({ path, label }: Props) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  return (
    <Link
      href={path}
      className={`nav-bar__tab ${
        isRouteActive(path) ? 'nav-bar__tab--active' : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default NavBarTab;
