import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import {FC, ReactNode} from "react";

const SwipeBackComponent: FC<{children: ReactNode}> = ({ children }) => {
	const navigate = useNavigate();

	// Обработчики свайпов
	const handlers = useSwipeable({
		onSwipedRight: () => navigate(-1), // Возврат на предыдущую страницу
		preventScrollOnSwipe: true,
		trackMouse: true, // Для поддержки свайпа мышью
	});

	return (
		<div {...handlers} style={{ width: "100%", height: "100%" }}>
			{children}
		</div>
	);
};

export default SwipeBackComponent;
