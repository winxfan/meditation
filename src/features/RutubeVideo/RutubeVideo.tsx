import React, { useEffect, useRef, useState } from "react";
import css from './RutubeVideo.module.scss';

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

			{/*{showPopup && (*/}
			{/*	<div*/}
			{/*		style={{*/}
			{/*			position: "fixed",*/}
			{/*			top: 0,*/}
			{/*			left: 0,*/}
			{/*			width: "100%",*/}
			{/*			height: "100%",*/}
			{/*			backgroundColor: "rgba(0, 0, 0, 0.5)",*/}
			{/*			display: "flex",*/}
			{/*			justifyContent: "center",*/}
			{/*			alignItems: "center",*/}
			{/*			zIndex: 1000,*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		<div*/}
			{/*			style={{*/}
			{/*				background: "#fff",*/}
			{/*				padding: "20px",*/}
			{/*				borderRadius: "8px",*/}
			{/*				textAlign: "center",*/}
			{/*				maxWidth: "400px",*/}
			{/*				width: "90%",*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			<h2>Доступ заблокирован</h2>*/}
			{/*			<p>Вы смотрели видео {blockTimeInSeconds} секунд.</p>*/}
			{/*			<button*/}
			{/*				onClick={closePopup}*/}
			{/*				style={{*/}
			{/*					marginTop: "10px",*/}
			{/*					padding: "10px 20px",*/}
			{/*					backgroundColor: "#007bff",*/}
			{/*					color: "#fff",*/}
			{/*					border: "none",*/}
			{/*					borderRadius: "4px",*/}
			{/*					cursor: "pointer",*/}
			{/*				}}*/}
			{/*			>*/}
			{/*				Закрыть*/}
			{/*			</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*)}*/}
		</div>
	);
};