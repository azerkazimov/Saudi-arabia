"use client";

import Hero from "@/components/ui/hero";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Member {
    id: number;
    login: string;
    avatar_url: string;
}

export default function Members() {


    return (
        <div>
            <Hero
                image="/about-us.jpg"
                title="About Us"
                description="Discover the country's hidden gems and breathtaking landscapes"
            />
        </div>
    )
}