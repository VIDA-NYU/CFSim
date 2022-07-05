export class CounterfactualFeatureInstance {

    constructor( 
        public featureName: string, 
        public oldValue: number, 
        public newValue: number, 
        public variation: number){}
    

    // public perturbations: { [attribute: string]: number } = {

    //     'attr1': 1,
    //     'attr2': -1,
    //     'attr3': 1,
    //     'attr4': -1,
    //     'attr5': 1,
    //     'attr6': -1,
    //     'attr7': 1,
    //     'attr8': -1,
    //     'attr9': 1,
    //     'attr10': 1,
    //     'attr11': 1,
    //     'attr12': -1,
    //     'attr13': 1,
    //     'attr14': -1,
    //     'attr15': 1

    // };

}