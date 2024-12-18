import css from './PrivateMeditationClub.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {StepCard} from "@/pages/Main/components/StepCard";
import step1 from '@/assets/image/step1.png';
import step2 from '@/assets/image/step2.png';
import step3 from '@/assets/image/step3.png';
import step4 from '@/assets/image/step4.png';
import step5 from '@/assets/image/step5.png';
import step6 from '@/assets/image/step6.png';
import step7 from '@/assets/image/step7.png';
import step8 from '@/assets/image/step8.png';
import step9 from '@/assets/image/step9.png';
import step10 from '@/assets/image/step10.png';
import step11 from '@/assets/image/step11.png';
import step12 from '@/assets/image/step12.png';
import {useNavigate, useParams} from "react-router-dom";
import {DEFAULT_COURSE_ID} from "@/store/user/data";
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
			>
				{stepData.map((item, index) => (
					<SwiperSlide className={css.slide} key={index}>
						<StepCard
							topText={item.topText}
							title={item.title}
							description={item.description}
							onButtonClick={() => navigate(`/twelveSteps/${index + 1}`)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}