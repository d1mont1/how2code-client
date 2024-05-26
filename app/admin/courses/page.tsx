'use client';
import React from 'react';
import Heading from '../../utils/Heading';
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import AdminProtected from '../../hooks/adminProtected';
import DashboardHero from '../../components/Admin/DashboardHero';
import AllCourses from '../../components/Admin/Course/AllCourses';

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="How2Code - Admin"
                    description="Graduation Project"
                    keywords="Programming, MERN, Redux, Machine Learning"
                />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <AllCourses />
                    </div>
                </div>
            </AdminProtected>
        </div>
    );
};

export default page;
