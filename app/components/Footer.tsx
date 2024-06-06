import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer>
            <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
            <br />
            <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">О нас</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Наша история
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Политика
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">
                            Быстрые ссылки
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/courses"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Курсы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Профиль
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/course-dashboard"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Кабинет
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-[600] text-black dark:text-white">
                            Наши социальные сети
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="#How2Code"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#How2Code"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/d1mont1/How2Code"
                                    className="text-base text-black dark:text-gray-300 dark:hover:text-white">
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">
                            Контакты
                        </h3>
                        <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
                            Звоните нам: X-XXX-XXX-XXXX
                        </p>

                        <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
                            Адрес: Улица Пушкина, 17.
                        </p>
                    </div>
                </div>
                <br />
                <p className="text-center text-black dark:text-white">
                    Copyright © 2024 How2Code | Все права защищены.
                </p>
            </div>
            <br />
        </footer>
    );
};

export default Footer;
