import Header from './Header/Header';
import styles from './Layout.module.scss';
import { FC } from "react"
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};


export default Layout;