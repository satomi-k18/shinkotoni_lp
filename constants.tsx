
import React from 'react';
import { UsersIcon, AromaIcon, AshtangaIcon, KidsIcon, HeartIcon, LeafIcon, MatIcon } from './components/Icons';

export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: '#home', label: 'ホーム' },
    { href: '#features', label: '特徴' },
    { href: '#details', label: '詳細' },
    { href: '#instructor', label: '講師' },
    { href: '#contact', label: 'お問い合わせ' },
];

export const features = [
    {
        icon: <UsersIcon className="w-12 h-12" />,
        title: 'ご近所感覚で',
        description: '少人数制でアットホームな雰囲気。ヨガ仲間との繋がりも生まれる、地域に根ざしたクラスです。'
    },
    {
        icon: <AromaIcon className="w-12 h-12" />,
        title: 'アロマの香り',
        description: '季節やテーマに合わせたアロマを使用。香りに包まれながら、心身ともに深いリラックスを促します。'
    },
    {
        icon: <AshtangaIcon className="w-12 h-12" />,
        title: 'アシュタンガベース',
        description: '運動量のあるアシュタンガヨガをベースに、初心者でも無理なく楽しめるようアレンジしています。'
    },
    {
        icon: <KidsIcon className="w-12 h-12" />,
        title: '子連れOK',
        description: 'お子様連れでも気兼ねなくご参加いただけます。ママの心と身体のリフレッシュを応援します。'
    }
];

export const recommendations = [
    {
        icon: <HeartIcon className="w-6 h-6" />,
        text: '運動不足を解消し、健康的な身体作りをしたい方'
    },
    {
        icon: <LeafIcon className="w-6 h-6" />,
        text: '日々のストレスを解消し、心穏やかな時間を取りたい方'
    },
    {
        icon: <MatIcon className="w-6 h-6" />,
        text: 'ヨガを始めてみたいけれど、大きなスタジオは緊張してしまう方'
    },
    {
        icon: <UsersIcon className="w-6 h-6" />,
        text: '産後の心と身体のケアをしたいママさん'
    }
];
