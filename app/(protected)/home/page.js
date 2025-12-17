"use client"
import React from 'react'
import SideBar from '@/components/SideBar';
import TopNavBar from '@/components/TopNavBar';
import { useState } from 'react';
import { forShortUrl } from '@/actions/useractions';

export default function SwiftLinkHome() {
    const [link, setLink] = useState("")

    const userData = () => {

    }

    const shortUrl = async (e) => {
        e.preventDefault();
        let afterShortUrl = await forShortUrl(link, email)
    }

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50">
            <div className="flex h-full min-h-screen">
                {/* SideNavBar */}
                <SideBar />

                {/* Main Content */}
                <main className="flex-1 flex flex-col">
                    {/* TopNavBar */}
                    <TopNavBar />

                    {/* Page Content */}
                    <div className="flex-1 p-10 overflow-auto">
                        <div className="max-w-4xl mx-auto">
                            {/* URL Shortener Card */}
                            <div className="p-6 rounded-xl bg-white shadow-lg">
                                <div className="flex flex-wrap items-center gap-4">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <input
                                            type='text'
                                            name='text'
                                            onChange={(e) => setLink(e.target.value)}
                                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 border border-slate-300 bg-gray-50 h-14 placeholder:text-gray-600 p-4 text-base font-normal leading-normal"
                                            placeholder="Paste a long URL to shorten..."
                                        />
                                    </label>
                                    <button type='submit' className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                                        <span className="truncate">Shorten</span>
                                    </button>
                                </div>
                            </div>

                            {/* Recent Activity Section */}
                            <div className="mt-12">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                                <div className="mt-6 flex flex-col gap-4">
                                    {/* Recent Link Item 1 */}
                                    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-semibold text-indigo-500">swift.link/xYz123</p>
                                            <p className="text-sm text-gray-600 truncate max-w-md">https://www.verylongurl-that-needs-to-be-shortened-for-sharing.com/some-article/page</p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <p className="text-sm text-gray-600 whitespace-nowrap">45 clicks - 2 mins ago</p>
                                            <button className="p-2 rounded-lg hover:bg-slate-100 text-gray-600">
                                                <span className="text-xl">📋</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Recent Link Item 2 */}
                                    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-semibold text-indigo-500">swift.link/aBcDeF</p>
                                            <p className="text-sm text-gray-600 truncate max-w-md">https://another-example-of-a-long-url-for-a-product-page.com/products/new-gadget-pro</p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <p className="text-sm text-gray-600 whitespace-nowrap">120 clicks - 1 hour ago</p>
                                            <button className="p-2 rounded-lg hover:bg-slate-100 text-gray-600">
                                                <span className="text-xl">📋</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Recent Link Item 3 */}
                                    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-semibold text-indigo-500">swift.link/gHiJkL</p>
                                            <p className="text-sm text-gray-600 truncate max-w-md">https://blog.awesomewebsite.dev/posts/how-to-build-modern-uis-with-tailwind-css</p>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <p className="text-sm text-gray-600 whitespace-nowrap">8 clicks - 5 hours ago</p>
                                            <button className="p-2 rounded-lg hover:bg-slate-100 text-gray-600">
                                                <span className="text-xl">📋</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}