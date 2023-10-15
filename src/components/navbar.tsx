'use client';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import NextLink from 'next/link';

import {
  DebanLetterLogo,
  DebanLogo,
  GithubIcon,
  SearchIcon,
} from '@/components/icons';
import MagicProvider, {
  useMagicContext,
} from '@/components/magic/MagicProvider';
import ConnectButton from '@/components/magic/ui/ConnectButton';
import { ThemeSwitch } from '@/components/theme-switch';
import { Avatar, AvatarIcon } from '@nextui-org/avatar';
import { useCallback, useEffect, useState } from 'react';

export const TheNavbar = () => {
  // for magic login
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setAccount(user);
  }, []);

  const [disabled, setDisabled] = useState(false);
  const { magic } = useMagicContext();

  const connect = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Logged in user:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  const disconnect = useCallback(async () => {
    if (!magic) return;
    try {
      setDisabled(true);
      await magic.wallet.disconnect();
      localStorage.removeItem('user');
      setDisabled(false);
      setAccount(null);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  }, [magic, setAccount]);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search... "
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  );

  return (
    <MagicProvider>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="max-w-fit gap-3">
            <NextLink
              className="flex items-center justify-start gap-1"
              href="/"
            >
              <DebanLogo />
              <DebanLetterLogo />
            </NextLink>
          </NavbarBrand>
          <ul className="ml-2 hidden justify-start gap-4 lg:flex">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:font-medium data-[active=true]:text-primary'
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden basis-1/5 sm:flex sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden gap-2 sm:flex">
            {/*<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">*/}
            {/*  <TwitterIcon className="text-default-500" />*/}
            {/*</Link>*/}
            {/*<Link isExternal href={siteConfig.links.discord} aria-label="Discord">*/}
            {/*  <DiscordIcon className="text-default-500" />*/}
            {/*</Link>*/}
            {/*<Link isExternal href={siteConfig.links.github} aria-label="Github">*/}
            {/*  <GithubIcon className="text-default-500" />*/}
            {/*</Link>*/}
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            {!account ? (
              <ConnectButton onClick={connect} disabled={disabled} />
            ) : (
              <Avatar
                onClick={disconnect}
                icon={<AvatarIcon />}
                classNames={{
                  base: 'bg-gradient-to-br from-[#00B4FF] to-[#FF7000]',
                  icon: 'text-black/80',
                }}
              />
            )}

            {/*<Button*/}
            {/*  isExternal*/}
            {/*  as={Link}*/}
            {/*  className="bg-default-100 text-sm font-normal text-default-600"*/}
            {/*  href={siteConfig.links.twitter}*/}
            {/*  startContent={<HeartFilledIcon className="text-danger" />}*/}
            {/*  variant="flat"*/}
            {/*>*/}
            {/*  twitter2*/}
            {/*</Button>*/}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </MagicProvider>
  );
};
