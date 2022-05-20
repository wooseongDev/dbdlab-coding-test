import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  }
}

export default Home
