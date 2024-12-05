import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faCog, faShoppingCart, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import SideBarLink from '@/Components/Sidebar/SideBarLink';
import { AnimationScope } from 'framer-motion';
import '../../css/sidebar.css'

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
            <SideBarLink>
                <FontAwesomeIcon icon={faChartLine} />
                <span>Tableau de bord</span>
            </SideBarLink>
            <SideBarLink>
                <FontAwesomeIcon icon={faBox} />
                <span>Produits</span>
            </SideBarLink>
            <SideBarLink>
                <FontAwesomeIcon icon={faWarehouse} />
                <span>Inventaire</span>
            </SideBarLink>
            <SideBarLink>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Commandes</span>
            </SideBarLink>
            <SideBarLink>
                <FontAwesomeIcon icon={faUsers} />
                <span>Clients</span>
            </SideBarLink>
            <div className="divider px-2"></div>
            <SideBarLink>
                <FontAwesomeIcon icon={faCog} />
                <span>Paramètres</span>
            </SideBarLink>
        </ul>
    </nav>
}
