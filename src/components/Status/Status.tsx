import { FC, memo } from 'react';
import { useTranslation } from "react-i18next";
import css from "./Status.module.scss";
import cs from "classnames";

export type Statuses = 'passed' | 'current' | 'locked' | 'open';

export interface StatusProps {
  value: Statuses,
  short?: boolean
}

export const Status: FC<StatusProps> = memo(({value, short}) => {
  const {t} = useTranslation()

  return (
    <div className={cs(css.status, value)}>
      {!short && (
        <p>
          {t(`main:program.${value}`)}
        </p>
      )}
    </div>
  );
});
