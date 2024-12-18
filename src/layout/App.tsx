import { Suspense } from 'react'
import { AppLayout } from './AppLayout'
import { ErrorCatch } from '../components/ErrorCatch'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Outlet } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import { ConfigProvider } from 'antd'
import theme from '@/config/Theme'

export const App = () => {
	return (
		<ConfigProvider theme={theme}>
			<ErrorCatch>
				<Provider store={store}>
					<QueryParamProvider adapter={ReactRouter6Adapter}>
						<AppLayout>
							<Suspense>
								<Outlet />
							</Suspense>
						</AppLayout>
					</QueryParamProvider>
				</Provider>
			</ErrorCatch>
		</ConfigProvider>
	)
}
