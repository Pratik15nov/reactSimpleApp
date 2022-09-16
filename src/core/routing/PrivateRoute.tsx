import React from 'react';
import { Route, RouteProps } from 'react-router';

import Layout from '../../components/Layout/Layout';

export interface IPrivateRouteProps extends RouteProps {
    redirectPath: string,
    // roles?: ScopeRole[]
}

// type NoticeType = {
//     msg: string;
//     action?: ReactNode;
// }

// const Notice = ({
//     msg,
//     action
// }: NoticeType) => {
//     return (
//         <Alert
//             severity="warning"
//             action={action}
//             sx={{
//                 marginY: 2
//             }}
//         >
//             {msg}
//         </Alert>
//     );
// };

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ path, component, redirectPath, ...props}) => {
    return (
        <Layout>
            <Route path={path} component={component} {...props}/>
        </Layout>
    )
};

export default PrivateRoute;