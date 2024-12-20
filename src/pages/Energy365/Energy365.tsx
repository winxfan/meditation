
import css from "./Energy365.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";

import energyBg from "@/assets/image/energy365-hero.jpg";

import { Energy365Item } from "./components/Energy365Item";
import { energyList } from "@/data/energyList";
import {useBackButton} from "@/utils/hooks/useBackButton";

export const Energy365 = () => {
  useBackButton();

  return (
    <div>
      

      <div className={css.container}>
        <div
          className={css.energy__hero}
          style={{ backgroundImage: `url(${energyBg})` }}
        >
          <h4 className={css.energy__title}>
            Энергия и ресурс 365 дней в году
          </h4>
          <p className={css.energy__text}>
            Каждый цикл — это мощная трансформационная программа, которая
            направлена на проработку определённых аспектов вашего состояния
          </p>
        </div>

        <div className={css.energy__result}>
          <span>Что вы получите</span>
          <p>Простые и эффективные техники на каждый день.</p>
          <p>
            Постепенное улучшение вашего состояния: больше энергии, спокойствия
            и ясности.
          </p>
          <p>
            Закрепление результатов, чтобы изменения стали вашей новой нормой.
          </p>
        </div>

        <div className={css.energy__list}>
          {energyList.map((item, i) => {
            return (
              <Energy365Item
                key={i}
                link="single"
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>

        <FixedSubscribeBtn />
      </div>
    </div>
  );
};
