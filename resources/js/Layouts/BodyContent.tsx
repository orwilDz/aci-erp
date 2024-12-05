import { useSidebar } from "@/stores/sidebar.store";
import SideBarMobile from "./SideBarMobile";
import { AnimationScope, useAnimate } from "framer-motion";
import { useEffect } from "react";
import SideBar from "./SideBar";

type BodyContentType = {
    children: JSX.Element | JSX.Element[];
};

export default function BodyContent({
    children
}: BodyContentType) {

    //Animation du side bar
    const sidebarScope = animationSideBar();



    return <div className="mt-20">
        <aside>
            <SideBarMobile refSideBar={sidebarScope} className="bg-white shadow transition-transform ease-linear fixed w-full scale-y-100 md:hidden" />
            <SideBar className="bg-white shadow h-full fixed hidden md:block md:w-1/4 lg:w-64"/>
        </aside>
        <main className="p-4 md:w-3/4 md:ml-[25%] lg:ml-[16rem]">
            {children}
        </main>
    </div>
}
function animationSideBar(): AnimationScope<any> {
    const ANUMATIONDURATION = 0.1;
    const { isOpen, firstOpen, toggleFirstOpen } = useSidebar();
    const [sidebarScope, animateSidebar] = useAnimate();
    const _animationSidebar = () => {
        if (!firstOpen) {
            toggleFirstOpen();
            return
        }
        if (isOpen) {
            animateSidebar(sidebarScope.current, { scaleY: 0 }, { duration: ANUMATIONDURATION });
        } else {
            animateSidebar(sidebarScope.current, { scaleY: 1 }, { duration: ANUMATIONDURATION });
        }
    }

    useEffect(() => {
        _animationSidebar()
    }, [isOpen]);
    return sidebarScope;
}
