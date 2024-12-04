export default function SideBarLink(
    {
        children,
        href
    }: {
        children: JSX.Element[],
        href?: string;
    }
) {
   return  <li className="text-slate-700">
        <a  className="flex items-baseline gap-x-3 p-4" href = {href ? href : '#'}>
        {children}
        </a>
    </li>
}
