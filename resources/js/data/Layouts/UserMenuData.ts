import { faGear, faSignOutAlt, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type UserMenuLinksData = {
    icon: IconDefinition;
    title: string;
    href?: string;
    color?: string;
  }
| {
    divider: false;
  };

export const UserMenuLinks:UserMenuLinksData[] = [
    {
        icon: faUser,
        title: 'Mon profil',
    },
    {
        icon: faGear,
        title: 'Paramètres',
    },
    {
        divider: false,
    },
    {
        icon: faSignOutAlt,
        title: 'Déconnexion',
        color:'red-600'
    },
]
