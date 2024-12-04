import SideBar from "./SideBar";

type BodyContentType = {
    children: JSX.Element | JSX.Element[];
};

export default function BodyContent({
    children
}: BodyContentType) {
    return <div className="mt-20">
        <SideBar className="bg-white shadow-lg md:fixed md:h-full md:w-1/4 lg:w-64"/>
        <main className="p-4 md:w-3/4 md:ml-[25%] lg:ml-[16rem]">
            {children}
        </main>
    </div>
}
