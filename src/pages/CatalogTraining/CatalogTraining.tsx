import { Header } from "@/components/Header";
import css from "./CatalogTraining.module.scss";
import { FixedSubscribeBtn } from "@/components/FixedSubscribeBtn";
import { CatalogItem } from "./components/CatalogItem";

import { catalogList } from "@/data/catalogList";

export const CatalogTraining = () => {
  return (
    <div>
      <Header />

      <div className={css.container}>
        <h2 className={css.title}>Каталог тренировок</h2>

        <div className={css.grid}>
          {catalogList.map((item, i) => {
            return (
              <CatalogItem
                key={i}
                link="single"
                color={item.color}
                date={item.date}
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
