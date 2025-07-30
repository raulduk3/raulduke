// src/data/portfolio.ts

export interface PortfolioItem {
    title: string;
    url: string;
    description?: string; // Optional
    external?: boolean; // open in new tab if true
}

export const portfolio: PortfolioItem[] = [
    {
        title: "Joaquín Morales",
        url: "https://joaquinmoralesdp.com/",
        description: "Portfolio for cinematographer",
        external: true,
    },
    {
        title: "Machine Television",
        url: "https://machinetelevision-git-main-richard-alvarezs-projects.vercel.app/",
        description: "Digital market for skate brand",
        external: false,
    },
    // Add more here!
];
