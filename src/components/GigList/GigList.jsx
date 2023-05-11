import React, { useEffect, useState } from 'react'
import Gig from '../Gig/Gig';

export default function GigList() {
    const [gigs, setGigs] = useState([]);

    useEffect(()=> {
        async function fetchGigs() {
            const response = await fetch("/api/gigs");
            const data = await response.json();
            setGigs(data);
        }
        fetchGigs();
    },[])
  return (
    <>
        <div>
            {gigs.map((gig) => (
                <Gig key={gig._id} gig={gig} />
            ))}
        </div>
    </>
  )
}
