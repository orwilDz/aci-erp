import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faCog, faShoppingCart, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import SideBarLink from '@/Components/Sidebar/SideBarLink';
import { AnimationScope } from 'framer-motion';
import '../../css/sidebar.css'
import { SideBarLinks } from '@/data/Layouts/SideBarData';

type SideBarType = {
    className: string,
    refSideBar: AnimationScope<any>
}
export default function SideBarMobile({
    className,
    refSideBar
}: SideBarType) {
    return <nav className={
        className
    }
    style={{ transformOrigin: 'top' }}
    id="sidebar-container"
    ref={refSideBar}>
        <ul className="space-y-2">
            {SidebarItems()}
        </ul>
    </nav>
}

function SidebarItems() {

    const items: JSX.Element[] = [];
    for (let i = 0; i < SideBarLinks.length; i++) {
        const element = SideBarLinks[i];
        const item = (<SideBarLink key={`sidebar-mobile-item-${i}`}>
            <FontAwesomeIcon icon={element.icon} />
            <span>{element.title}</span>
        </SideBarLink>
        );
        items.push(item);
    }

    return items;
}
