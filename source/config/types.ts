export interface GetResponse {
    responseCode: number;
}

export interface GetObjResponse<T> extends GetResponse {
    entity: T | undefined;
}

type name = { english: string; japanese: string; chinese: string; french: string } | undefined;
type base = { HP: number; Attack: number; Defense: number; SpAttack: number; SpDefense: number; Speed: number };
export type Pokemon = { id: string; name: name; type: string[]; base: base; image: string } | undefined;
