export interface IBooksResponse {
    items: IBook[];
    kind: string;
    totalItems: number;
}

export interface IBook {
    accessInfo: IAccessInfo;
    etag: string;
    id: string;
    kind: string;
    saleInfo: ISaleInfo;
    textSnippet: string;
    searchInfo: {
        textSnippet: string;
    };
    selfLink: string;
    volumeInfo: IVolumeInfo;
}

interface IAccessInfo {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
        acsTokenLink: string;
        isAvailable: boolean;
    };
    pdf: {
        isAvailable: boolean;
        acsTokenLink: string;
    };
    acsTokenLink: string;
    isAvailable: boolean;
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
}

interface ISaleInfo {
    country: string;
    isEbook: boolean;
    saleability: string;
}

export interface IVolumeInfo {
    allowAnonLogging: boolean;
    authors: Authors;
    canonicalVolumeLink: string;
    categories: Category;
    contentVersion: string;
    description: string;
    imageLinks: IImageLink | undefined;
    industryIdentifiers: IIndustryIdentifiers[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: { containsEpubBubbles: boolean; containsImageBubbles: boolean };
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: { text: boolean; image: boolean };
    title: string;
}

interface IIndustryIdentifiers {
    type: string;
    identifier: string;
}

interface IImageLink {
    smallThumbnail: string;
    thumbnail: string;
    extraLarge?: string
    large?: string
    medium?: string
    small?: string
}

export type Authors = string[];
export type Category = string[] | undefined;
