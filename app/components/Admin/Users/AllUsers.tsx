import React, { FC, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal } from '@mui/material';
import { AiOutlineDelete, AiOutlineMail } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { FiEdit2 } from 'react-icons/fi';
import Loader from '../../Loader/Loader';
import { format } from 'timeago.js';
import { styles } from '../../../../app/styles/styles';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
    useUpdateUserRoleMutation,
} from '../../../../redux/features/user/userApi';

type Props = {
    isTeam?: boolean;
};

const AllUsers: FC<Props> = ({ isTeam }) => {
    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState(false);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('admin');
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState('');

    const [updateUserRole, { error: updateError, isSuccess }] = useUpdateUserRoleMutation();

    const { isLoading, data, refetch } = useGetAllUsersQuery(
        {},
        { refetchOnMountOrArgChange: true },
    );

    const [deleteUser, { isSuccess: deleteSuccess, error: deleteError }] = useDeleteUserMutation(
        {},
    );

    useEffect(() => {
        if (updateError) {
            if ('data' in updateError) {
                const errorMessage = updateError as any;
                toast.error(errorMessage.data.message);
            }
        }

        if (isSuccess) {
            refetch();
            toast.success('User role updated successfully');
            setActive(false);
        }
        if (deleteSuccess) {
            refetch();
            toast.success('Delete user successfully!');
            setOpen(false);
        }
        if (deleteError) {
            if ('data' in deleteError) {
                const errorMessage = deleteError as any;
                toast.error(errorMessage.data.message);
            }
        }
    }, [updateError, isSuccess, deleteSuccess, deleteError, refetch]);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.3 },
        { field: 'name', headerName: 'Имя', flex: 0.5 },
        { field: 'email', headerName: 'Почта', flex: 0.5 },
        { field: 'role', headerName: 'Роль', flex: 0.5 },
        { field: 'courses', headerName: 'Купленные курсы', flex: 0.5 },
        { field: 'created_at', headerName: 'Дата присоединения', flex: 0.5 },
        {
            field: ' ',
            headerName: 'Удалить',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button
                            onClick={() => {
                                setOpen(!open);
                                setUserId(params.row.id);
                            }}>
                            <AiOutlineDelete className="dark:text-white text-black" size={20} />
                        </Button>
                    </>
                );
            },
        },
        {
            field: '  ',
            headerName: 'Написать',
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <a
                            href={`mailto:${params.row.email}`}
                            className="items-center justify-center flex text-center justify-items-center pt-4">
                            <AiOutlineMail className="dark:text-white text-black" size={20} />
                        </a>
                    </>
                );
            },
        },
    ];

    const rows: any = [];

    if (isTeam) {
        const newData =
            data &&
            data?.users.filter((item: any) => item.role === 'admin' || item.role === 'mentor');

        newData &&
            newData.forEach((item: any) => {
                rows.push({
                    id: item._id,
                    name: item.name,
                    email: item.email,
                    role: item.role,
                    courses: item.courses.length,
                    created_at: format(item.createdAt),
                });
            });
    } else {
        data &&
            data.users.forEach((item: any) => {
                rows.push({
                    id: item._id,
                    name: item.name,
                    email: item.email,
                    role: item.role,
                    courses: item.courses.length,
                    created_at: format(item.createdAt),
                });
            });
    }

    const handleSubmit = async () => {
        await updateUserRole({ email, role });
    };

    const handleDelete = async () => {
        const id = userId;
        await deleteUser(id);
    };

    return (
        <div className="mt-[120px] ml-[35px]">
            {isLoading ? (
                <Loader />
            ) : (
                <Box m="20px">
                    {isTeam && (
                        <div className="w-full flex justify-end">
                            <div
                                className={`${styles.button} !w-[200px] !rounded-[10px] dark:bg-[#57c7a3] !h-[35px] dark:border dark:border-[#ffffff6c]`}
                                onClick={() => setActive(!active)}>
                                Добавить нового участника
                            </div>
                        </div>
                    )}

                    <Box
                        m="40px 0 0 0"
                        height="80vh"
                        sx={{
                            '& .MuiDataGrid-root': {
                                border: 'none',
                                outline: 'none',
                            },
                            '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon': {
                                color: theme === 'dark' ? '#fff' : '#000',
                            },
                            '& .MuiDataGrid-sortIcon': {
                                color: theme === 'dark' ? '#fff' : '#000',
                            },
                            '& .MuiDataGrid-row': {
                                color: theme === 'dark' ? '#fff' : '#000',
                                borderBottom:
                                    theme === 'dark'
                                        ? '1px solid #ffffff30!important'
                                        : '1px solid #ccc!important',
                            },
                            '& .MuiTablePagination-root': {
                                color: theme === 'dark' ? '#fff' : '#000',
                            },
                            '& .MuiDataGrid-cell': {
                                borderBottom: 'none!important',
                            },
                            '& .name-column--cell': {
                                color: theme === 'dark' ? '#fff' : '#000',
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: theme === 'dark' ? '#3e4396' : '#A4A9FC',
                                borderBottom: 'none',
                                color: theme === 'dark' ? '#000' : '#000',
                            },
                            '& .MuiDataGrid-virtualScroller': {
                                backgroundColor: theme === 'dark' ? '#1F2A40' : '#F2F0F0',
                            },
                            '& .MuiDataGrid-footerContainer': {
                                color: theme === 'dark' ? '#fff' : '#000',
                                borderTop: 'none',
                                backgroundColor: theme === 'dark' ? '#3e4396' : '#A4A9FC',
                            },
                            '& .MuiCheckbox-root': {
                                color: theme === 'dark' ? `#b7ebde !important` : `#000 !important`,
                            },
                            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                                color: `#fff !important`,
                            },
                        }}>
                        <DataGrid checkboxSelection rows={rows} columns={columns} />
                    </Box>
                    {active && (
                        <Modal
                            open={active}
                            onClose={() => setActive(!active)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                                <h1 className={`${styles.title}`}>Добавить нового участника</h1>
                                <div className="mt-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Введите почту..."
                                        className={`${styles.input}`}
                                    />
                                    <select
                                        name=""
                                        id=""
                                        className={`${styles.select} !mt-6`}
                                        onChange={(e: any) => setRole(e.target.value)}>
                                        <option value="admin">Администратор</option>
                                        <option value="mentor">Ментор/Преподаватель</option>
                                        <option value="user">Пользователь</option>
                                    </select>
                                    <br />
                                    <div
                                        className={`${styles.button} my-6 !h-[30px]`}
                                        onClick={handleSubmit}>
                                        Принять
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}

                    {open && (
                        <Modal
                            open={open}
                            onClose={() => setOpen(!open)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                                <h1 className={`${styles.title}`}>
                                    Вы уверены, что хотите удалить этого пользователя?
                                </h1>
                                <div className="flex w-full items-center justify-between mb-6 mt-4">
                                    <div
                                        className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
                                        onClick={() => setOpen(!open)}>
                                        Отменить
                                    </div>
                                    <div
                                        className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
                                        onClick={handleDelete}>
                                        Удалить
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    )}
                </Box>
            )}
        </div>
    );
};

export default AllUsers;
