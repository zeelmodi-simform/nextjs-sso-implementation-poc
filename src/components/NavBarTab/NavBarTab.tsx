import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {path: string, label: string }

const NavBarTab = ({path, label }: Props) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(path)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={path} className={navBarTabClassName}>
      {label}
    </Link>
  );
}

export default NavBarTab