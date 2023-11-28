export const CHARS: {
    ABC_XYZ: string;
    abc_xyz: string;
    '1234567890': string;
    '!@#$%^&*()_': string;
    '+.(~)[]?}|{][,-': string;
};
export function randomStr(len?: number, chars?: string[], upperCase?: boolean, separator?: string, separatorSteps?: number[] | number): string;
export function ABC(len?: number, separator?: string, separatorSteps?: number): string;
export function Number(len?: number, separator?: string, separatorSteps?: number): string;
export function abc(len?: number, separator?: string, separatorSteps?: number): string;
export function ABC_abc(len?: number, separator?: string, separatorSteps?: number): string;
export function ABC_abc_123(len?: number, separator?: string, separatorSteps?: number): string;
export function strongPasswd(len?: number, separator?: string, separatorSteps?: number): string;
export function superPasswd(len?: number, separator?: string, separatorSteps?: number): string;
