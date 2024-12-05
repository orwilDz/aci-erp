import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideBarLinkType = {
    href?: string;
    title: string;
    icon: IconDefinition;
};
export default function SideBarLink(
    {
        href,
        title,
        icon
    }: SideBarLinkType
) {
    return <li className="text-slate-700">
        <a className="flex items-baseline gap-x-3 p-4" href={href ? href : '#'}>
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
        </a>
    </li>
}
