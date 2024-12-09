import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { AnimationScope } from "framer-motion";
import { UserMenuLinks } from "@/data/Layouts/UserMenuData";
import UserMenuLink from "./UserMenuLink";

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
    className="absolute shadow  bg-white p-4 transition-transform ease-linear rounded-md top-20 border">
        <ul className="space-y-4">
            {UserMenuItems()}
        </ul>
    </nav>
}

function UserMenuItems() {

    const items: JSX.Element[] = [];
    for (let i = 0; i < UserMenuLinks.length; i++) {
        const element = UserMenuLinks[i];
        let item;
        if ('divider' in element) {
            item = <div className="divider"></div>
        }else {
            item =  (
                <UserMenuLink
                    key={`user-menu-${i}`}
                    title={element.title}
                    href={element.href}
                    icon={element.icon}
                    color={element.color}
                />)
        }
        items.push(item);
    }

    return items;
}
