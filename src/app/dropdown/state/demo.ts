export interface Demo {
    dataValue: string;
    dataText: string;
}

export interface JsonModel {
    JSon0: Demo[];
    JSon1: Demo[];
}

export interface ManikJSonResponse {
    ManikJSon: JsonModel[];
}

export function createDemo(value: any, text: any): Demo{
    return { dataValue: value, dataText: text};
}