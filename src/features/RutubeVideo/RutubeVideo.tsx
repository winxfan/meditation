import React, { useEffect, useRef, useState } from "react";
import css from './RutubeVideo.module.scss';
import { Modal } from "antd";
import {SubscribeBtn} from "@/components/SubscribeBtn";

// Типы для свойств компонента
interface RuTubeEmbedProps {
	videoId: string; // ID RuTube видео
	width?: string | number;
	height?: string | number;
	blockTimeInSeconds?: number; // Время для блокировки (5 минут = 300 секунд)
}

export const RuTubeVideo: React.FC<RuTubeEmbedProps> = ({
  videoId,
  width = 720,
  height = 405,
  blockTimeInSeconds = 300, // По умолчанию блокировка через 5 минут
}) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [showPopup, setShowPopup] = useState(false); // Состояние показа попапа
	const [currentTime, setCurrentTime] = useState(0); // Текущее время воспроизведения

	// Отправка сообщения в iframe для получения текущего времени
	const requestCurrentTime = () => {
		iframeRef.current?.contentWindow?.postMessage(
			JSON.stringify({ type: "player:command:getCurrentTime" }),
			"*"
		);
	};

	useEffect(() => {
		const messageListener = (event: MessageEvent) => {
			try {
				// const currentTime = event.data.data.time;
				const data = JSON.parse(event.data);

				console.log('data',data)

				// Проверяем сообщение от RuTube Player
				if (data?.type === "player:currentTime") {
					console.log('data.data.time',data.data.time)
					setCurrentTime(data.data.time); // Обновляем текущее время
					if (data.data.time >= blockTimeInSeconds) {
						setShowPopup(true); // Показываем модальное окно
					}
				}
			} catch (error) {
				console.error("Ошибка обработки сообщения от RuTube:", error);
			}
		};

		// Добавляем слушатель сообщений
		window.addEventListener("message", messageListener);

		// Устанавливаем интервал для запроса текущего времени
		const interval = setInterval(requestCurrentTime, 1000);

		return () => {
			// Удаляем слушатель и очищаем интервал
			window.removeEventListener("message", messageListener);
			clearInterval(interval);
		};
	}, [blockTimeInSeconds]);

	// Останавливаем видео, когда показывается попап
	useEffect(() => {
		if (showPopup) {
			iframeRef.current?.contentWindow?.postMessage(
				JSON.stringify({ type: "player:pause" }),
				"*"
			);
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
						Полный урок доступен <br />
						по подписке
					</b>

					<p className={css.modalDescription}>
						Вы можете оформить ее прямо сейчас и проходить программу в свободном доступе
					</p>

					<div className={css.modalFooter}>
						<SubscribeBtn/>
					</div>
				</div>
			</Modal>
		</div>
	);
};
