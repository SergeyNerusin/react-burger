import React from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { Tlocation } from '../../utils/type';

type Props = RouteProps & {
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}

const ProtectedRoute:React.FC<Props> = ({ children, ...rest }) => {
	const cookie = getCookie('token');
	const location = useLocation<Tlocation>();

	return (
		<Route
			{...rest}
			render={() =>
				cookie ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
} 

export default ProtectedRoute;