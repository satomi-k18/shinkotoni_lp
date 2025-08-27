
import React from 'react';
import { LineIcon, InstagramIcon } from './Icons';

export const Footer = () => (
    <footer id="contact" className="bg-brand-dark text-brand-beige py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl mb-8">お問い合わせ</h2>
            <p className="font-sans mb-8">
                ご予約、ご質問などお気軽にご連絡ください。
            </p>
            <div className="flex justify-center space-x-6 mb-12">
                <a href="https://lin.ee/Qy3wOTM" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <LineIcon className="h-12 w-12 text-brand-beige transition-colors duration-300 group-hover:text-brand-terracotta" />
                    <span className="mt-2 text-sm font-sans">LINE公式</span>
                </a>
                <a href="https://www.instagram.com/satomi_sapporo__ashyoga/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <InstagramIcon className="h-12 w-12 text-brand-beige transition-colors duration-300 group-hover:text-brand-terracotta" />
                    <span className="mt-2 text-sm font-sans">Instagram</span>
                </a>
            </div>
            <p className="font-sans text-sm text-gray-400">&copy; {new Date().getFullYear()} Shinkotoni Yoga Class. All Rights Reserved.</p>
        </div>
    </footer>
);
