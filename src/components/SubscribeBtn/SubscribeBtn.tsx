import css from "./SubscribeBtn.module.scss";
import {Button} from "@/components/Button";

export const SubscribeBtn = ({className}: {className?: string}) => {
	const onClick = () => {
		window.location.href = 'https://lk.clubmeditation.ru/club_new'
	}

	return (
		<Button variant="violet" size="large" className={css.subscribeBtn} onClick={onClick} fullWidth>
			<p className={css.subscribeBtnTitle}>
				Вступить в Private Meditation Club
			</p>
			{/*<span className={css.subscribeBtnPrice}>4 990₽/мес</span>*/}
		</Button>
	)
}