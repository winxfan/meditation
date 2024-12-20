
import css from "./twelveMeet.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";

import { TwelveCard } from "./components/TwelveCard";

import hero from "@/assets/image/twelvemeet-hero.jpg";

import image1 from "@/assets/image/twelveCard-1.jpg";
import image2 from "@/assets/image/twelveCard-2.jpg";
import image3 from "@/assets/image/twelveCard-3.jpg";
import image4 from "@/assets/image/twelveCard-4.jpg";
import image5 from "@/assets/image/twelveCard-5.jpg";
import image6 from "@/assets/image/twelveCard-6.jpg";
import {useBackButton} from "@/utils/hooks/useBackButton";

export const twelveMeet = () => {
  useBackButton();

  return (
    <div>
      

      <div className={css.container}>
        <div
          className={css.twelvemeet__hero}
          style={{ backgroundImage: `url(${hero})` }}
        >
          <h4>12 встреч, где вы можете быть настоящими</h4>
        </div>

        <div className={css.twelvemeet__text}>
          Представьте пространство, где вас действительно слышат. Где можно
          выдохнуть, расслабиться и рассказать о том, что на душе. Наши
          шеринг-встречи — это не формальные обсуждения, а живая энергия,
          которая объединяет и вдохновляет.
        </div>

        <TwelveCard
          image={image1}
          title="Вы делитесь своими победами,сложностями, открытиями"
          text="Говорите столько, сколько хочется"
        />
        <TwelveCard
          image={image2}
          title="Вы слушаете, как делятся другие"
          text="Иногда одна история может стать ответом на ваш внутренний вопрос"
        />
        <TwelveCard
          image={image3}
          title="Вы уходите вдохновлённым"
          text="Это не громкие слова, это ощущение, которое хочется забрать с собой"
        />

        <h4 className={css.twelvemeet__title}>Как это изменит вашу жизнь?</h4>

        <TwelveCard
          image={image4}
          title="Вы начнёте глубже понимать себя"
          text="Когда говоришь о том, что важно, начинаешь по-другому смотреть на свои чувства и мысли"
        />
        <TwelveCard
          image={image5}
          title="Вы почувствуете больше уверенности"
          text="Видя, как другие справляются, осознаёшь: «Я тоже могу»"
        />
        <TwelveCard
          image={image6}
          title="Вы найдёте своих людей"
          text="Тех, кто принимает вас такими, какие вы есть. Без масок, ожиданий и осуждения"
        />

        <h4 className={css.twelvemeet__month}>
          Мы проводим встречи раз в месяц, чтобы вы могли регулярно наполняться
          энергией группы.
        </h4>

        <div className={css.twelvemeet__why}>
          <h4>Почему это работает?</h4>
          <p>
            Мы привыкли закрываться. Привыкли носить всё внутри. Но настоящий
            рост начинается там, где есть искренность — перед собой и перед
            другими. 12 встреч — это 12 шагов навстречу себе.
          </p>
        </div>

        <FixedSubscribeBtn />
      </div>
    </div>
  );
};
