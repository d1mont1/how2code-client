import Image from 'next/image';
import React, { FC } from 'react';
import avatarDefault from '../../../public/assets/avatar.png';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Link from 'next/link';

type Props = {
    user: any;
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logOutHandler: any;
};

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logOutHandler }) => {
    return (
        <div className="w-full">
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 1 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
                }`}
                onClick={() => setActive(1)}>
                <Image
                    src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full border-[3px] border-[#37a39a]"
                />
                <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                    Мой профиль
                </h5>
            </div>
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 2 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
                }`}
                onClick={() => setActive(2)}>
                <RiLockPasswordLine size={20} className="dark:text-white text-black" />
                <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                    Сменить пароль
                </h5>
            </div>
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 3 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
                }`}
                onClick={() => setActive(3)}>
                <SiCoursera size={20} className="dark:text-white text-black" />
                <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                    Зарегистрированные курсы
                </h5>
            </div>
            {user.role === 'admin' ||
                (user.role === 'mentor' && (
                    <Link
                        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                            active === 6 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
                        }`}
                        href={'/admin'}>
                        <MdOutlineAdminPanelSettings
                            size={20}
                            className="dark:text-white text-black"
                        />
                        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                            Панель администратора
                        </h5>
                    </Link>
                ))}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 4 ? 'dark:bg-slate-800 bg-white' : 'bg-transparent'
                }`}
                onClick={() => logOutHandler()}>
                <AiOutlineLogout size={20} className="dark:text-white text-black" />
                <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
                    Выйти
                </h5>
            </div>
        </div>
    );
};

export default SideBarProfile;
