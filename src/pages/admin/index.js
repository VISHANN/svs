import Link from 'next/link';

export default function Admin () {
  return(
    <>
      <h1>Welcome, Admin</h1>
      <Link href="/admin/form" legacyBehavior>
        <a className='btn btn-primary'>Add yearwise results</a>
      </Link>
    </>
  )
}

Admin.getLayout = (page) => page;