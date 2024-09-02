
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

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

const MapContainer = dynamic(() => import('apps/ui/components/MapContainer'), {
    ssr: false,
  });

export default async function MapPage({ params }: { params: { slug: string } }) {
    const data = await fetch(`http://localhost:5001/maps/by-slug/${params.slug}`);
    const maps = await data.json();
    
    return (<div>
        <MapContainer />
    </div>)
}