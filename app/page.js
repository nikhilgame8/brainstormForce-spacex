import ArticleSection from '@/components/ArticleSecton'
import HomeCarousel from '@/components/HomeCarousel'
import Pagination from '@/components/Pagination'
import SearchForm from '@/components/SearchForm'

async function getData() {
  const res = await fetch(`${process.env.LIVE_API_URL}/api/rockets`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getCapsulesData(context) {
  const res = await fetch(`${process.env.LIVE_API_URL}/api/capsules?page=${
    context.searchParams.page ? parseInt(context.searchParams.page) - 1 : 0
  }`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page = async (context) => {
  const data = await getData()
  const capsuleData = await getCapsulesData(context)


  return (
    <div className='bg-black text-white'>
      <HomeCarousel data={data} />

      {/* <TeamSection /> */}
      <SearchForm />
      <ArticleSection data={capsuleData} capsuleDataCount={capsuleData.length} />      
      {/* <NewsLetter /> */}
    </div>
  )
}

export default page;
