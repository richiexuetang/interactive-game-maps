import Image from "next/image";
import Link from "next/link";

interface Map {
    mapSlug: string;
    mapTitle: string;
    thumbnailUrl: string;
    id: string;
    minZoom: number;
    maxZoom: number;
    defaultZoom: number;
    tilePath:  number;
}

export default async function GamePage({ params }: { params: { slug: string } }) {
    const data = await fetch(`http://localhost:5001/maps/${params.slug}`);
    const maps = await data.json();
    
    return (<div>
        {maps.map((m: Map) => (
            <div key={m.id}>
                <Link href={`/map/${m.mapSlug}`}>
                    <Image 
                    src={process.env.CDN_BASE_URL + m.thumbnailUrl}
                    width={250}
                    height={250}
                    alt={`${m.mapTitle} thumbnail`}
                    />
                    <span>{m.mapTitle}</span>
                </Link>
            </div>
        ))}
    </div>)
}