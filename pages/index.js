import Sidebar from '../components/Sidebar'
import SearchAndSearchPage from '../components/SearchAndSearchPage'
import mainImg from '../public/images/mainImg.png'
import Image from 'next/image'

const Home = ({ data }) => {
  console.table(data)
  return (
    <div className="flex ">
      <Sidebar />
      <div>
        <SearchAndSearchPage data={data} />
        <div className=" relative h-[1200px] w-[calc(100vw-243px)] max-w-[1409px] mx-auto">
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
