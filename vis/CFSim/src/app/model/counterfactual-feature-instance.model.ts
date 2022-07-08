export class CounterfactualFeatureInstance {

    constructor( 
        public featureName: string, 
        public oldValue: number, 
        public newValue: number, 
        public variation: number){}
    
    public is_changing(): boolean{
        return this.variation !== 0;
    }

}