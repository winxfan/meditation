import css from './Header.module.scss'
import { UserCard } from "../UserCard";
import {Avatar} from "antd";
import EducationIcon from "@/assets/image/education.svg";
// import Logo from '@/assets/image/logo.svg';

export const Header= () => {
  // todo: set avatar

  return (
    <div className={css.wrapper}>
      {/*<Logo className={css.logo} />*/}
      <UserCard />
    </div>
  )
}
