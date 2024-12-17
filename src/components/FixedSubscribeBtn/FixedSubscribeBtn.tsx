import css from "@/pages/Base70Practics/Base70Practics.module.scss";
import {Button} from "@/components/Button";

export const FixedSubscribeBtn = () => {
	return (
		<div className={css.fixedButtonContainer}>
			<Button variant="violet" size="large" className={css.subscribeBtn} fullWidth>
				<p className={css.subscribeBtnTitle}>Открыть полный доступ</p>
				<span className={css.subscribeBtnPrice}>4 990₽/мес</span>
			</Button>
		</div>
	)
}