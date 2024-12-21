import css from './Practices.module.scss';
import {useBackButton} from "@/utils/hooks/useBackButton";
import {practicesData} from "@/pages/Practices/data";
import Meditation from "@/pages/Practices/components/Meditation";

export const Practices = () => {
	useBackButton()

	return (
		<div className={css.container}>
			<h1 className={css.title}>
				Практики
				на наполнение энергией
			</h1>

			<div className={css.cards}>
				{practicesData.map((item) => (
					<Meditation
						key={item.id}
						topText={item.topText}
						title={item.title}
						description={item.description}
						pictureSrc={item.pictureUrl}
					/>
				))}
			</div>
		</div>
	)
}