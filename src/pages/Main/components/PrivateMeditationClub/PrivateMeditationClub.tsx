import css from './PrivateMeditationClub.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {StepCard} from "@/pages/Main/components/StepCard";
import {useNavigate} from "react-router-dom";
import {stepData} from "@/pages/Main/components/PrivateMeditationClub/data";

export const PrivateMeditationClub = () => {
	const navigate = useNavigate();

	return (
		<div className={css.container}>
			<div className="header">
				<p className={css.topText}>
					Private Meditation Club
				</p>

				<p className={css.title}>
					Экосистема <br/>
					для твоей трансформации и финансового роста
				</p>
			</div>

			<div className={css.footer}>
				<p className={css.description}>
					12 трансформационных шагов <br/>
					<b>к вашей жизни мечты</b>
				</p>
			</div>

			<Swiper
				slidesPerView="auto"
				spaceBetween={6}
				className={css.slider}
				speed={600} // Set transition speed in milliseconds
			>
				{stepData.map((item, index) => (
					<SwiperSlide className={css.slide} key={index}>
						<StepCard
							topText={item.topText}
							title={item.title}
							description={item.description}
							pictureSrc={item.picture}
							onCardClick={() => navigate(`/twelveSteps/${index + 1}`)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}