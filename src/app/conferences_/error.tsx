'use client'

export default function Error({error, reset}: { error: Error & { digest?: string }, reset: () => void }) {


    return (<div>
        <h2>Sth. Wrong</h2>
        <button onClick={() => reset()}>Try Again</button>
    </div>)
}