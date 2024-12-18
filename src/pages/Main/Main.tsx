import { Header } from "@/components/Header";
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

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div className={css.container}>
        <FeedbackSlider />
        <Hr />
        <BeginningOfChange />
        <PrivateMeditationClub />
        <LevelsSlider />

        <Card pictureUrl={banner1} size="large" className={css.banner1} />

        <div className={css.splitContainer}>
          <Card
            pictureUrl={banner2}
            size="small"
            className={css.bannerSmall}
            buttonTitle="Вступить"
          />

          <Card
            pictureUrl={banner3}
            buttonTitle="Подключить"
            size="small"
            className={css.bannerSmall}
            buttonOnClick={() => navigate('/bot')}
          />
        </div>

        <Card
          pictureUrl={banner4}
          size="large"
          className={css.banner}
          buttonTitle="Перейти к практикам"
          buttonOnClick={() => navigate('/practices')}
        />

        <Card
          pictureUrl={banner5}
          size="large"
          className={css.banner}
          buttonTitle="Перейти к практикам"
          buttonOnClick={() => navigate('/base')}
        />

        <Card
          pictureUrl={banner6}
          size="large"
          className={css.banner}
          buttonTitle="Начать тренировки"
        />

        <Card
          pictureUrl={banner7}
          size="large"
          className={css.banner2}
          align="right"
          buttonTitle="Начать тренировки"
          buttonClassName={css.absoluteBtn}
          variant="black"
          buttonOnClick={() => navigate('/sergey')}
        />

        <Card
          pictureUrl={banner8}
          size="large"
          className={css.banner}
          variant="black"
          buttonTitle="Начать зарабатывать"
        />

        <div className={css.splitContainer}>
          <Card
            pictureUrl={additionalCard1}
            size="small"
            className={css.bannerSmall}
          />

          <Card
            pictureUrl={additionalCard2}
            size="small"
            className={css.bannerSmall}
          />

          <Card
            pictureUrl={additionalCard3}
            size="small"
            className={css.bannerSmall}
          />

          <Card
            pictureUrl={additionalCard4}
            size="small"
            className={css.bannerSmall}
          />
        </div>
      </div>

      <FixedSubscribeBtn />
    </div>
  );
};
