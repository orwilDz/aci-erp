import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserMenuLinkType = {
    href?: string;
    icon: IconDefinition;
    title: string;
    color?: string
}
export default function UserMenuLink({
    href,
    icon,
    title,
    color
}:UserMenuLinkType) {
    return <li>
        <a href = {href ? href : '#'} className={`flex gap-x-2 items-baseline ${color ? 'text-'+color : ''}`}>
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
        </a>
    </li>
}
