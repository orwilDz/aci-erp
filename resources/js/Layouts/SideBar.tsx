import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faCog, faShoppingCart, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import SideBarLink from '@/Components/Sidebar/SideBarLink';
import { AnimationScope } from 'framer-motion';
import '../../css/sidebar.css'
import { useEffect } from 'react';
import { SideBarLinks } from '@/data/Layouts/SideBarData';

type SideBarType = {
    className: string,
}
export default function SideBar({
    className,
}: SideBarType) {
    return <nav className={
        className
    }
    >
        <ul className="space-y-2">
            {SidebarItems()}
        </ul>
    </nav>
}

function SidebarItems() {

    const items: JSX.Element[] = [];
    for (let i = 0; i < SideBarLinks.length; i++) {
        const element = SideBarLinks[i];
        const item = (<SideBarLink
            key={`sidebar-item-${i}`}
            title={element.title}
            icon={element.icon}
            href={element.href} />
        );
        items.push(item);
    }

    return items;
}
