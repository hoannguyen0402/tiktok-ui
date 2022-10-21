import Header from "../components/Header/indexs";
import styles from './DefaultLayout.module.scss'
import Sidebar from "../components/sidebar";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return (  
        <div className={cx('weapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;