import Link from "next/link";
import classes from "../styles/error.module.css"


export default function ErrorPage () {
    return (
        <>
            <h1 className={classes.error}>This is error page</h1>
            <Link href={'/'}><a>Go to Main Page</a></Link>
        </>
    )
}