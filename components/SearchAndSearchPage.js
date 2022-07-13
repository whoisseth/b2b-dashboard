import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import sampleImg from '../public/images/sampleImg.png'
import Image from 'next/image'
import classnames from 'classnames'
import { data } from 'autoprefixer'
export default function SearchAndSearchPage({ data }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchField, setSearchField] = useState('')
  const filterSearch = data.filter((data) =>
    data
      ? data.company.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        data.slug.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        data.website.toLowerCase().includes(searchField.toLocaleLowerCase())
      : data,
  )

  return (
    <div className="relative">
      <div className="flex items-center w-[calc(100vw-243px)]  h-[60px] shadow-[4px_0px_16px_10px_rgba(30,30,30,0.08)] gap-5 z-50">
        {!searchOpen && (
          <BsSearch
            onClick={() => setSearchOpen(true)}
            className="ml-6 text-2xl text-[#BCBCBC] cursor-pointer"
          />
        )}
        {searchOpen && (
          <RiCloseFill
            onClick={() => {
              setSearchOpen(false)
            }}
            className="ml-6 text-2xl text-[#BCBCBC] cursor-pointer"
          />
        )}
        <input
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
          onClick={() => setSearchOpen(true)}
          placeholder="Search by account name or website"
          className="w-full outline-none  font-bold placeholder:font-normal"
        />
        <Bell />
      </div>
      {searchOpen && <SearchPage data={filterSearch} />}
    </div>
  )
}

function Bell() {
  return (
    <div className=" h-[25px] w-[25px] rounded bg-[#EFF3F9] flex justify-center items-center relative mr-10 cursor-pointer">
      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full border-[1px] border-white bg-[#F44336]" />
      <FaRegBell className="text-[##78797D] text-lg" />
    </div>
  )
}

function SearchPage({ data }) {
  return (
    <div className="absolute z-20 min-h-screen max-h-full w-full  bg-white pt-12 pl-14 flex justify-between">
      <div>
        <h2 className="text-[22px] font-bold text-[#808080] mb-5 ">
          Similar accounts
        </h2>
        <div className="grid grid-cols-2 gap-10 mb-40 ">
          {data.map((data, index) => (
            <AccountCard
              key={index}
              name={data.company}
              website={data.website}
            />
          ))}
        </div>
      </div>
      <RightSidebar />
    </div>
  )
}

function AccountCard({ name, website }) {
  const [tracking, setTracking] = useState(false)
  return (
    <div className="flex items-center justify-between w-[375px]">
      <div className="flex  gap-6 items-center">
        <Image src={sampleImg} height={50} width={50} />
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

function RightSidebar() {
  const [rightSideOpen, setRightSideOpen] = useState(false)

  return (
    <>
      <AiOutlineDoubleLeft
        onClick={() => setRightSideOpen(!rightSideOpen)}
        className={classnames('mr-10 mt-2 cursor-pointer 2xl:hidden', {
          '  block absolute right-36 z-40 ': rightSideOpen,
        })}
      />
      <section
        className={classnames('mr-[175px] bg-white  2xl:block', {
          '  block absolute -right-[180px] pl-12 pb-9 pr-4  rounded ': rightSideOpen,
          ' hidden ': !rightSideOpen,
        })}
      >
        <h2 className="text-[22px] font-bold text-[#808080]  mb-7">
          Similar accounts
        </h2>
        <div className="flex gap-8 flex-col">
          <p className="font-bold text-sm">Track new account</p>
          <p className="font-bold text-sm">Bulk track accounts</p>
          <p className="font-bold text-sm">Manage accounts</p>
        </div>
      </section>
    </>
  )
}
