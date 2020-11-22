import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetBootstrapData from './actions/BootstrapActions';
import { Content, Header, Loader, Routers, When } from './components';
import { TRootReducer } from './Store';

const App: FC = () => {
	const dispatch = useDispatch();
	const {
		loader,
		bootstrapData,
	} = useSelector((state: TRootReducer) => state);

	useEffect(() => {
		dispatch(GetBootstrapData());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />

			<When condition={bootstrapData}>
				<Content>
					<Routers />
				</Content>
			</When>

			<Loader status={loader.status} />
		</div>
	);
}

export default App;
