import React, {FC, ReactNode, useEffect} from 'react';
import css from './AppLayout.module.scss'
import cs from "classnames";
import {useTelegram} from "../utils/hooks/useTelegram";
import {userAuth} from "@/store/user/userSlice";
import {useAppDispatch} from "@/store";
import {useParams} from "react-router-dom";
import {useAppSelector} from "@/utils/hooks/redux";
import {LoadingStatus} from "@/constants";
import {QuestionCircleFilled} from "@ant-design/icons";
import {DEFAULT_COURSE_ID} from "@/store/user/data";

import 'swiper/css';
import 'swiper/css/pagination';

export interface AppLayoutProps {
  children: ReactNode,
}

export const AppLayout: FC<AppLayoutProps> = ({children}) => {
  const { courseId = DEFAULT_COURSE_ID} = useParams();
  const dispatch = useAppDispatch();
  const { colorScheme = 'light', expand, initDataUnsafe } = useTelegram();
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized);
  const {id: userId, first_name, username} = initDataUnsafe.user ?? {};

  const userStatus = useAppSelector((state) => state.user.status);
  const courseStatus = useAppSelector((state) => state.course.status);

  useEffect(() => {
    expand?.();
  }, [colorScheme])

  // useEffect(() => {
  //   if (courseId && courseStatus === LoadingStatus.none) {
  //     dispatch(getCourse({id: courseId}));
  //   };
  // }, [courseId, courseStatus])

  useEffect(() => {
    if (isAuthorized) return;

    if (!courseId) {
      // todo set notification
      return;
    }

    if (userStatus === LoadingStatus.none) {
      const data = userId ? {id: userId, first_name, username}: undefined;

      dispatch(userAuth(data));
    };
  }, [userId, courseId, isAuthorized, userStatus])

  return (
    <div className={cs(css.layout, css[colorScheme])}>
        {(!courseId) && (
          <div className={css.hintContainer}>
            <div className={css.hint}>
              <QuestionCircleFilled className={css.hintIcon} />

              <div>
                <b className={css.hintTitle}>
                  Не удалось найти курс.
                </b>
                <p className={css.hintDescription}>
                  Перейдите в бот курса и нажмите на кнопку "Изучить курс".
                </p>
              </div>
            </div>
          </div>
        )}

      <div className={css.content}>
        {children}
      </div>
    </div>
  );
};
