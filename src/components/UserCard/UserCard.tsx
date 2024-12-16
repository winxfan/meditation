import css from './UserCard.module.scss'
import { useTelegram } from "../../utils/hooks/useTelegram";
import {useAppSelector} from "@/utils/hooks/redux";
import defaultAvatar from '../../assets/image/defaultAvatar.png'
import {LoadingStatus} from "@/constants";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import SkeletonButton from "antd/es/skeleton/Button";
import {ArrowRightOutlined, RightOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import EducationIcon from "@/assets/image/education.svg";

export const UserCard = () => {
  const { first_name, username, avatar } = useAppSelector(store => store.user.data)
  const userStatus = useAppSelector(store => store.user.status)
  const { initDataUnsafe, WebAppUser } = useTelegram();

  const firstName = first_name || initDataUnsafe?.user?.first_name || 'Anon';
  const userName = username || initDataUnsafe?.user?.username || 'anon';

  // todo check info in webapp
  console.log('WebAppUser?.photo_url', WebAppUser?.photo_url)

  if (userStatus === LoadingStatus.pending || userStatus === LoadingStatus.none) {
    return (
      <div className={css.wrapper}>
        <SkeletonAvatar size="large" className={css.skeletonAvatar}/>
        <SkeletonButton className={css.skeletonName}/>
      </div>
    )
  }

  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.nameContainer}>
          <p className={css.name}>Привет,</p>
          <p className={css.name}>{firstName}!</p>
        </div>
      </div>

      <Avatar
        icon={<EducationIcon width={16} height={16}/>}
        size={45}
        shape="square"
        src={avatar}
        className={css.avatar}
      />
    </div>
  )
}
