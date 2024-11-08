import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps{
    className?:string;
}
console.log(cls)
export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames (cls.navbar, {}, [className])}>
          <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>Главная</AppLink>
          </div>
      </div>
  );
};