import { Header } from "@/components/Header";
import css from "./Energy365Single.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";

import image from "@/assets/image/energy-image.jpg";

export const Energy365Single = () => {
  return (
    <div>
      <Header />

      <div className={css.container}>
        <div className={css.info} style={{ backgroundImage: `url(${image})` }}>
          <h4>Ресурсное состояние</h4>
          <p>
            Практика для ежедневной настройки на гармонию, устранения тревоги и
            пробуждения энергии для продуктивного дня и исполнения целей
          </p>
        </div>

        <h4 className={css.join}>
          Присоединяйтесь, чтобы почувствовать мощь изменений уже после первой
          практики!
        </h4>

        <FixedSubscribeBtn />
      </div>
    </div>
  );
};
