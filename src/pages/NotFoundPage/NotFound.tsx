import { ErrorBlock } from "../../components/ErrorBlock";
import {useBackButton} from "@/utils/hooks/useBackButton";

export const NotFoundPage = () => {
  useBackButton();

  return (
    <ErrorBlock code={404} description="Похоже что такой страницы не существует, вернитесь на главную"/>
  );
};
