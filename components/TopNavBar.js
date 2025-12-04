import React from 'react'

const TopNavBar = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-10 py-4 dark:border-slate-800 dark:bg-[#101122]">
            <label className="flex flex-col min-w-40 h-10! w-full max-w-sm">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-600 flex border-none bg-gray-50 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-50 dark:bg-slate-800 h-full placeholder:text-gray-600 px-4 text-sm font-normal leading-normal"
                        placeholder="Search your links..."
                        defaultValue=""
                    />
                </div>
            </label>
            <div className="flex flex-1 justify-end gap-4 items-center">
                <div className="flex items-center gap-3">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXCsiqPFZOvIuNZcLJBFnXYp-JrXZ3dPng225k3RaX4nm7beuTHwmrT_5SS6EXyHlgeLHuO3IKNin7ctNa5qIfUYr74V4YdKEcJU6sne_slO1sC9Tr2Ypv_rE-4FKcfQFe_24rLA4n0I43HeP2jlz5x-CIFoTBT01jPs25avaYLt3sIcQaZ0gldHbu21EM1dHUsyfM4tY7vW4tW3M8rN0_KW7W4S0NlJRqqzz0MXhCZe_unm26Xnq2vEUQniO5hCJgPIBU9fjDroqT")' }}
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Alex D.</span>
                    <span className="material-symbols-outlined text-gray-600 dark:text-slate-400">expand_more</span>
                </div>
            </div>
        </header>
    )
}

export default TopNavBar