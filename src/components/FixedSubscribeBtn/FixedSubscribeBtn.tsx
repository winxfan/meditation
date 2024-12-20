import css from "./FixedSubscribeBtn.module.scss";
import cs from "classnames";
import {SubscribeBtn} from "@/components/SubscribeBtn";

export const FixedSubscribeBtn = ({className}: {className?: string}) => {

	return (
		<div className={cs(css.fixedButtonContainer, className)}>
			<SubscribeBtn/>
		</div>
	)
}