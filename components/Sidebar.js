import logo from '../public/images/logo.png'
import Image from 'next/image'
import classnames from 'classnames'
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai'
import { FaRegUser, FaRegBuilding } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'
import { RiTeamLine } from 'react-icons/ri'
import { BiLink } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineExpandLess } from 'react-icons/md'
import { useState } from 'react'
// styles
const iconsStyle = 'text-[#ccc] text-xl'
const iconContainer = 'flex gap-4 items-center'
const alterStyle =
  'h-[16px] w-[57px] rounded-full  px-[7px] py-[1px] bg-[#FF7474] text-white text-[10px]  items-end'
//
const data = [
  {
    icon: <FaRegBuilding className="text-[#ccc] text-lg" />,
    title: 'Accounts',
    subData: ['Manage all', 'Track new accounts', 'Bulk Import'],
  },
  {
    icon: <FiSettings className="text-[#ccc] text-lg" />,
    title: 'Preferences',
    subData: ['Product Focus', 'Intel Preferences', 'Lead Persona'],
  },
]
export default function Sidebar() {
  return (
    <div className="w-[239px] min-h-screen max-h-full shadow-[4px_0px_16px_rgba(30,30,30,0.08)] px-4 pt-4 pb-28 z-50 ">
      <Logo />
      <div className="mt-10 flex flex-col gap-5">
        <Dashboard />
        <Intels />
        <Leads />
        {/* Accounts and Preferences */}
        {data.map((data) => {
          const [open, setOpen] = useState(false)
          return (
            <div>
              <section
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  {data.icon}
                  <p>{data.title}</p>
                </div>
                <MdOutlineExpandLess
                  className={classnames(
                    'text-[#ccc] text-2xl transition-all  ',
                    {
                      ' rotate-180 ': open,
                      ' rotate-360 ': !open,
                    },
                  )}
                />
              </section>
              {open && (
                <div className="flex items-center gap-6 ml-2">
                  <div className="w-[1px] h-[86px] bg-[#DBE0E8]" />
                  <div className="flex flex-col gap-3 my-4">
                    {data.subData.map((text) => (
                      <p className="text-sm text-[#666] ">{text}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
        <section className={iconContainer}>
          <BiLink className={iconsStyle} />
          <p>Integrations</p>
        </section>
        <section className={iconContainer}>
          <RiTeamLine className={iconsStyle} />
          <p>Team</p>
        </section>
        <section className={iconContainer}>
          <TbMessages className={iconsStyle} />
          <p>Help / Support</p>
        </section>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div className="flex mx-auto gap-[22px]   ">
      <Image src={logo} height={31} width={35} alt="" />
      <h1 className="text-[22px] font-bold">B2Brain</h1>
    </div>
  )
}

function Dashboard() {
  return (
    <div className={iconContainer}>
      <AiOutlineHome className={iconsStyle} />
      <h2 className="font-bold">Dashboard</h2>
    </div>
  )
}

function Intels() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <AiOutlineStar className={iconsStyle} />
        <p>Intels</p>
      </div>
      <div className={alterStyle}>4 unread</div>
    </section>
  )
}

function Leads() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <FaRegUser className="text-[#ccc] text-lg" />
        <p>Leads</p>
      </div>
      <div className={alterStyle}>4 unread</div>
    </section>
  )
}
