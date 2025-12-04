import React from 'react';
import Link from 'next/link';
import SideBar from '../../../components/SideBar';
import TopNavBar from '@/components/TopNavBar';

export default function Dashboard() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#171A1C] dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col">
                <div className="flex h-full w-full flex-1">

                    {/* <!-- SideNavBar --> */}
                    <SideBar />

                    {/* <!-- Main Content --> */}
                    <main className="flex flex-1 flex-col pt-0 p-6 lg:p-8 lg:pt-0">
                        <div className='-ml-8'><TopNavBar /></div>

                        <div className="w-full max-w-7xl mx-auto">
                            {/* <!-- PageHeading --> */}
                            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pt-6">
                                <div className="flex flex-col">
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">All Links</h1>
                                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage, edit, and track your shortened URLs.</p>
                                </div>
                            </div>
                            {/* <!-- Toolbar & SearchBar --> */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                                <div className="w-full sm:max-w-xs">
                                    <label className="flex flex-col w-full">
                                        <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                                            <div className="text-[#4c669a] dark:text-gray-400 flex bg-white dark:bg-[#151C2C] items-center justify-center pl-3 rounded-l-lg border border-gray-300 dark:border-gray-700 border-r-0">
                                                <span className="material-symbols-outlined text-xl">search</span>
                                            </div>
                                            <input
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151C2C] focus:border-primary h-full placeholder:text-[#4c669a] dark:placeholder:text-gray-500 px-3 pl-2 text-sm"
                                                placeholder="Search your links..."
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151C2C] px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Filter by Date</p>
                                        <span className="material-symbols-outlined text-xl text-gray-500 dark:text-gray-400">expand_more</span>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Data Table --> */}
                            <div className="bg-white dark:bg-[#151C2C] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gray-50 dark:bg-gray-900/50 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                            <tr>
                                                <th className="px-6 py-3" scope="col">Short Link</th>
                                                <th className="px-6 py-3" scope="col">Original URL</th>
                                                <th className="px-6 py-3" scope="col">Clicks</th>
                                                <th className="px-6 py-3" scope="col">Date Created</th>
                                                <th className="px-6 py-3 text-right" scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <Link className="font-medium text-primary hover:underline" href="#">swift.link/xYz123</Link>
                                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                            <span className="material-symbols-outlined text-base">content_copy</span>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                                                    <span title="https://www.amazon.com/product/Link-very-long-product-name-that-is-truncated">amazon.com/products/very-long...</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">530</td>
                                                <td className="px-6 py-4 whitespace-nowrap">Oct 24, 2023</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                        <span className="material-symbols-outlined">more_horiz</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <Link className="font-medium text-primary hover:underline" href="#">swift.link/aBcDeF</Link>
                                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                            <span className="material-symbols-outlined text-base">content_copy</span>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                                                    <span title="https://www.github.com/features/copilot/Link-very-long-url-to-be-shown">github.com/features/copilot...</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">1,204</td>
                                                <td className="px-6 py-4 whitespace-nowrap">Oct 22, 2023</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                        <span className="material-symbols-outlined">more_horiz</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <Link className="font-medium text-primary hover:underline" href="#">swift.link/hGfE32</Link>
                                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                            <span className="material-symbols-outlined text-base">content_copy</span>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                                                    <span title="https://dribbble.com/shots/20078230-Modern-Dashboard-UI-Design-for-Link-web-application">dribbble.com/shots/20078230...</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">87</td>
                                                <td className="px-6 py-4 whitespace-nowrap">Oct 21, 2023</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                        <span className="material-symbols-outlined">more_horiz</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <Link className="font-medium text-primary hover:underline" href="#">swift.link/pQ9rS8</Link>
                                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                            <span className="material-symbols-outlined text-base">content_copy</span>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                                                    <span title="https://figma.com/community/file/1234567890/some-ui-kit-resource-for-designers">figma.com/community/file...</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">982</td>
                                                <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2023</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                        <span className="material-symbols-outlined">more_horiz</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <Link className="font-medium text-primary hover:underline" href="#">swift.link/zXcVbN</Link>
                                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                            <span className="material-symbols-outlined text-base">content_copy</span>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                                                    <span title="https://tailwindcss.com/docs/utility-first-approach-to-designing-interfaces">tailwindcss.com/docs/utility...</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">2,150</td>
                                                <td className="px-6 py-4 whitespace-nowrap">Oct 15, 2023</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                                        <span className="material-symbols-outlined">more_horiz</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- Pagination --> */}
                                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-6 py-3">
                                    <button className="flex items-center gap-2 px-4 h-8 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50" disabled="">
                                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                                        Previous
                                    </button>
                                    <div className="hidden sm:flex items-center gap-1">
                                        <Link className="flex items-center justify-center size-8 rounded-lg text-sm font-medium bg-primary text-white" href="#">1</Link>
                                        <Link className="flex items-center justify-center size-8 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">2</Link>
                                        <Link className="flex items-center justify-center size-8 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">3</Link>
                                        <span className="text-gray-500">...</span>
                                        <Link className="flex items-center justify-center size-8 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">8</Link>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 h-8 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        Next
                                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
