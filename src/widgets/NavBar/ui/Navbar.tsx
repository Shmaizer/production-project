import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps{
    className?:string;
}
console.log(cls)
export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames (cls.navbar, {}, [className])}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>Главная</Link>
      </div>
  );
};