import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import NavBarTab from '../NavBarTab/NavBarTab'
import { useUser } from '@auth0/nextjs-auth0/client'

type Props = {}

const Navbar = (props: Props) => {
    const { user } = useUser();

  return (
    // <nav className={styles.nav}>
    //   <a href="/">Navbar</a>
    //   <div>
    //     <button>
    //       <a href="/login">Login</a>
    //     </button>
    //   </div>
    // </nav>

    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <Link href="/">
            <Image
              className="nav-bar__logo"
              src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
              // src={"/vercel.svg"}
              alt="Auth0 shield logo"
              width={ 122 }
              height={ 36 }
            />
            {/* <h1 className="nav-bar__logo">auth0 SSO </h1> */}
          </Link>
        </div>
        <div className="nav-bar__tabs">
          <NavBarTab path="/profile" label="Profile" />
          <NavBarTab path="/public" label="Public" />
          { user && (
            <>
              <NavBarTab path="/protected" label="Protected" />              
            </>
          ) }
        </div>        <div className="nav-bar__buttons">
          { !user && (
            <>
              <a className="button__sign-up" href="/api/auth/signup">
                Sign Up
              </a>
              <a className="button__login" href="/api/auth/login">
                Log In
              </a>
            </>
          ) }
          { user && (
            <>
              <a className="button__logout" href="/api/auth/logout">
                Log Out
              </a>
            </>
          ) }
        </div>
      </nav>
    </div>
  )
}

export default Navbar