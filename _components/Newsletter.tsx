'use client';

export default function Newsletter() {
    return (
        <section className="bg-gradient-to-r from-secondary to-primary py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" /></svg>
                    </div>
                    <p className="font-bold text-lg">Be the first to receive the latest news from bytec.</p>
                </div>
                <div className="flex w-full md:w-auto bg-white rounded-full p-1.5 shadow-xl border border-gray-100">
                    <input type="email" placeholder="Email address" className="bg-transparent border-none focus:outline-none px-6 py-2 flex-grow text-primary placeholder:text-gray-400 font-medium" />
                    <button className="bg-primary text-white px-8 py-2 rounded-full font-bold hover:bg-secondary transition-all">Subscribe</button>
                </div>
            </div>
        </section>
    );
}
