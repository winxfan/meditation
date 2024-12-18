import { Header } from '@/components/Header';
import css from './Main.module.scss';
import { FeedbackSlider } from '@/pages/Main/components/FeedbackSlider';
import { PrivateMeditationClub } from '@/pages/Main/components/PrivateMeditationClub';
import { BeginningOfChange } from '@/pages/Main/components/BeginningOfChange';
import { Card } from '@/features/Card';
import banner1 from '@/assets/image/banner1.png';
import banner2 from '@/assets/image/banner2.png';
import banner3 from '@/assets/image/banner3.png';
import banner4 from '@/assets/image/banner4.png';
import banner5 from '@/assets/image/banner5.png';
import banner6 from '@/assets/image/banner6.png';
import banner7 from '@/assets/image/banner7.png';
import banner8 from '@/assets/image/banner8.png';
import { Hr } from '@/components/Hr';
import { LevelsSlider } from '@/pages/Main/components/LevelsSlider';
export const Main = () => {
    return (
        <div className={css.container}>
            <FeedbackSlider />
            <Hr />
            <BeginningOfChange />
            <PrivateMeditationClub />
            <LevelsSlider />

            <Card
                title="Энергия и ресурс 365 дней в году"
                description="База ежденевных практик для вашего роста и достижения целей"
                pictureUrl={banner1}
                contentWidth="60%"
                size="large"
                className={css.banner}
            />

            <div className={css.splitContainer}>
                <Card
                    title="Сообщество"
                    description="Наше сообщество — это сердце клуба. Это место, где вы всегда найдете поддержку, теплоту и понимание."
                    pictureUrl={banner2}
                    size="small"
                    className={css.banner}
                    buttonTitle="Вступить"
                />

                <Card
                    title="Помощник"
                    description="Бот-помощник для рост и трансформации: ваш личный навигатор перемен"
                    pictureUrl={banner3}
                    buttonTitle="Подключить"
                    size="small"
                    className={css.banner}
                    variant="black"
                />
            </div>

            <Card
                title="42 еженедельных практики"
                description="для вашей трансформации и роста"
                pictureUrl={banner4}
                contentWidth="60%"
                size="large"
                className={css.banner}
                buttonTitle="Перейти к практикам"
            />

            <Card
                title="База из 70 практик"
                description="для вашей трансформации и роста"
                pictureUrl={banner5}
                contentWidth="60%"
                size="large"
                className={css.banner}
                buttonTitle="Перейти к практикам"
            />

            <Card
                title="Спорт с тренером онлайн"
                description="Эффективные тренировки с профессиональным наставником, которые легко встроятся в ваш день"
                pictureUrl={banner6}
                contentWidth="60%"
                size="large"
                className={css.banner}
                buttonTitle="Начать тренировки"
            />

            <Card
                title="24 разбора с диагностикой от Сергея"
                description="Эти разборы — это ключ к вашему внутреннему освобождению и трансформации"
                pictureUrl={banner7}
                contentWidth="60%"
                size="large"
                className={css.banner}
                variant="black"
                align="right"
                buttonTitle="Скоро откроется"
            />

            <Card
                title="Круг осознанного обмена"
                description="Присоединяйтесь к системе, где вы не только растёте через практики, но и получаете ежемесячный пассивный доход,
делясь ценностями клуба
с другими"
                pictureUrl={banner8}
                contentWidth="90%"
                size="large"
                className={css.banner}
                variant="black"
                buttonTitle="Начать зарабатывать"
            />
        </div>
    );
};
