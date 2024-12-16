export interface Mail {
	id: string;
	name: string;
	date: string;
	audience: string;
}

export enum MailTypes {
	planned = 'planned',
	sent = 'sent',
	draft = 'draft',
}

export interface IMessage {
	id?: string;
	text: string;
	photos?: string[]
	buttons?: MessageButton[]
}

export type MessageButton = {
	id: string;
	text: string;
} & ({
	type: 'url',
	url: string
} | {
	type: 'command',
	command: string
})