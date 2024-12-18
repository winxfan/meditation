import Logo from '@/assets/image/logo.svg'
import { UserCard } from '../UserCard'
import css from './Header.module.scss'

export const Header = () => {
	// todo: set avatar

	return (
		<div className={css.wrapper}>
			<Logo className={css.logo} />
			<UserCard />
		</div>
	)
}
