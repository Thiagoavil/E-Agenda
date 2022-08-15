import { GUID } from "./guid.mod.js";
export class EntidadeBase {
    constructor() {
        this.id = new GUID().gerarNovoId();
    }
}
