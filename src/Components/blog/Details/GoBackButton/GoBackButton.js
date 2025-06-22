'use client'
import left from '@/asset/left.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export const GoBackButton = () => {
  const router = useRouter();
  return <button onClick={() => router.back()} className="icon" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Image src={left} alt="eye" width={20} height={20} />
  </button>
}
