import css from "./FixedSubscribeBtn.module.scss";
import {Button} from "@/components/Button";
import cs from "classnames";

export const FixedSubscribeBtn = ({className}: {className?: string}) => {
	return (
		<div className={cs(css.fixedButtonContainer, className)}>
			<Button variant="violet" size="large" className={css.subscribeBtn} fullWidth>
				<p className={css.subscribeBtnTitle}>Открыть полный доступ</p>
				<span className={css.subscribeBtnPrice}>4 990₽/мес</span>
			</Button>
		</div>
	)
}