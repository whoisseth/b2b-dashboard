import Sidebar from '../components/Sidebar'
import SearchAndSearchPage from '../components/SearchAndSearchPage'
import mainImg from '../public/images/mainImg.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Home = ({ data }) => {
  let filterSearch
  console.table(data)

  const [searchValue, setSearchValue] = useState('')
  const [searchData, setSearchData] = useState([])
  if (typeof window !== 'undefined') {
    useEffect(() => {
      ;(async () => {
        const res = await fetch(
          `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchValue}`,
          {
            method: 'GET',
          },
        )
        const searchAPI = await res.json()
        setSearchData(searchAPI)
      })()
    }, [searchValue])
  }

  console.log(searchData)

  const renderData = searchData.length > 0 ? searchData : data
  return (
    <div className="flex ">
      <Sidebar />
      <div>
        <SearchAndSearchPage
          data={data}
          filterSearch={filterSearch}
          renderData={renderData}
          setSearchValue={setSearchValue}
        />
        <div className=" relative h-[1200px] w-[calc(100vw-243px)] max-w-[1409px] mx-auto -z-30">
          <Image src={mainImg} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const res = await fetch(
    `https://tva.staging.b2brain.com/search/autocomplete_org_all/`,
  )

  const data = await res.json()

  return { props: { data } }
}

// if (searchData) {
//   filterSearch = searchData.filter((searchData) =>
//     searchData
//       ? searchData.company
//           .toLowerCase()
//           .includes(searchValue.toLocaleLowerCase()) ||
//         searchData.slug
//           .toLowerCase()
//           .includes(searchValue.toLocaleLowerCase()) ||
//         searchData.website
//           .toLowerCase()
//           .includes(searchValue.toLocaleLowerCase())
//       : searchData,
//   )
// }
