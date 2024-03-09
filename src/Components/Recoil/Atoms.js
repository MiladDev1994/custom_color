
import { RecoilState, atom } from 'recoil'
// import { recoilPersist } from 'recoil-persist'
// const { persistAtom } = recoilPersist()


// export const imageDescription: RecoilState<{show: any, data: []}> = atom({
//     key: "imageDescription",
//     default: {
//         show: false,
//         data: []
//     },
// });


// // export const directoryState = atom({
// //     key: 'directoryState',
// //     default: {
// //         baseDirectory: "",
// //         count: "1"
// //     },
// //     effects_UNSTABLE: [persistAtom],
// // })

// // export const userNameState = atom({
// //     key: 'userNameState',
// //     default: "",
// //     effects_UNSTABLE: [persistAtom],
// // })

// export const DataInform: RecoilState<any> = atom({
//     key: 'DataInform',
//     default: {
//         imageTop: "",
//         xmlTop: "",
//         docTop: "",
//         imageDown: "",
//         xmlDown: "",
//         docDown: "",
//     },
// });

// export const ShowStateXml: RecoilState<any> = atom({
//     key: 'ShowStateXml',
//     default: {},
// });

// export const AllRecordState: RecoilState<[]> = atom({
//     key: 'AllRecordState',
//     default: [],
// });

// export const LastIdSeenState = atom({
//     key: 'LastIdSeenState',
//     default: 1,
// })

// export const BaseDirectory: RecoilState<string> = atom({
//     key: 'BaseDirectory',
//     default: "",
// });


// export const DirectorySelectedState: RecoilState<string> = atom({
//     key: 'DirectorySelectedState',
//     default: "",
// });

// export const FilterState: RecoilState<{
//     top?: boolean;
//     down?: boolean;
//     status: string;
//   }> = atom({
//     key: 'FilterState',
//     default: {
//         status: "",
//       }
// });


// export const ImageTopFocusState: RecoilState<number> = atom({
//     key: 'ImageTopFocusState',
//     default: 0,
// });

// export const ImageDownFocusState: RecoilState<number> = atom({
//     key: 'ImageDownFocusState',
//     default: 0,
// });


export const AllRecordState = atom({
    key: 'AllRecordState',
    default: [],
});

export const ChartDataState = atom({
    key: 'ChartDataState',
    default: {},
});

export const ChartLengthState = atom({
    key: 'ChartLengthState',
    default: 0,
});

export const DirectoryValueState = atom({
    key: 'DirectoryValueState',
    default: "",
});

export const PointSelectedData = atom({
    key: 'PointSelectedData',
    default: {
        e0: undefined, 
        e1: undefined, 
        e4: undefined, 
        e2: undefined, 
        e3: undefined, 
        e5: undefined, 
        e6: undefined, 
        e7: undefined, 
        e8: undefined,
        numsLength: 0
    },
});

export const FilterState = atom({
    key: 'FilterState',
    default: {
        status: "",
      }
});

export const ProgressState = atom({
    key: 'ProgressState',
    default: 100
});

export const ProgressStateAcc = atom({
    key: 'ProgressStateAcc',
    default: 100
});

export const ConfigValueState = atom({
    key: 'ConfigValueState',
    default: {
        healthyDir: "",
        nonHealthyDir: "",
        // programType: null,
        // productType: null,
        influenceTop: "0",
        influenceDown: "0",
        // removeBlueBack: false,
    },
});

export const IntensityFilterState = atom({
    key: 'IntensityFilterState',
    default: [],
});

export const AreaFilterState = atom({
    key: 'َAreaFilterState',
    default: [],
});

export const IntensityChartValueSelected = atom({
    key: 'IntensityChartValueSelected',
    default: [],
});

export const AreaChartValueSelected = atom({
    key: 'AreaChartValueSelected',
    default: [],
});

export const IdealPointMatris = atom({
    key: 'IdealPointMatris',
    default: {},
});

export const FilesPathState = atom({
    key: 'FilesPathState',
    default: {},
});




