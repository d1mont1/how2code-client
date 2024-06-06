import React from 'react';
import { styles } from '../styles/styles';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <figure className="1500px:px-24 1500px:py-8 900px:flex bg-slate-100 rounded-xl dark:bg-black">
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <br />
                        <h1 className={`${styles.title} 800px:!text-[45px]`}>
                            Что такое <span className="text-gradient">How2Code?</span>
                        </h1>
                        <br />
                        <p className="text-lg font-medium dark:text-white text-black">
                            “Готовы ли вы поднять свои навыки программирования на новый уровень? Не
                            ищите дальше, чем How2Code, ведущая программная сообщество, посвященное
                            помощи новым программистам в достижении их целей и раскрытии их полного
                            потенциала.
                            <br />
                            <br />
                            Как основатель и генеральный директор How2Code, я знаю из первых рук о
                            трудностях, связанных с обучением и ростом в индустрии программирования.
                            Именно поэтому я создал How2Code – чтобы предоставить новым
                            программистам ресурсы и поддержку, необходимые для успеха.
                            <br />
                            <br />
                            Но How2Code – это не просто сообщество, это – семья. Наше поддерживающее
                            сообщество единомышленников готово помочь вам на каждом этапе пути, будь
                            то начало вашего пути или стремление к новому уровню мастерства.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">how2code@gmail.com</div>
                        <div className="text-slate-700 dark:text-slate-500">
                            Дінмұхаммед, Казахстан
                        </div>
                    </figcaption>
                </div>
            </figure>
            <div>
                <br />
                <h1 className={`${styles.title} 800px:!text-[45px]`}>
                    Раскрытие информации о создателе <span className="text-gradient">How2Code</span>
                </h1>
                <br />
                <br />

                <div className="lg:px-80 lg:flex md:flex sm:block mx-10 sm:mx-0">
                    <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10 sm:my-0">
                        <div className="flex flex-col items-center pb-10">
                            <h5 className="mb-1 mt-8 text-xl font-medium text-gray-900 dark:text-white">
                                Өмірзақ Дінмұхаммед
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Студент-выпускник
                            </span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <Link
                                    href="https://www.github.com/d1mont1/"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    GitHub
                                </Link>

                                <Link
                                    href="https://www.instagram.com/d1mont1/"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                    Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                    {window.innerWidth <= 650 && <br />}
                </div>
            </div>
        </>
    );
};

export default About;
