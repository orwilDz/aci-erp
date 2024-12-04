import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/header.css';
import { faBars, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import UserMenu from '../Components/Header/UserMenu';
import { AnimationScope, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function HeaderBar() {

    const [handleUserMenuToggle, scopeUserMenu] = animationUserMenu();

    return <header className='fixed top-0 w-full h-20'>
        <nav className="flex justify-around items-center h-full p-4 bg-primary text-base-100">
            <button className='md:hidden'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div id="header-logo" className="items-center gap-2 hidden md:flex">
                <img src="/images/logo.png" alt="Logo aci" width={60} />
                <h2 className="font-bold text-3xl">Aci Algerie</h2>
            </div>

            <div id="header-items" className="flex gap-x-3">
                <button>
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <div id="header-user" className='flex items-center gap-x-3'>
                    <img src="https://placehold.co/32" className='rounded-full' />
                    <span className="text-white">User Name</span>
                    <button onClick={handleUserMenuToggle}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <UserMenu scopeUserMenu={scopeUserMenu} />
                </div>
            </div>
        </nav>
    </header>
}

function animationUserMenu () : [() => void , AnimationScope<any>] {

    const ANIMATIONDURATION = 0.1;

    const [scopeUserMenu, animateUserMenu] = useAnimate();
    const [isUserMenuExpanded, setIsUserMenuExpanded] = useState(false);
    const handleUserMenuToggle = () => {
        if (!isUserMenuExpanded) {
            animateUserMenu(scopeUserMenu.current, {scaleY: 1}, {duration: ANIMATIONDURATION})
        } else {
            animateUserMenu(scopeUserMenu.current, {scaleY: 0}, {duration: ANIMATIONDURATION})
        }
        setIsUserMenuExpanded(expanded => !expanded);
    }

    useEffect(() => {
        animateUserMenu(scopeUserMenu.current, {scaleY: 0}, {duration: 0})

    }, [])

    return [handleUserMenuToggle, scopeUserMenu];
}
