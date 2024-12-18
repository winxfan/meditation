import { Header } from "@/components/Header";
import css from "./Community.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";

import banner from "@/assets/image/community.png";

import {useBackButton} from "@/utils/hooks/useBackButton";
import cl from "@/pages/PageSergay/index.module.scss";
import ImageWrapper from "@/components/ImageWrapper";
import razbor_1 from "@/assets/image/community1.png";
import razbor_2 from "@/assets/image/community2.png";
import razbor_3 from "@/assets/image/community3.png";
import razbor_4 from "@/assets/image/community4.png";
import communityScreen from "@/assets/image/CommunityScreen.png";
import {Button} from "antd";

export const Сommunity = () => {
  useBackButton();

  return (
    <div>
      <Header />

      <div className={css.container}>
        <div
          className={css.twelvemeet__hero}
          style={{ backgroundImage: `url(${banner})` }}
        >
          <h4>
            Private Meditation Club -
            это прежде всего люди
          </h4>
          <p>
            Годовая система из 42 уникальных практик,
            направленных на глубокие изменения и раскрытие
            вашего потенциала. Каждое воскресенье — живая
            встреча со мной, где мы прорабатываем ключевые
            аспекты вашей жизни.
          </p>
        </div>

        <div className={cl.rabors}>
          <h3 className={cl.raborsTitle}>
            Почему наше
            сообщество особенное?
          </h3>

          <div className={cl.rabors__list}>
            <div className={cl.rabors__list__item}>
              <ImageWrapper
                className={cl.rabors__list__item__image}
                src={razbor_1}
                type="cover"
              />
              <div className={cl.rabors__list__item__text}>
                <b className={css.raborsItemTitle}>
                  Тёплая атмосфера
                </b>
                <p className={css.raborsItemDescr}>
                  Мы создаём пространство, где
                  можно быть собой, делиться
                  своими мыслями и получать
                  поддержку.
                </p>
              </div>
            </div>

            <div className={cl.rabors__list__item}>
              <ImageWrapper
                className={cl.rabors__list__item__image}
                src={razbor_2}
                type="cover"
              />
              <div className={cl.rabors__list__item__text}>
                <b className={css.raborsItemTitle}>
                  Единомышленники
                </b>
                <p className={css.raborsItemDescr}>
                  Вокруг вас люди, которые
                  понимают, что такое работа
                  над собой, и вдохновляют
                  своим примером.
                </p>
              </div>
            </div>

            <div className={cl.rabors__list__item}>
              <ImageWrapper
                className={cl.rabors__list__item__image}
                src={razbor_3}
                type="cover"
              />
              <div className={cl.rabors__list__item__text}>
                <b className={css.raborsItemTitle}>
                  Энергия роста
                </b>

                <p className={css.raborsItemDescr}>
                  Каждая встреча, обсуждение
                  и практика наполняют силой
                  и мотивируют двигаться вперёд.
                </p>
              </div>
            </div>

            <div className={cl.rabors__list__item}>
              <ImageWrapper
                className={cl.rabors__list__item__image}
                src={razbor_4}
                type="cover"
              />
              <div className={cl.rabors__list__item__text}>
                <b className={css.raborsItemTitle}>
                  Дружба и тепло
                </b>
                <p className={css.raborsItemDescr}>
                  Это место, где рождаются
                  настоящие связи и дружбы,
                  которые поддерживают даже
                  за пределами клуба.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className={css.twelvemeet__text}>
          Здесь вы не просто участник, вы — часть большой семьи, которая идёт к своим целям, поддерживая друг друга.  Это сообщество станет вашим источником вдохновения  и сил на пути к лучшей версии себя.
        </div>

        <h4 className={css.offer}>
          Присоединяйтесь, чтобы
          почувствовать, как хорошо быть среди
          тех, кто движется вперёд вместе с вами
        </h4>

        <img src={communityScreen} className={css.screen} />

        <Button className={cl.btn_go_bot}>
            Вступить в чат
        </Button>

        <FixedSubscribeBtn />
      </div>
    </div>
  );
};
