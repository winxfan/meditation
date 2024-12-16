import cs from 'classnames'
import css from './TgChannel.module.scss'

export interface TgChannelProps {
  title: string,
  description?: string,
  url: string,
}

export const TgChannel = (props: TgChannelProps) => {
  const { title, description, url } = props

  return (
    <a className={cs(css.container)} href={url} target="_blank">
      <div>
        <p className={css.title}>{title}</p>

        {description && (
          <p className={css.description}>{description}</p>
        )}
      </div>
    </a>
  );
};
