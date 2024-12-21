export interface IUser {
	_id: string;
	id: number;
	avatar?: string,
	username: string,
	first_name: string,
	is_bot?: boolean,
	language_code?: string,
	studyHasStarted: boolean,
}

export type ITelegramUser = {
	id: string | number;
	first_name?: string;
	username?: string;
};
