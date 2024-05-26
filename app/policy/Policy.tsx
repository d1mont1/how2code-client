import React from 'react';
import { styles } from '../styles/styles';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Icon } from '@mui/material';

type Props = {};

const Policy = (props: Props) => {
    return (
        <div>
            <div className={'w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3'}>
                <h1 className={`${styles.title} !text-start pt-2`}>
                    Платформенные Условия и Положения
                </h1>
                <ul style={{ listStyle: 'unset', marginLeft: '35px' }}>
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            1. Цель :
                        </h1>
                        <SubdirectoryArrowRightIcon /> Цель данной политики – обеспечить эффективное
                        и безопасное использование инструмента управления курсами, предоставляемого
                        CoursePool. В данной политике изложены правила и обязанности пользователей
                        этого инструмента.
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            2. Доступ пользователей :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Доступ к инструменту управления курсами
                            ограничен авторизованными пользователями, включая администраторов,
                            зарегистрированных студентов и учащихся.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны защищать свои учетные
                            данные и не делиться информацией о своих аккаунтах с другими.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Любой несанкционированный доступ или
                            использование чужого аккаунта строго запрещены.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            3. Безопасность данных :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи несут ответственность за
                            защиту конфиденциальной информации в инструменте управления курсами,
                            включая записи студентов, оценки и другие конфиденциальные данные.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны соблюдать применимые
                            законы о защите данных и институциональные политики безопасности данных.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            4. Правила содержания :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи несут ответственность за
                            точность и уместность содержания, которое они загружают или делятся в
                            инструменте управления курсами.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Содержание, которое является
                            оскорбительным, дискриминационным или нарушает права интеллектуальной
                            собственности, строго запрещено.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            5. Коммуникация :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны ответственно и
                            профессионально использовать функции коммуникации инструмента.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Запрещается домогательство, травля или
                            любые формы оскорбительной коммуникации.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            6. Интеллектуальная собственность :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны уважать права
                            интеллектуальной собственности, включая авторские права и товарные
                            знаки, при загрузке или распространении содержания в инструменте.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи не должны загружать или
                            распространять материалы, защищенные авторским правом, без надлежащего
                            разрешения.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            7. Технические правила :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны использовать
                            инструмент управления курсами таким образом, чтобы не нарушать работу
                            системы и не ставить под угрозу ее безопасность.
                        </p>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны своевременно сообщать
                            в ИТ-поддержку о любых технических проблемах или уязвимостях.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            8. Соблюдение :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Пользователи должны соблюдать все
                            применимые законы, нормативные акты и институциональные политики при
                            использовании инструмента управления курсами.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            9. Последствия нарушения :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Нарушение данной политики может привести
                            к приостановке учетной записи, дисциплинарным мерам или правовым
                            последствиям, в зависимости от серьезности нарушения.
                        </p>
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
                            10. Обзор политики :
                        </h1>
                        <p>
                            <SubdirectoryArrowRightIcon /> Данная политика будет периодически
                            пересматриваться и обновляться по мере необходимости для обеспечения ее
                            эффективности и актуальности.
                        </p>
                    </p>
                    <br />
                </ul>
            </div>
        </div>
    );
};

export default Policy;
