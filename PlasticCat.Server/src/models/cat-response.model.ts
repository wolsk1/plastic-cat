export class CatResponse {
    constructor(
        public isSuccess: boolean,
        public messages?: string[]
    ){}
}