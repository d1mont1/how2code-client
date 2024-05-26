'use client';
import React from 'react';
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar';
import Heading from '../../../app/utils/Heading';
import OrdersAnalytics from '../../components/Admin/Analytics/OrderAnalytics';
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title="How2Code | Admin"
                description="Graduation Project"
                keywords="Programming, App Development, Web Development, DevOps, Engineering, Machine Learning, UPSC, Cyber Security, Maths, Gate, Jee, Neet"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    <OrdersAnalytics />
                </div>
            </div>
        </div>
    );
};

export default page;
