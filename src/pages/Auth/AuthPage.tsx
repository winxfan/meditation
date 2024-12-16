import {useEffect} from 'react';
import {LoadingOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import {LoadingStatus} from "@/constants";
import {useAppDispatch} from "@/store";
import {useAppSelector} from "@/utils/hooks/redux";
import {setCookie} from "@/utils/cookie";
import {userAuth} from "@/store/user/userSlice";
import {useGeneratePath} from "@/utils/hooks/useNavigation";

export const AuthPage = () => {
	const {token} = useParams();
	const {courseId} = useParams();
	const path = useGeneratePath({courseId});
	const navigate = useNavigate();
	const dispatch = useAppDispatch()

	const status = useAppSelector((state) => state.user.status)

	useEffect(() => {
		if (token) {
			// document.cookie = `authtoken=${token}`
			// todo
			setCookie('authtoken', token, {
				// 30 days
				'max-age': 30 * 24 * 60 * 60
			})

			if (courseId) {
				dispatch(userAuth({courseId}));
			}
		}
	}, [dispatch, token, courseId]);

	if (!token) {
		return (
			<p>
				token was not found
			</p>
		)
	}

	if (status === LoadingStatus.pending) {
		return (
			<LoadingOutlined/>
		);
	}

	if (status === LoadingStatus.error) {
		return (
			<p>
				токен невалидный
			</p>
		)
	}

	if (status === LoadingStatus.success) {
		navigate(path({}).main);

		return (
			<p>
				одну минуту, вы попадете на главную страницу
			</p>
		)
	}

	return (
		<p>
			ошибка
		</p>
	)
};