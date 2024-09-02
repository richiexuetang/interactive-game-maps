export default async function GamePage({ params }: { params: { slug: string } }) {
    const data = await fetch(`http://localhost:5001/maps/${params.slug}`);
    const maps = await data.json();
    
    return (<span>{params.slug}</span>)
}