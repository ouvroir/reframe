
// Does not contain rotation ie. 3:4
// Ref wikipédia https://en.wikipedia.org/wiki/Aspect_ratio_(image)
const ratioList = [
    '18:5', //Super Ultrawide, Ultra-WideScreen 3.6
    '16:9', // HD video standard; American & British digital broadcast TV standard
    '14:9', // Used to create an acceptable picture on both 4:3 and 16:9 televisions 
    '13:6', // Commonly used in modern smartphones
    '11:8', // Academy standard film aspect ratio
    '5:4', // Early televisions, also large (4×5 and 8×10) and medium format (so-called 6×7) still photography
    '5:3', // Commonly used in early 2010s smartphones
    '4:3', // Traditional television & computer monitor standard, also classic 35 mm film standard
    '3:2', // Commonly used in late 2000s smartphones, Classic 35 mm still photographic film
    '1:1' // medium format still cameras. Used in some social networks. 
]

export const findOptimalRatio = (width: number, height: number): string => {
    const disposition = width > height ? 'landscape' : 'portrait';
    const ratio = width / height;

    let optimal: string = ''
    let prevRatioDiff = Infinity;

    ratioList.forEach((r: string) => {
        let optW, optH
        if (disposition === 'landscape') {
            optW = parseInt(r.split(':')[0]);
            optH = parseInt(r.split(':')[1]);
        } else {
            optW = parseInt(r.split(':')[1]);
            optH = parseInt(r.split(':')[0]);
        }

        const optR = optW / optH;

        const ratioDiff = Math.abs(ratio - optR);
        if (ratioDiff < prevRatioDiff) {
            prevRatioDiff = ratioDiff;
            optimal = `${optW}:${optH}`;
        }
    })

    return optimal
}

export function getFractionsFromRatios(ratios: string[]) {
    const prct = ratios.map(r => {
        const w = parseInt(r.split(':')[0]);
        const h = parseInt(r.split(':')[1]);

        return (w * 100) / h
    })

    const total = prct.reduce((sum, e) => sum + e, 0)

    return prct.map(p => (p) / total)
}

// export class Ratio {
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }

//     getComparableRatio(): string {
//         return `${this.width}:${this.height}`;
//     }
// }

// export class Image {
//     width: number;
//     height: number;
//     ratio: Ratio;

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//         this.ratio = new Ratio(width, height);
//     }

//     getComparableRatio(): string {
//         return this.ratio.getComparableRatio();
//     }
// }