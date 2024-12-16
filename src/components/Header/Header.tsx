import css from './Header.module.scss'
import { UserCard } from "../UserCard";
import {Avatar} from "antd";
import EducationIcon from "@/assets/image/education.svg";

export const Header= () => {
  // todo: set avatar

  return (
    <div className={css.wrapper}>
      <Avatar
        icon={<EducationIcon width={16} height={16}/>}
        size={45}
        shape="square"
      />

      <UserCard />
    </div>
  )
}
