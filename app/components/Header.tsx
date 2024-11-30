import React, {Suspense, useState} from 'react';
import {Await, NavLink} from '@remix-run/react';
import {type CartViewPayload, useAnalytics} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {Link} from 'react-router-dom';
import {
  SearchIcon,
  UserIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

function GenderToggle() {
  const [isMale, setIsMale] = useState(false);
  const handleToggle = () => {
    setIsMale(!isMale);
  };
  return (
    <label className="inline-flex items-center cursor-pointer">
      {' '}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isMale}
        onChange={handleToggle}
      />{' '}
      <div className="relative w-24 h-11 bg-gray-200 rounded-lg peer">
        {' '}
        <div
          className={`absolute top-2 w-7 h-7 rounded-full transition-transform duration-500 bg-white flex items-center justify-center transform ${
            isMale ? 'translate-x-1' : 'translate-x-16'
          }`}
        >
          {' '}
          {isMale ? (
            <UserGroupIcon className="h-5 w-5 text-black" />
          ) : (
            <UserIcon className="h-5 w-5 text-black" />
          )}{' '}
        </div>{' '}
        <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-black">
          {' '}
          <span
            className={`${
              isMale ? 'opacity-0' : 'opacity-100 p-3'
            } transition-opacity transition-p duration-700 p-1 text-[14px] font-medium`}
          >
            {' '}
            Men{' '}
          </span>{' '}
          <span
            className={`${
              isMale ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700  text-[14px] font-medium`}
          >
            {' '}
            Women{' '}
          </span>{' '}
        </div>{' '}
      </div>{' '}
    </label>
  );
}

function Navbar() {
  return (
    <div className="relative">
      {' '}
      <nav className="flex justify-between items-center absolute top-5 left-1/2 transform -translate-x-1/2 bg-white w-[95%] h-[70px] z-20 p-4 rounded-lg shadow-lg">
        {' '}
        <div className="flex items-center">
          {' '}
          <Link
            to="/"
            className="text-left text-black text-xl font-bold no-underline"
          >
            {' '}
            UNCMFRT.COM{' '}
          </Link>{' '}
        </div>{' '}
        <div className="flex items-center text-[14px] w-[30%]">
          {' '}
          <SearchIcon className="h-[16px] w-[16%] text-black" />{' '}
          <Link to="/shop" className="text-black hover:text-gray-700 w-[16%] ">
            {' '}
            Shop{' '}
          </Link>{' '}
          <Link
            to="/science"
            className="text-black hover:text-gray-700 w-[16%] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0"
          >
            {' '}
            Science{' '}
          </Link>{' '}
          <Link
            to="/podcasts"
            className="text-black hover:text-gray-700 w-[16%]"
          >
            {' '}
            Podcasts{' '}
          </Link>{' '}
          <Link
            to="/trainers"
            className="text-black hover:text-gray-700 w-[16%]"
          >
            {' '}
            Trainers{' '}
          </Link>{' '}
          <Link to="/blog" className="text-black hover:text-gray-700 w-[16%]">
            {' '}
            Blog{' '}
          </Link>{' '}
        </div>{' '}
        <div className="flex items-center space-x-2">
          {' '}
          <GenderToggle />{' '}
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg w-[50%] font-medium text-[14px] h-[45px] cursor-pointer">
            {' '}
            Take The Quiz{' '}
          </button>{' '}
          <UserIcon className="h-6 w-6 text-black cursor-pointer" />{' '}
          <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" />{' '}
        </div>{' '}
      </nav>{' '}
    </div>
  );
}

export function Header() {
  return (
    <header>
      <Navbar></Navbar>
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
