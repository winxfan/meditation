import css from "./FixedSubscribeBtn.module.scss";
import {Button} from "@/components/Button";
import cs from "classnames";

export const FixedSubscribeBtn = ({className}: {className?: string}) => {
	const onClick = () => {
		window.location.href = 'https://lk.clubmeditation.ru/club_new'
	}

	return (
		<div className={cs(css.fixedButtonContainer, className)}>
			<Button variant="violet" size="large" className={css.subscribeBtn} onClick={onClick} fullWidth>
				<p className={css.subscribeBtnTitle}>
					Вступить в Private Meditation Club
				</p>
				<span className={css.subscribeBtnPrice}>4 990₽/мес</span>
			</Button>
		</div>
	)
}