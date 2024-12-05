import { faGear, faSignOutAlt, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type UserMenuLinksData = {
    icon: IconDefinition;
    title: string;
    href?: string;
    color?: string;
}
export const UserMenuLinks: UserMenuLinksData[] = [
    {
        icon: faUser,
        title: 'Mon profil',
    },
    {
        icon: faGear,
        title: 'Paramètres',
    },
    {
        icon: faSignOutAlt,
        title: 'Déconnexion',
        color:'red-600'
    },
]
