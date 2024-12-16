import React, { FC } from 'react';
import css from './ErrorBlock.module.scss'
import { Button } from "../Button";
import {useNavigate, useParams} from "react-router-dom";
import {useGeneratePath} from "@/utils/hooks/useNavigation";

export interface ErrorBlockProps {
  code: string | number,
  description: string,
}

export const ErrorBlock: FC<ErrorBlockProps> = ({code, description}) => {
  const navigate = useNavigate();
  const { courseId} = useParams();
  const path = useGeneratePath({courseId});

  return (
    <div className={css.container}>
      <h1 className={css.title}>{code}</h1>
      <p className={css.description}>{description}</p>

      <Button
        variant="violet"
        className={css.button}
        onClick={() => navigate(path({}).main)}
      >
        На главную
      </Button>
    </div>
  );
};
