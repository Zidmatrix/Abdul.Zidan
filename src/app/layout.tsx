import type { Metadata } from 'next';
import './globals.css';
import './additions.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://zidmatrix.github.io'),
 title:'The Zidan Edit — Abdulrahman Zidan / Sales & Lead Management',
 description:'3+ years in U.S. real estate. Cold calling, lead management, appointment setting and sales-focused remote support. Cairo, Egypt. Working with U.S. teams.',
 alternates:{canonical:'/Abdul.Zidan/'},
 openGraph:{title:'The Zidan Edit — The person. The practice.',description:'Real Estate Sales & Lead Management',url:'/Abdul.Zidan/',type:'website',images:[{url:'/Abdul.Zidan/profile.jpg',width:640,height:640}]},
 twitter:{card:'summary_large_image',title:'Abdulrahman Zidan',description:'Real Estate Sales & Lead Management',images:['/Abdul.Zidan/profile.jpg']},
 icons:{icon:'/Abdul.Zidan/icon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
