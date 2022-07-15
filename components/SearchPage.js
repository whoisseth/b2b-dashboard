import AccountCard from './AccountCard'
import classnames from 'classnames'
import { useState } from 'react'
import { AiOutlineDoubleLeft, AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function SearchPage({ data, filterSearch }) {
  return (
    <div className="absolute -z-10 min-h-screen max-h-full w-full  bg-white pt-12 pl-14 flex justify-between">
      <div>
        <h2 className="text-[22px] font-bold text-[#808080] mb-5 ">
          Similar accounts
        </h2>
        <div className="flex flex-wrap  gap-10 mb-40 max-w-[800px] ">
          {data.map((data, index) => (
            <AccountCard
              key={index}
              logo={data.lo}
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

function RightSidebar() {
  const [rightSideOpen, setRightSideOpen] = useState(false)

  return (
    <>
      <AiOutlineDoubleLeft
        onClick={() => setRightSideOpen(!rightSideOpen)}
        className={classnames('mr-10 mt-2 cursor-pointer 2xl:hidden  ', {
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

// {filterSearch && filterSearch.length == 0 && (
//   <div className="font-bold text-3xl   hidden">
//   <span> Searching</span>
//   <AiOutlineLoading3Quarters className="ml-2 animate-spin" />
//   <span>No Search found</span>
// </div>
// )}
