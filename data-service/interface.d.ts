export interface IHash<T> {
    [key: string]: T;
}


export interface IAssetPair {
    amountAsset: string;
    priceAsset: string;
}

export interface IKeyPair {
    publicKey: string;
    privateKey: string;
}
