import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSignOut, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { AnimationScope, useAnimate } from "framer-motion";

export default function UserMenu(
    {
        scopeUserMenu,
    } : {
        scopeUserMenu: AnimationScope<any>
    }
) {
    return <nav ref={scopeUserMenu}
    style={{ transformOrigin: 'top' }}
    id="nav-user-menu"
    className="absolute shadow  bg-white p-4 rounded-md top-20 text-slate-800 border">
        <ul className="space-y-4">
            <li>
                <a href="#" className="flex gap-x-2 items-baseline">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Mon profil</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex gap-x-2 items-baseline">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Paramètres</span>
                </a>
            </li>
            <div className="divider"></div>
            <li>
                <a href="#" className="flex gap-x-2 items-center text-red-600">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Déconnexion</span>
                </a>
            </li>
        </ul>
    </nav>
}
