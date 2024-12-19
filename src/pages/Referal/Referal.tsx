import { Header } from "@/components/Header";
import css from "./Referal.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";

import roundBg from "@/assets/image/round-bg.jpg";
import {useBackButton} from "@/utils/hooks/useBackButton";

export const Referal = () => {
  useBackButton();

  return (
    <div>
      <Header />

      <div className={css.container}>
        <div
          className={css.round}
          style={{ backgroundImage: `url(${roundBg})` }}
        >
          <h4>Получай пассивный доход <br/> от 24 000 руб. в месяц </h4>

          {/*<h5>*/}
          {/*  Получай пассивный доход от 24 000 руб. в месяц*/}
          {/*</h5>*/}

          <p>
            «Круг осознанного обмена» — это уникальная система реферальных
            выплат, где каждый участник клуба может не только развиваться через
            практики, но и зарабатывать, делясь ценностями клуба с другими
          </p>
        </div>

        <h4 className={css.referal__title}>Почему это выгодно?</h4>

        <div className={css.referal__why}>
          <h4>Вы быстро возвращаете свои вложения</h4>
          <p>
            Пригласите всего 3 человека, и вы уже покрываете почти всю стоимость
            своего участия. А пригласив 5 или больше, вы начнёте зарабатывать!
          </p>
        </div>

        <div className={css.referal__why}>
          <h4>Вы зарабатываете постоянно</h4>
          <p>
            Выплаты идут каждый месяц, пока вы и ваши приглашенные остаются в клубе.
          </p>
        </div>

        <h4 className={css.referal__title}>Как это работает?</h4>

        <div className={css.payments}>
          <h4 className={css.payments__title}>
            Выплаты за личных приглашенных (1 уровень): свой круг
          </h4>
          <p className={css.payments__text}>
            Пригласите всего 3 человека, и вы уже покрываете почти всю стоимость
            своего участия. А пригласив 5 или больше, вы начнёте зарабатывать!
          </p>
          <ul className={css.payments__list}>
            <li>
              <p>
                <b>1 человек</b>
              </p>
              <p>
                <b>1 000 ₽</b> за каждого ежемесячно
              </p>
            </li>
            <li>
              <p>
                <b>3 человека</b>
              </p>
              <p>
                <b>1 200 ₽</b> за каждого ежемесячно
              </p>
            </li>
            <li>
              <p>
                <b>5 человек</b>
              </p>
              <p>
                <b>1 500 ₽</b> за каждого ежемесячно
              </p>
            </li>
            <li>
              <p>
                <b>8 человека</b>
              </p>
              <p>
                <b>1 800 ₽</b> за каждого ежемесячно
              </p>
            </li>
            <li>
              <p>
                <b>12 человека</b>
              </p>
              <p>
                <b>2 000 ₽</b> за каждого ежемесячно
              </p>
            </li>
          </ul>
          <p className={css.payments__text}>
            Условия выплат могут меняться в зависимости от этапов развития
            проекта
          </p>
          <p className={css.payments__text}>
            <span>
              Каждое достижение открывает вам новые финансовые возможности,
              повышая выплаты за всех ваших приглашенных.
            </span>
          </p>
        </div>

        <div className={css.payments}>
          <h4 className={css.payments__title}>
            Выплаты за круг (2 и 3 уровни)
          </h4>
          <p className={css.payments__text}>
            Пригласите всего 3 человека, и вы уже покрываете почти всю стоимость
            своего участия. А пригласив 5 или больше, вы начнёте зарабатывать!
          </p>
          <ul className={css.payments__list}>
            <li>
              <p>
                <b>1 человек</b>
              </p>
              <p>
                <b>1000 ₽</b> за каждого ежемесячно
              </p>
            </li>
            <li>
              <p>
                <b>3 человека</b>
              </p>
              <p>
                <b>1200 ₽</b> за каждого ежемесячно
              </p>
            </li>
          </ul>
          <p className={css.payments__text}>
            Условия выплат могут меняться в зависимости от этапов развития
            проекта
          </p>
          <p className={css.payments__text}>
            <span>
              Каждое достижение открывает вам новые финансовые возможности,
              повышая выплаты за всех ваших приглашенных.
            </span>
          </p>
        </div>

        <div className={css.example}>
          <span className={css.example__number}>Пример 1</span>
          <h4 className={css.example__title}>Вы пригласили 3 человека</h4>
          <p className={css.example__text}>
            Представьте, что вы рассказали о клубе своим подругам или коллегам,
            и они присоединились. За каждую приглашённую вы получаете 1200
            рублей в месяц
          </p>
          <div className={css.example__income}>
            <h4>Итого доход:</h4>
            <p>3 человека x 1200 руб = 3 600 руб в месяц</p>
          </div>
          <p className={css.example__text}>
            Вы почти полностью покрыли стоимость участия в клубе, осталось всего
            1400 рублей. А если пригласите ещё пару человек, начнёте
            зарабатывать
          </p>
        </div>

        <div className={css.example}>
          <span className={css.example__number}>Пример 2</span>
          <h4 className={css.example__title}>
            Вы пригласили 8 человек, а они пригласили по 2 человека
          </h4>
          <p className={css.example__text}>
            Вы рассказали о клубе 8 людям — друзьям, коллегам или даже в
            соцсетях.За каждого вы получаете 1800 рублей.Они тоже делятся клубом
            и приглашают по 2 человека, расширяя ваш круг
          </p>
          <div className={css.example__income}>
            <h4>Доход:</h4>
            <b>Ваш доход 1 уровень (8 человек):</b>
            <p>8 человек x 1800 рублей = 14 400 рублей в месяц</p>
            <b>Ваш доход 2 уровень (16 человек):</b>
            <p>16 человек х 500 рублей = 8000 рублей в месяц</p>
          </div>
          <p className={css.example__text}>
            <b>Общий доход: 22 400 рублей в месяц</b>
          </p>
          <p className={css.example__text}>
            Ваш доход уже серьёзно превышает стоимость участия, и вы создаёте
            запас на отпуск, покупки или мечту.
          </p>
        </div>

        <div className={css.example}>
          <span className={css.example__number}>Пример 3</span>
          <h4 className={css.example__title}>
            Вы пригласили 12 человек, они пригласили по 5, а те - по 3
          </h4>
          <p className={css.example__text}>
            Вы решили поработать над своим кругом и рассказали о клубе 12 людям.
            Ваши знакомые пригласили своих друзей, и круг начал расти
          </p>
          <div className={css.example__income}>
            <h4>Доход:</h4>
            <b>Ваш 1 уровень (12 человек):</b>
            <p>12 человек х 2000 рублей = 24 000 руб/мес</p>
            <b>Ваш 2 уровень (60 человек):</b>
            <p>60 человек х 500 рублей = 30 000 руб/мес.</p>
            <b>Ваш 3 уровень (180 человек):</b>
            <p>180 человек х 250 рублей = 45 000 рублей в месяц</p>
          </div>
          <p className={css.example__text}>
            <b>Общий доход: 99 000 рублей в месяц</b>
          </p>
          <p className={css.example__text}>
            Вы превращаете участие в клубе в стабильный доход, который
            поддерживает вас и вашу семью
          </p>
        </div>

        <FixedSubscribeBtn />
      </div>
    </div>
  );
};
