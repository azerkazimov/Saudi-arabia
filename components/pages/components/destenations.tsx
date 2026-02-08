
import DestinationCard from "@/components/ui/destination-card";
import SectionHeader from "./section-header";

const destinations = [
    {
        id: 1,
        title: "Hisma Desert",
        description: "The hisma desert is a true marvel of nature, and several desert oasis.",
        image: "/hisma.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    },
    {
        id: 2,
        title: "Kafd World Trade Centre, Riyadh.",
        description: "The Towering Structure stands as a testament to Saudi Arabia’s vision for a thriving business hub.",
        image: "/kafd.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    },
    {
        id: 3,
        title: "Al Qarah Mountain",
        description: "The Mountain’s distractive rocks formations inviting adventures to explore its hidden treasure.",
        image: "/qarah.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    },
    {
        id: 4,
        title: "The best of Tabuk",
        description: "Tabuk also spelled Tabouk, the capital city of the Tabuk Region in northwestern Saudi Arabia.",
        image: "/tabuk.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    },
    {
        id: 5,
        title: "AlUIa",
        description: "AIUIa is located deep in the desert in the northwest of Saudi Arabia",
        image: "/saleh.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    },
    {
        id: 6,
        title: "The best things To do in Taif",
        description: "Taif is a city and governorate in the Makkah  Region of Saudi Arabia.",
        image: "/taif.jpg",
        traveler: {
            image: "/abdul.png",
            name: "Wazeem Al Mulk",
            status: "Traveler",
        }
    }

]

export default function Destenations() {
    return (
        <section className="mt-12 container mx-auto">
            <SectionHeader
                title="Best Destinations"
                description="Explore the enchanting landscapes of saudi Arabia, from
                            the breathtaking deserts to the stunning coastal shores."
            />
            <div className="flex flex-col md:flex-row gap-4 mt-12">
                {/* {
                    destinations.map((destination, index) => (
                        <DestinationCard 
                            key={destination.id} 
                            {...destination} 
                            height={index % 2 === 0 ? 672 : 420} 
                        />
                    ))
                } */}

                {/* First column - cards 0 and 1 */}
                <div className="flex flex-col gap-4 flex-1">
                    <DestinationCard {...destinations[0]} height={672} />
                    <DestinationCard {...destinations[1]} height={420} />
                </div>

                {/* Second column - cards 2 and 4 */}
                <div className="flex flex-col gap-4 flex-1">
                    <DestinationCard {...destinations[2]} height={672} />
                    <DestinationCard {...destinations[4]} height={420} />
                </div>

                {/* Third column - cards 3 and 5 */}
                <div className="flex flex-col gap-4 flex-1">
                    <DestinationCard {...destinations[3]} height={420} />
                    <DestinationCard {...destinations[5]} height={672} />
                </div>
            </div>
        </section>
    )
}