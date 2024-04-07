export interface IFurnitureData
{
    type: string;
    id: number;
    className: string;
    fullName: string;
    category: string;
    hasIndexedColor: boolean;
    colorIndex: number;
    tileSizeX: number;
    tileSizeY: number;
    tileSizeZ: number;
    colors: number[];
    name: string;
    description: string;
    adUrl: string;
    purchaseOfferId: number;
    rentOfferId: number;
    customParams: string;
    specialType: number;
    purchaseCouldBeUsedForBuyout: boolean;
    rentCouldBeUsedForBuyout: boolean;
    availableForBuildersClub: boolean;
    canStandOn: boolean;
    canSitOn: boolean;
    canLayOn: boolean;
    isExternalImage: boolean;
    excludeDynamic: boolean;
}
