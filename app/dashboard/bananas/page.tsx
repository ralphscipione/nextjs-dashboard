import Image from 'next/image';

export default function Page() {
    return(
        <div>
        <p>Bananas! Page</p>
        <Image
            src="/bananas/bananas.webp"   
            alt="A bunch of bananas"
            width={500}
            height={285}    
        />
        </div>
    )
}