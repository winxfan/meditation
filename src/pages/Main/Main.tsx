
import css from "./Main.module.scss";
import { FeedbackSlider } from "@/pages/Main/components/FeedbackSlider";
import { PrivateMeditationClub } from "@/pages/Main/components/PrivateMeditationClub";
import { BeginningOfChange } from "@/pages/Main/components/BeginningOfChange";
import { Card } from "@/features/Card";
import banner1 from "@/assets/image/banner1.png";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.png";
import banner4 from "@/assets/image/banner4.png";
import banner5 from "@/assets/image/banner5.png";
import banner6 from "@/assets/image/banner6.png";
import banner7 from "@/assets/image/banner7.png";
import banner8 from "@/assets/image/banner8.png";
import additionalCard1 from "@/assets/image/additionalCard1.png";
import additionalCard2 from "@/assets/image/additionalCard2.png";
import additionalCard3 from "@/assets/image/additionalCard3.png";
import additionalCard4 from "@/assets/image/additionalCard4.png";
import { Hr } from "@/components/Hr";
import { LevelsSlider } from "@/pages/Main/components/LevelsSlider";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";
import {useNavigate} from "react-router-dom";
import {SubscribeBtn} from "@/components/SubscribeBtn";
import cs from "classnames";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={css.container}>
        <BeginningOfChange />
        <SubscribeBtn/>
        <PrivateMeditationClub />
        <LevelsSlider />

        <Card
          pictureUrl={banner1}
          size="large"
          className={css.banner}
          onCardClick={() => navigate('/energy365')}
          title="Энергия&nbsp;и&nbsp;ресурс 365 дней в году"
          description="База ежeденевных
           практик для вашего роста
            и достижения целей "
          buttonTitle="Перейти к практикам"
        />

        <div className={css.splitContainer}>
          <Card
            pictureUrl={banner2}
            size="small"
            className={css.bannerSmall}
            buttonTitle="Вступить"
            onCardClick={() => navigate('/community')}
            title="Сообщество"
            description="Наше сообщество — это
             сердце клуба. Это место,
             где вы всегда найдете
             поддержку, теплоту и
             понимание. "
          />

          <Card
            pictureUrl={banner3}
            buttonTitle="Подключить"
            size="small"
            className={css.bannerSmall}
            onCardClick={() => navigate('/bot')}
            title="Помощник"
            description="Бот-помощник для роста
            и трансформации: ваш
            личный навигатор перемен"
            variant="black"
          />
        </div>

        <Card
          pictureUrl={banner4}
          size="large"
          className={css.banner}
          buttonTitle="Перейти к практикам"
          onCardClick={() => navigate('/practices')}
          title="42&nbsp;еженедельных практики с Сергеем"
          description="для вашей трансформации
           и роста"
          titleWidth="250px"
        />

        <SubscribeBtn/>

        <Card
          pictureUrl={banner5}
          size="large"
          className={css.banner}
          buttonTitle="Перейти к практикам"
          onCardClick={() => navigate('/base')}
          title="База из 70 практик"
          description="Быстрый результат
и мощные изменения"
          titleWidth="250px"
          variant="black"
        />

        <Card
          pictureUrl={banner6}
          size="large"
          className={css.banner}
          buttonTitle="Начать тренировки"
          // onCardClick={() => navigate('catalogtraining')}
          title="Спорт с тренером онлайн"
          description="Эффективные тренировки
           с профессиональным
           наставником, которые
           легко встроятся в ваш день"
        />

        <Card
          pictureUrl={banner7}
          size="large"
          className={css.banner}
          align="right"
          buttonTitle="Получить разбор"
          buttonClassName={css.absoluteBtn}
          variant="black"
          onCardClick={() => navigate('/sergey')}
          title="24 разбора с диагностикой от Сергея"
          description="Эти разборы — это ключ
к вашему внутреннему
освобождению и трансформации"
        />

        <Card
          pictureUrl={banner8}
          size="large"
          className={css.banner}
          variant="black"
          buttonTitle="Начать зарабатывать"
          onCardClick={() => navigate('referal')}
          title="Круг осознанного обмена"
          description={(<>
          Присоединяйтесь к системе, где вы
          не только растёте через практики, но и получаете <b>ежемесячный пассивный доход</b>, делясь ценностями клуба с другими
        </>)}
          titleWidth="100%"
        />

        <SubscribeBtn/>

        <div className={css.splitContainer}>
          <Card
            pictureUrl={additionalCard1}
            size="small"
            className={cs(css.bannerSmall, css.additionalCard)}
            title="Куратор"
            buttonTitle="Перейти"
          />

          <Card
            pictureUrl={additionalCard2}
            size="small"
            className={cs(css.bannerSmall, css.additionalCard)}
            title="Работа по целям"
            buttonTitle="Перейти"
          />

          <Card
            pictureUrl={additionalCard3}
            size="small"
            className={cs(css.bannerSmall, css.additionalCard)}
            onCardClick={() => navigate('twelvemeet')}
            title={(
              <>12 шеринг <br/> встреч</>
            )}
            buttonTitle="Перейти"
            variant="black"
          />

          <Card
            pictureUrl={additionalCard4}
            size="small"
            className={cs(css.bannerSmall, css.additionalCard)}
            title={(
              <>Развивающие <br/> фильмы и книги</>
            )}
            buttonTitle="Перейти"
          />
        </div>
      </div>

      <FixedSubscribeBtn />
    </div>
  );
};
