declare module "flubber" {
    export type SvgPath = string;
    export type Ring = Array<[number, number]>;
    export type Shape = SvgPath | Ring;
    export type Interpolator = (number) => string;
    export type Options = {
        string?: boolean;
        maxSegmentLength?: number;
    };

    export function interpolate(fromShape: Shape, toShape: Shape, options?: Options): Interpolator;

    export function toCircle(fromShape: Shape, x: number, y: number, r: number, options?: Options): Interpolator;

    export function toRect(fromShape: Shape, x: number, y: number, width: number, height: number, options?: Options): Interpolator;

    export function separate(fromShape: Shape, toShapeList: Shape[], options?: Options & { single?: boolean }): Interpolator | Interpolator[];

    export function combine(fromShapeList: Shape[], toShape: Shape, options?: Options & { single?: boolean }): Interpolator | Interpolator[];

    export function interpolateAll(fromShapeList: Shape[], toShapeList: Shape[], options?: Options & { single?: boolean }): Interpolator | Interpolator[];

    export function toPathString(ring: Ring): SvgPath;

    export function splitPathString(path: SvgPath): SvgPath[];
}
