
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { 
    HeartIcon, LeafIcon, MatIcon, MapPinIcon, CarIcon, ClockIcon, YenIcon, 
    UsersIcon, AromaIcon, AshtangaIcon, KidsIcon 
} from './components/Icons';
import { navLinks, features, recommendations } from './constants';

const Hero = () => (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{backgroundImage: "url('./images/TOP.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 p-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                おうちの近くで<br/>ヨガを習慣にしてみませんか
            </h1>
            <p className="mt-4 text-lg md:text-xl font-sans">
                札幌市北区新琴似の小さなヨガクラス
            </p>
        </div>
    </section>
);

const Concept = () => (
    <section id="concept" className="py-20 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">新琴似ヨガクラス</h2>
            <p className="font-sans text-brand-dark leading-relaxed">
                心と身体を整える、アットホームな空間へようこそ。<br/>
                日々の喧騒から離れ、自分自身と向き合う時間。<br/>
                アロマの香りに包まれながら、深い呼吸と共に心身を解放しましょう。<br/>
                初心者の方から経験者の方まで、一人ひとりのペースに合わせた丁寧な指導を心がけています。
            </p>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark text-center mb-12">4つの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-sm transition-transform duration-300 hover:-translate-y-2">
                        <div className="flex justify-center mb-4 text-brand-terracotta">{feature.icon}</div>
                        <h3 className="font-serif text-xl text-brand-dark mb-3">{feature.title}</h3>
                        <p className="font-sans text-brand-dark text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Recommended = () => (
    <section id="recommended" className="py-20 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark text-center mb-12">こんな方におすすめ</h2>
            <ul className="space-y-6">
                {recommendations.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <div className="text-brand-green mr-4 mt-1 flex-shrink-0">{item.icon}</div>
                        <p className="font-sans text-brand-dark">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const Habit = () => (
    <section id="habit" className="py-20 md:py-32 bg-brand-terracotta bg-opacity-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-brand-dark italic leading-relaxed">
                "ヨガは特別なものではなく、日常の延長線上にあります。週に一度、自分と向き合う時間を作ることで、心と身体は驚くほど変わっていきます。一緒に、ヨガを生活の一部にしてみませんか？"
            </blockquote>
        </div>
    </section>
);

const Details = () => (
    <section id="details" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-dark mb-8">開催場所・料金・体験</h3>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <MapPinIcon className="h-6 w-6 text-brand-terracotta mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-brand-dark">場所</h4>
                                <p className="font-sans text-brand-dark font-bold">新琴似双葉福祉会館</p>
                                <p className="font-sans text-brand-dark">札幌市北区新琴似9条14丁目4-10</p>
                                <div className="flex items-center mt-2 text-brand-dark">
                                    <CarIcon className="h-5 w-5 mr-2" />
                                    <span>駐車場あり（広々スペース）</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <YenIcon className="h-6 w-6 text-brand-terracotta mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-brand-dark">料金</h4>
                                <ul className="font-sans text-brand-dark list-disc list-inside">
                                    <li>ドロップイン: 1,500円</li>
                                    <li>4回チケット: 5,500円 (2ヶ月有効)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-brand-terracotta text-white rounded-lg text-center">
                            <h4 className="font-serif text-xl font-bold mb-2">体験レッスン</h4>
                            <p className="font-sans text-2xl font-bold mb-4">500円</p>
                            <a href="https://lin.ee/Qy3wOTM" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-brand-terracotta font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-brand-beige hover:text-brand-dark">
                                体験随時受付中
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./images/kaikan.jpg" alt="新琴似双葉福祉会館" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    </section>
);

const Instructor = () => (
    <section id="instructor" className="py-20 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark text-center mb-12">インストラクター紹介</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 text-center">
                    <img src="./images/satomi-konishi-yoga-instructor.jpg" alt="Satomi" className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg" />
                </div>
                <div className="md:w-2/3">
                    <h3 className="font-serif text-2xl text-brand-dark mb-2">Satomi</h3>
                    <p className="font-sans text-brand-dark text-sm mb-4 italic">フリーランスヨガインストラクター／アロマコーディネーター</p>
                    
                    <div className="space-y-4 mb-6">
                        <p className="font-sans text-brand-dark leading-relaxed">
                            ヨガとの出会いは、自宅と会社を往復するだけだった会社員時代。運動不足だった身体に心地よい汗が流れ、会社でのストレスも忘れて夢中になれたホットヨガの開放感と爽快感にハマりました。
                        </p>
                        <p className="font-sans text-brand-dark leading-relaxed">
                            結婚・第一子の出産後も、仕事と子育ての合間を縫ってヨガを継続。「もっと深く学びたい」と思いインストラクター養成コースを受講し、フリーのヨガインストラクターとして活動をスタート。
                        </p>
                        <p className="font-sans text-brand-dark leading-relaxed font-medium">
                            "近所で続けられるヨガ" を、新琴似という地域から広めていくことが目標です。
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-serif text-lg text-brand-dark mb-3 font-bold">保有資格</h4>
                        <ul className="font-sans text-brand-dark text-sm space-y-1">
                            <li>• 2017年9月 全米ヨガアライアンス RYT200</li>
                            <li>• 2017年11月 JCCA ストレッチポールベーシックセブン インストラクター</li>
                            <li>• 2018年2月 アロマコーディネーター</li>
                            <li>• 2021年2月 YOGA Ekam Sapporo アシュタンガヨガ BASIC／POWER FLOW YOGA®</li>
                            <li>• 2022年3月 RYT300 修了・E-RYT200 取得</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Schedule = () => (
    <section id="schedule" className="py-20 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark text-center mb-12">レッスンスケジュール</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl text-brand-dark mb-2">定期レッスン</h3>
                    <p className="font-sans text-brand-dark">毎週同じ時間で開催しています</p>
                </div>
                
                {/* Weekly Schedule */}
                <div className="grid grid-cols-7 gap-2 mb-8">
                    {/* Header */}
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">月</div>
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">火</div>
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">水</div>
                    <div className="text-center font-bold text-brand-terracotta py-3 bg-brand-terracotta bg-opacity-10 rounded">木</div>
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">金</div>
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">土</div>
                    <div className="text-center font-bold text-brand-dark py-3 bg-gray-100 rounded">日</div>
                    
                    {/* Schedule Content */}
                    <div className="text-center py-8 text-gray-400">-</div>
                    <div className="text-center py-8 text-gray-400">-</div>
                    <div className="text-center py-8 text-gray-400">-</div>
                    <div className="text-center py-4 bg-brand-terracotta text-white rounded-lg">
                        <div className="font-bold text-sm mb-1">ヨガクラス</div>
                        <div className="text-xs">10:30-11:30</div>
                    </div>
                    <div className="text-center py-8 text-gray-400">-</div>
                    <div className="text-center py-8 text-gray-400">-</div>
                    <div className="text-center py-8 text-gray-400">-</div>
                </div>
                
                {/* Schedule Details */}
                <div className="bg-brand-beige p-6 rounded-lg">
                    <div className="flex items-center justify-center mb-4">
                        <ClockIcon className="h-6 w-6 text-brand-terracotta mr-3" />
                        <h4 className="font-serif text-xl text-brand-dark">木曜日クラス詳細</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <h5 className="font-bold text-brand-dark mb-2">時間</h5>
                            <p className="font-sans text-brand-dark">10:30 - 11:30</p>
                            <p className="font-sans text-brand-dark text-sm">(60分)</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-brand-dark mb-2">定員</h5>
                            <p className="font-sans text-brand-dark">6名</p>
                            <p className="font-sans text-brand-dark text-sm">(少人数制)</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-brand-dark mb-2">レベル</h5>
                            <p className="font-sans text-brand-dark">初心者〜中級者</p>
                            <p className="font-sans text-brand-dark text-sm">(どなたでも)</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <p className="font-sans text-brand-dark mb-4">
                        ※ 祝日・年末年始はお休みの場合があります<br/>
                        詳しいスケジュールはLINEでお問い合わせください
                    </p>
                    <a href="https://lin.ee/Qy3wOTM" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-terracotta text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                        体験予約・お問い合わせ
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-serif text-xl text-brand-dark mb-4">体験レッスンについて</h4>
                    <ul className="font-sans text-brand-dark text-left space-y-2">
                        <li>• 料金：500円</li>
                        <li>• 持ち物：動きやすい服装、タオル、お飲み物</li>
                        <li>• 体験の方はヨガマット無料レンタル（通常100円）</li>
                        <li>• 初心者の方も安心してご参加ください</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-serif text-xl text-brand-dark mb-4">よくあるご質問</h4>
                    <ul className="font-sans text-brand-dark text-left space-y-2">
                        <li>• 身体が硬くても大丈夫ですか？ → はい、問題ありません</li>
                        <li>• 駐車場はありますか？ → はい、広々としたスペースがあります</li>
                        <li>• 予約は必要ですか？ → はい、事前予約をお願いします</li>
                        <li>• キャンセルは可能ですか？ → はい、お早めにご連絡ください</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const App = () => {
    return (
        <div className="bg-white text-brand-dark font-sans">
            <Header navLinks={navLinks} />
            <main>
                <Hero />
                <Concept />
                <Features />
                <Recommended />
                <Habit />
                <Details />
                <Schedule />
                <Instructor />
            </main>
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
