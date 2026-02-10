"use client";


import MembersPage from "@/components/pages/members/components/members";
import Hero from "@/components/ui/hero";


export default function Members() {


    return (
        <div>
            <Hero
                image="/about-us.jpg"
                title="About Us"
                description="Discover the country's hidden gems and breathtaking landscapes"
            />
            <MembersPage />
        </div>
    )
}