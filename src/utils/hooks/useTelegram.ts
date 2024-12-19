export const useTelegram = () => {
  return (window as any)?.Telegram?.WebApp ?? {};
  // return {
  //     expand: () => {},
  //     BackButton: {
  //         hide: () => {},
  //         offClick: (value: any) => {},
  //         onClick: (value: any) => {},
  //         show: () => {},
  //     },
  //     initDataUnsafe: {
  //         user: {
  //             id: 744529899,
  //             first_name: 'Danya',
  //         },
  //     },
  // } as any;
};

export const useTelegramWebviewProxy = () => {
  return (window as any)?.TelegramWebviewProxy ?? {};
}

export const useTelegram1 = () => {
  // @ts-ignore
  // return (window as any)?.Telegram?.WebApp ?? {};

  // return (window as any)?.Telegram?.WebApp ?? {};
  return {
    expand: () => {
    },
    BackButton: {
      hide: () => {
      },
      offClick: (value: any) => {
      },
      onClick: (value: any) => {
      },
      show: () => {
      },
    },
    HapticFeedback: {
      impactOccurred: (value: string) => {},
    },
    colorScheme: 'light' as const,
    initDataUnsafe: {
      user: {
        id: 744529899,
        first_name: 'Danya',
        username: 'winxfan'
      },
    },
    WebAppUser: {
      photo_url: undefined as any
    }
  }
}
