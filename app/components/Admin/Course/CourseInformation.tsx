import { styles } from '../../../../app/styles/styles';
import { useGetHeroDataQuery } from '../../../../redux/features/layout/layoutApi';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
    active: number;
    setActive: (active: number) => void;
};

const CourseInformation: FC<Props> = ({ courseInfo, setCourseInfo, active, setActive }) => {
    const { data } = useGetHeroDataQuery('Categories', {});

    const [dragging, setDragging] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (data) {
            setCategories(data.layout.categories);
        }
    }, [data]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setActive(active + 1);
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e: any) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-[80%] m-auto mt-24">
            <form onSubmit={handleSubmit} className={`${styles.label}`}>
                <div>
                    <label htmlFor="">Название курса</label>
                    <input
                        type="name"
                        name=""
                        required
                        value={courseInfo.name}
                        onChange={(e: any) =>
                            setCourseInfo({ ...courseInfo, name: e.target.value })
                        }
                        id="name"
                        placeholder="LMS система на стэке MERN c next13"
                        className={`${styles.input}`}
                    />
                </div>

                <br />

                <div className="mb-5">
                    <label className={`${styles.label}`}>Описание курса</label>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={8}
                        placeholder="Lorem ipsum..."
                        className={`${styles.input} !h-min !py-2`}
                        value={courseInfo.description}
                        onChange={(e: any) =>
                            setCourseInfo({ ...courseInfo, description: e.target.value })
                        }></textarea>
                </div>

                <br />

                <div className="w-full flex justify-between">
                    <div className="w-[45%]">
                        <label className={`${styles.label}`}>Цена курса</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={courseInfo.price}
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, price: e.target.value })
                            }
                            id="price"
                            placeholder="99"
                            className={`${styles.input}`}
                        />
                    </div>
                    <div className="w-[50%]">
                        <label className={`${styles.label} w-[50%]`}>
                            Ориентировочная цена (необязательно)
                        </label>
                        <input
                            type="number"
                            name=""
                            value={courseInfo.estimatedPrice}
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
                            }
                            id="price"
                            placeholder="199"
                            className={`${styles.input}`}
                        />
                    </div>
                </div>

                <br />

                <div className="w-full flex justify-between">
                    <div className="w-[45%]">
                        <label className={`${styles.label}`} htmlFor="email">
                            Теги курса
                        </label>
                        <input
                            type="text"
                            required
                            name=""
                            value={courseInfo.tags}
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, tags: e.target.value })
                            }
                            id="tags"
                            placeholder="MongoDB, Express, React, Next 13, SocketIO, TailwindCSS, Redis, Cloudinary, Typescript"
                            className={`${styles.input}`}
                        />
                    </div>

                    <div className="w-[50%]">
                        <label className={`${styles.label} w-[50%]`}>Категория курса</label>
                        <select
                            name=""
                            id=""
                            className={`${styles.select}`}
                            value={courseInfo.category}
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, categories: e.target.value })
                            }>
                            <option value="">Выбрать категорию</option>
                            {categories &&
                                categories.map((item: any) => (
                                    <option value={item.title} key={item._id}>
                                        {item.title}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <br />

                <div className="w-full flex justify-between">
                    <div className="w-[45%]">
                        <label className={`${styles.label}`}>Уровень курса</label>
                        <input
                            type="text"
                            name=""
                            value={courseInfo.level}
                            required
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, level: e.target.value })
                            }
                            id="level"
                            placeholder="Легкий/Средний/Эксперт"
                            className={`${styles.input}`}
                        />
                    </div>
                    <div className="w-[50%]">
                        <label className={`${styles.label} w-[50%]`}>Демо URL</label>
                        <input
                            type="text"
                            name=""
                            required
                            value={courseInfo.demoUrl}
                            onChange={(e: any) =>
                                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
                            }
                            id="demoUrl"
                            placeholder="eer74fd"
                            className={`${styles.input}`}
                        />
                    </div>
                </div>

                <br />

                <div className="w-full">
                    <input
                        type="file"
                        accept="image/*"
                        id="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="file"
                        className={`cursor-pointer w-full min-h-[20vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
                            dragging ? 'bg-blue-500' : 'bg-transparent'
                        }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}>
                        {courseInfo.thumbnail ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={courseInfo.thumbnail}
                                alt=""
                                className="max-h-full w-full object-cover"
                            />
                        ) : (
                            <span className="text-black dark:text-white">
                                Перетащите сюда свою миниатюру или нажмите, чтобы просмотреть
                            </span>
                        )}
                    </label>
                </div>

                <br />

                <div className="w-full flex items-center justify-end">
                    <input
                        type="submit"
                        value="След"
                        className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
                    />
                </div>

                <br />
                <br />
            </form>
        </div>
    );
};

export default CourseInformation;
