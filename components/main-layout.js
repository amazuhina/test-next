import Link from "next/link";
import Head from "next/head";

export function MainLayout  ({children, title = 'Test Page'})  {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next, test"/>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/photos'}><a>Photos</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                  nav {
                      background-color: darkslategray;
                      height: 50px;
                      display: flex;
                      align-items: center;
                  }
                  
                  a {
                      color: #fff;
                      text-transform: uppercase;
                      text-decoration: none;
                      margin: 10px;
                  }
            `}</style>
        </>
    )
}