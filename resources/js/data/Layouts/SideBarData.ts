import { faBox, faChartLine, faCog, faShoppingCart, faUsers, faWarehouse, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SideBarLinksType = {
    title: string;
    icon: IconDefinition;
    href?: string;
}
export const SideBarLinks: SideBarLinksType[] = [
    { title: 'Tableau de bord', icon: faChartLine },
    { title: 'Produits', icon: faBox },
    { title: 'Inventaire', icon: faWarehouse },
    { title: 'Commandes', icon: faShoppingCart },
    { title: 'Clients', icon: faUsers },
    { title: 'Paramètres', icon: faCog },
]

