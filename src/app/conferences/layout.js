import {Suspense} from "react";
import Loading from "./loading";

export default function ConferencesLayout({children}) {

    return (

        <Suspense fallback={<Loading/>}>
            <section className="bg-gray-800">
                <nav>Nav conf</nav>
                <div>{children}</div>
            </section>
        </Suspense>);

}