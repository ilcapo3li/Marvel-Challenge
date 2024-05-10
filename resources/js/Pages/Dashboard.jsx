import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactECharts from '@/Pages/Charts/Dynamic';
import PieChart from '@/Pages/Charts/PieChart';
import Tree from '@/Pages/Charts/Tree';
import Graph from '@/Pages/Charts/Graph';
import Gauge from '@/Pages/Charts/Gauge';
import Nightingale from '@/Pages/Charts/Nightingale';

import { Head } from '@inertiajs/react';
// import * as echarts from 'echarts';
import LagRadar from 'react-lag-radar';
import { SeriesModel } from 'echarts';



export default function Dashboard({ auth }) {
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="p-6">
                <div className="row bg-gray-200 p-3 rounded grid grid-cols-3 gap-4 shadow-sm">


                    <div className="">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Nightingale />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Gauge />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900" id="chart">
                                <ReactECharts />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-gray-200 p-3 rounded grid grid-cols-2 gap-4 shadow-sm">

                    <div className="">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Tree />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <LagRadar size="200" />
        </AuthenticatedLayout>
    );
}
