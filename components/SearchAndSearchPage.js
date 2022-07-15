import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import sampleImg from '../public/images/sampleImg.png'
import Image from 'next/image'
import SearchPage from './SearchPage'
export default function SearchAndSearchPage({ data }) {
  let filterSearch
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchData, setSearchData] = useState([])
  // const getData =
  useEffect(() => {
    ;(async () => {
      const url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchValue}`
      const res = await fetch(url)
      const searchAPI = await res.json()
      setSearchData(searchAPI)
    })()
    // getData(searchValue)
  }, [searchValue])
  console.log(searchData)
  if (searchData) {
    filterSearch = searchData.filter((searchData) =>
      searchData
        ? searchData.company
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          searchData.slug
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          searchData.website
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        : searchData,
    )
  }

  const renderData = filterSearch.length > 0 ? filterSearch : data
  return (
    <div className="relative z-10">
      <div className="flex items-center w-[calc(100vw-243px)]  h-[60px] shadow-[4px_0px_16px_10px_rgba(30,30,30,0.08)] gap-5  pr-10 z-50  ">
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
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => setSearchOpen(true)}
          placeholder="Search by account name or website"
          className="w-full outline-none  font-bold placeholder:font-normal bg-inherit"
        />
        <Bell />
        <Image src={sampleImg} className="rounded" height={25} width={25} />
      </div>
      {searchOpen && (
        <SearchPage filterSearch={filterSearch} data={renderData} />
      )}
    </div>
  )
}

function Bell() {
  return (
    <div className=" h-[25px] w-[25px] rounded bg-[#EFF3F9] flex justify-center items-center relative cursor-pointer">
      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full border-[1px] border-white bg-[#F44336]" />
      <FaRegBell className="text-[##78797D] text-lg" />
    </div>
  )
}
