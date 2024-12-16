export enum IBotStatus {
	none = 'none',
	launched = 'launched',
	startedSuccessFull = 'startedSuccessFull',
	startedWithErrors = 'startedWithErrors',
	rejectedWithTemporaryErrors = 'rejectedWithTemporaryErrors',
	rejectedWithErrors = 'rejectedWithErrors',
	stopped = 'stopped',
}

export interface IBot {
	_id: string;
	id: string;
	first_name: string,
	username: string,
	description: string;
	can_join_groups: boolean,
	can_read_all_group_messages: boolean,
	supports_inline_queries: boolean,
	token?: string | undefined;
	courseId: string;
	isActive: boolean;
	status: IBotStatus;
	avatar?: string;
}