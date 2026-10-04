'use client';
import {useEffect,type ReactNode,type MouseEvent} from 'react';
import {asset} from '@/lib/content';
export function Arrow({diagonal=false}:{diagonal?:boolean}){return <span aria-hidden="true" className="arrow">{diagonal?'↗':'→'}</span>;}
export function Label({number,children}:{number:string;children:ReactNode}){return <div className="section-label"><span>{number}</span><span>{children}</span><span className="label-rule"/></div>;}
export function Magnetic({children,className='',...props}:{children:ReactNode;className?:string;href?:string;onClick?:()=>void}){
 const move=(e:MouseEvent<HTMLElement>)=>{if(document.documentElement.dataset.motion==='reduce'||matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(pointer: fine)').matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',`${(e.clientX-r.left-r.width/2)*.09}px`);e.currentTarget.style.setProperty('--my',`${(e.clientY-r.top-r.height/2)*.09}px`);};
 const reset=(e:MouseEvent<HTMLElement>)=>{e.currentTarget.style.setProperty('--mx','0px');e.currentTarget.style.setProperty('--my','0px');};
 return props.href?<a {...props} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={reset}>{children}</a>:<button {...props} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={reset}>{children}</button>;
}
export function CvLink({className=''}:{className?:string}){return <a className={className} href={asset('Abdulrahman-Zidan-CV.pdf')} target="_blank" rel="noreferrer">VIEW CV <Arrow diagonal/></a>;}
export function useDialog(open:boolean,ref:React.RefObject<HTMLDialogElement|null>,close:()=>void){
 useEffect(()=>{
  const dialog=ref.current;if(!dialog)return;
  if(!open){if(dialog.open)dialog.close();return;}
  const before=document.activeElement as HTMLElement|null;
  dialog.showModal();const overflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const cancel=(event:Event)=>{event.preventDefault();close();};dialog.addEventListener('cancel',cancel);
  return ()=>{dialog.removeEventListener('cancel',cancel);if(dialog.open)dialog.close();document.body.style.overflow=overflow;before?.focus();};
 },[open,ref,close]);
}
