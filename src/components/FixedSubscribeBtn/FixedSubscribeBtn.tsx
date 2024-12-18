import css from "./FixedSubscribeBtn.module.scss";

export const FixedSubscribeBtn = () => {
  return (
    <div className={css.fixedButtonContainer}>
      <div className={css.subscribeBtn}>
        <p className={css.subscribeBtnTitle}>Открыть полный доступ</p>
        <span className={css.subscribeBtnPrice}>4 990₽/мес</span>
      </div>
    </div>
  );
};
