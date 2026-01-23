"use client";

import { Icon } from "@iconify/react";

export const ProjectVisuals = {
    "blade-and-grain": (
        <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
                {/* Canvas interno con ajuste de color por tema */}
                <div className="absolute inset-3 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-950 flex items-center justify-center">
                    <img
                        src="/blade-and-grain.png"
                        alt="Blade & Grain"
                        className="w-full h-full object-contain p-4 opacity-60 dark:opacity-40 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay: Gris medio en claro, casi negro en dark */}
                    <div className="absolute inset-0 bg-neutral-300/40 dark:bg-neutral-950/60" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="h-12 px-5 flex items-center justify-between border-b border-black/5 dark:border-white/5 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
                        <div className="w-20 h-2 bg-neutral-400 dark:bg-neutral-700 rounded-full" />
                        <div className="w-16 h-6 bg-amber-600 rounded text-[8px] font-bold flex items-center justify-center text-white tracking-tighter">
                            RESERVAR
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full border border-amber-600/30 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 shadow-xl">
                            <Icon icon="solar:scissors-linear" className="text-amber-600 dark:text-amber-500 w-7 h-7" />
                        </div>
                        <div className="w-32 h-3 bg-neutral-400/30 dark:bg-neutral-200/20 rounded-full mb-2" />
                        <div className="w-24 h-2 bg-neutral-400/20 dark:bg-neutral-200/10 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    ),

    "coffee-shop": (
        <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
                <div className="absolute inset-3 rounded-xl overflow-hidden bg-[#EFEDE6] dark:bg-[#1a110c] flex items-center justify-center">
                    <img
                        src="/coffee-shop.png"
                        alt="Coffee Shop"
                        className="w-full h-full object-contain p-4 opacity-70 dark:opacity-40 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#C4A484]/20 dark:bg-[#1a110c]/70" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="h-12 px-5 flex items-center justify-between border-b border-black/5 dark:border-white/5 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
                        <div className="w-20 h-1.5 bg-neutral-400 dark:bg-white/20 rounded-full" />
                        <div className="w-8 h-4 bg-[#C4A484]/20 border border-[#C4A484]/30 rounded flex items-center justify-center">
                             <div className="w-4 h-0.5 bg-[#C4A484] rounded-full" />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full border border-[#C4A484]/30 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 shadow-xl">
                            <Icon icon="lucide:coffee" className="text-[#8B5E3C] dark:text-[#C4A484] w-7 h-7" />
                        </div>
                        <div className="w-32 h-3 bg-neutral-400/30 dark:bg-white/20 rounded-full mb-2" />
                        <div className="w-24 h-2 bg-neutral-400/20 dark:bg-white/10 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    ),

    "vitasalud": (
        <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
                <div className="absolute inset-3 rounded-xl overflow-hidden bg-teal-50 dark:bg-[#041a15] flex items-center justify-center">
                    <img
                        src="/vitasalud.png"
                        alt="VitaSalud"
                        className="w-full h-full object-contain p-4 opacity-60 dark:opacity-30 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-teal-100/30 dark:bg-[#041a15]/80" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="h-12 px-5 flex items-center justify-between border-b border-black/5 dark:border-white/5 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
                        <div className="w-16 h-1.5 bg-teal-600/20 dark:bg-teal-200/20 rounded-full" />
                        <div className="px-2 py-1 bg-teal-600/10 dark:bg-teal-500/20 border border-teal-600/20 dark:border-teal-500/30 rounded text-[7px] text-teal-700 dark:text-teal-300 font-bold uppercase tracking-widest">
                            Vanguardia
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                        <div className="w-16 h-16 rounded-full border border-teal-600/20 dark:border-teal-500/30 bg-white/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 shadow-xl">
                            <Icon icon="solar:heart-pulse-linear" className="text-teal-600 dark:text-teal-400 w-8 h-8" />
                        </div>
                        <div className="w-28 h-2.5 bg-neutral-400/30 dark:bg-white/20 rounded-full mb-2" />
                        <div className="w-20 h-1.5 bg-neutral-400/20 dark:bg-white/10 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    ),
};