import { useState } from 'react'
import sampleImg from '../public/images/sampleImg.png'
import Image from 'next/image'
import classnames from 'classnames'
export default function AccountCard({ name, website, logo }) {
  const [tracking, setTracking] = useState(false)
  return (
    <div className="flex items-center justify-between w-[375px]">
      <div className="flex  gap-6 items-center">
        <Image src={logo || sampleImg} height={50} width={50} />
        <div className="flex flex-col">
          <h2 className="font-bold">{name}</h2>
          <p className="text-xs text-[#808080]">{website}</p>
        </div>
      </div>
      <button
        onClick={() => setTracking(!tracking)}
        className={classnames(
          'border font-bold  font-xs px-[10px] py-2 rounded',
          {
            ' text-[#FF6059] border-[#FF6059] ': !tracking,
            ' text-[#1AAB2B] border-[#1AAB2B] ': tracking,
          },
        )}
      >
        {!tracking && 'Track'}
        {tracking && 'Tracking'}
      </button>
    </div>
  )
}
