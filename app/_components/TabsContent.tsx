'use client';

import { useState } from 'react';

export default function TabsContent() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Medtronic", "echo-point", "envigal"];

    return (
        <section className="section bg-bg-gray">
            <div className="container">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap rounded-t-3xl overflow-hidden shadow-sm">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`flex-1 py-5 font-bold tracking-widest text-sm uppercase transition-all ${activeTab === i ? 'bg-secondary text-white' : 'bg-gray-200 text-primary hover:bg-gray-300'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Active Tab Content Area */}
                <div className="bg-white p-12 lg:p-20 rounded-b-3xl shadow-sm border-x border-b border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-primary font-bold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>{tabs[activeTab]}</h2>
                            <h3 className="text-secondary font-bold mb-8 italic" style={{ fontSize: 'var(--fs-h3)' }}>Building the Connected Operating Room of the Future</h3>
                            <p className="text-light leading-relaxed mb-8">
                                As our thought-leading focus is focused on human interaction for clinician workflows, we provide a complete end-to-end medical solution. Care, healthcare choices, and patient medical care is always and remains at the heart of our healthcare solutions. We support the system, ensuring safety, mobility, and reliability in hospitals and clinics and helping them deliver the best point of care for everyday healthcare around the world.
                            </p>
                        </div>
                        <div className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center group overflow-hidden relative text-primary">
                            <div className="grid grid-cols-10 grid-rows-10 absolute inset-0 opacity-10 pointer-events-none">
                                {Array.from({ length: 100 }).map((_, i) => <div key={i} className="border-[0.5px] border-gray-400"></div>)}
                            </div>
                            <span className="text-gray-300 font-bold uppercase tracking-widest text-sm z-10">{tabs[activeTab]} Content Image Area</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
