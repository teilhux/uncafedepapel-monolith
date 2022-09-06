import { Block } from './block.js';
export class ImgBlock extends Block {
    constructor(src, altText = 'No hay texto alterno disponible') {
        super('img', '', { src, altText });
    }
}
