import { PointColorer } from 'scatter-gl/dist/scatter_gl';

export class StaticGLScatterplotColorController {


    public static get_sparsity_colorer( colorScale: any, sparsityList: number[] ): PointColorer {
        return (i, selectedIndices, hoverIndex) => { 
            return colorScale( sparsityList[i] );   
        }
    }

}