export interface Movie {
    id: number,
    title: string,
    releaseDate: Date,
    genres: string[],
    productionCompanies: ProductionCompany[],
    directors: Director[],
    cast: CastMember[]
}

export interface ProductionCompany {
    id: number,
    name: string
}

export interface CastMember { 
    id: number,
    name: string
}

export interface Director {
    id: number,
    name: string
}