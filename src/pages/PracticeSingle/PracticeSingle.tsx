import {RuTubeVideo} from "@/features/RutubeVideo";
import css from './PracticeSingle.module.scss'
import {useBackButton} from "@/utils/hooks/useBackButton";

export const PracticeSingle = () => {
	useBackButton('/practice/1');

	return (
		<div>
			<h1 className={css.title}>
				Соединение с энергетическим источником силы рода
			</h1>

			<p className={css.description}>
				Наполнение изобилием из него <br/>
				и получение поддержки от рода <br/>
				в достижении материальных целей
			</p>

			<div className={css.video}>
				<RuTubeVideo videoId=""/>
			</div>
		</div>
	)
}