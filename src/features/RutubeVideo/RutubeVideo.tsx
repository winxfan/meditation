import React, { useEffect, useRef, useState } from "react";
import css from './RutubeVideo.module.scss';
import {LoadingStatus} from "@/constants";
import OkIcon from "@/assets/icons/ok.svg";
import ErrorIcon from "@/assets/icons/error.svg";
import {Modal} from "antd";

// Типы для свойств компонента
interface RuTubeEmbedProps {
	videoId: string; // ID RuTube видео
	width?: string | number;
	height?: string | number;
	blockTimeInSeconds?: number; // Время до блокировки воспроизведения
}

export const RuTubeVideo: React.FC<RuTubeEmbedProps> = ({
	 videoId,
	 width = 720,
	 height = 405,
	 blockTimeInSeconds = 10, // По умолчанию блокировка через 10 секунд
}) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [showPopup, setShowPopup] = useState(false); // Состояние показа попапа

	useEffect(() => {
		// Таймер для блокировки
		const timer = setTimeout(() => {
			setShowPopup(true); // Показываем попап
		}, blockTimeInSeconds * 1000);

		return () => {
			clearTimeout(timer); // Очищаем таймер при размонтировании
		};
	}, [blockTimeInSeconds]);

	// Функция для остановки видео
	const stopVideoPlayback = () => {
		if (iframeRef.current) {
			iframeRef.current.contentWindow?.postMessage(
				JSON.stringify({ type: "player:command:pause" }),
				"*"
			);
		}
	};

	// Срабатывает, как только попап показывается
	useEffect(() => {
		if (showPopup) {
			stopVideoPlayback();
		}
	}, [showPopup]);

	const closePopup = () => {
		setShowPopup(false); // Закрыть попап
	};

	return (
		<div style={{ textAlign: "center" }}>
			<iframe
				ref={iframeRef}
				src={`https://rutube.ru/play/embed/${videoId}`}
				frameBorder="0"
				allowFullScreen
				width={width}
				height={height}
				className={css.frame}
			></iframe>

			<Modal
				open={showPopup}
				onCancel={closePopup}
				footer={null}
			>
					<div className={css.modalContent}>
						<b className={css.modalTitle}>
							Полный урок доступен <br/>
							по подписке
						</b>

						<p className={css.modalDescription}>
							Вы можете оформить ее прямо сейчас и проходить программу в свободном досупе
						</p>

						<p className={css.modalDescription}>
							Комментарий успешно отправлен
						</p>
					</div>
			</Modal>
		</div>
	);
};