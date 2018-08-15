// import { Action } from '@ngrx/store';
// import { SectionTypes } from '@app/cv/generated-cv/generated-cv.component';

// export const CV_KEY = 'CV';

// export enum CvActionTypes {
//     UPDATE_CV = '[CV] Update',
//     // CHANGE_LANGUAGE = '[Settings] Change Language',
//     // CHANGE_THEME = '[Settings] Change Theme',
//     // CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
//     // CHANGE_ANIMATIONS_PAGE = '[Settings] Change Animations Page',
//     // CHANGE_ANIMATIONS_PAGE_DISABLED = '[Settings] Change Animations Page Disabled',
//     // CHANGE_ANIMATIONS_ELEMENTS = '[Settings] Change Animations Elements',
//     PERSIST = '[CV] Persist'
// }

// // export type Language = 'en' | 'sk';

// export class ActionCvUpdate implements Action {
//     readonly type = CvActionTypes.UPDATE_CV;

//     constructor(readonly payload: any) { }
// }

// // export class ActionSettingsChangeTheme implements Action {
// //   readonly type = CvActionTypes.CHANGE_THEME;

// //   constructor(readonly payload: { theme: string }) {}
// // }

// // export class ActionSettingsChangeAutoNightMode implements Action {
// //   readonly type = CvActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;

// //   constructor(readonly payload: { autoNightMode: boolean }) {}
// // }

// // export class ActionSettingsChangeAnimationsPage implements Action {
// //   readonly type = CvActionTypes.CHANGE_ANIMATIONS_PAGE;

// //   constructor(readonly payload: { pageAnimations: boolean }) {}
// // }

// // export class ActionSettingsChangeAnimationsPageDisabled implements Action {
// //   readonly type = CvActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;

// //   constructor(readonly payload: { pageAnimationsDisabled: boolean }) {}
// // }

// // export class ActionSettingsChangeAnimationsElements implements Action {
// //   readonly type = CvActionTypes.CHANGE_ANIMATIONS_ELEMENTS;

// //   constructor(readonly payload: { elementsAnimations: boolean }) {}
// // }

// export class ActionCvPersist implements Action {
//   readonly type = CvActionTypes.PERSIST;

//   constructor(readonly payload: { cv: any }) {}
// }

// export type CvActions =
//     | ActionCvUpdate
//     | ActionCvPersist
//     // | ActionSettingsChangeTheme
//     // | ActionSettingsChangeAnimationsPage
//     // | ActionSettingsChangeAnimationsPageDisabled
//     // | ActionSettingsChangeAnimationsElements
//     // | ActionSettingsChangeAutoNightMode;

// // export const NIGHT_MODE_THEME = 'BLACK-THEME';

// const sectionTypes = SectionTypes;

// export const initialState: CvState = {
//     header: {
//         fullName: 'Mateusz Tondos',
//         image: '',
//         resources: [
//             {
//                 link: 'tondi.pl',
//                 icon: 'fas fa-globe-americas'
//             },
//             {
//                 link: 'github.com/tondi',
//                 icon: 'fab fa-github'
//             },
//             {
//                 link: 'linkedin.com/in/mtondos',
//                 icon: 'fab fa-linkedin-in'
//             },
//             {
//                 link: 'tondi.pl',
//                 icon: 'fas fa-globe-americas'
//             },
//             {
//                 link: 'github.com/tondi',
//                 icon: 'fab fa-github'
//             },
//             {
//                 link: 'linkedin.com/in/mtondos',
//                 icon: 'fab fa-linkedin-in'
//             }
//         ]
//     },
//     main: {
//         sections: [
//             {
//                 name: 'Experience',
//                 objects: [
//                     {
//                         type: sectionTypes.WithTimespan,
//                         name: 'Frontend Developer',
//                         description: `Dec2017-present: UsingAngular5, Sass &amp; Typescript to deliver
                            // hi-end shop app for internatonal sports company`,
//                         timespan: 'Jun 2017 - present',
//                         timespanValue: '1yr 3mos',
//                     }

//                 ]
//             },
//             {
//                 name: "Skills",
//                 objects: [
//                     {
//                         name: 'Javascript',
//                         proficiency: 'Advanced',
//                         description: 'ES6+, Typescript, Angular, three.js, mnode.js, socket.io, WebGL (HTML Canvas)'
//                     }
//                 ]
//             }
//         ]
//     },
//     footer: {
//         sections: [
//             {
//                 name: 'Interests',
//                 description: 'Guitar, piano, running'
//             },
//             {
//                 name: 'environment',
//                 description: 'ES6, Typescript, Angular'
//             }
//         ],
//         consent:
// `Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a
// Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
// osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
// oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)`
//     }
// };

// export const selectorCv = state => state.cv;

// export function cvReducer(
//     state: CvState = initialState,
//     action: CvActions
// ): CvState {
//     switch (action.type) {
//         case CvActionTypes.UPDATE_CV:
//         // case CvActionTypes.CHANGE_LANGUAGE:
//         // case CvActionTypes.CHANGE_THEME:
//         // case CvActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
//         // case CvActionTypes.CHANGE_ANIMATIONS_PAGE:
//         // case CvActionTypes.CHANGE_ANIMATIONS_ELEMENTS:
//             return { ...state,  [action.payload.path]: action.payload.value };

//         // case CvActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
//         //     return {
//         //         ...state,
//         //         pageAnimations: false,
//         //         pageAnimationsDisabled: action.payload.pageAnimationsDisabled
//         //     };

//         default:
//             return state;
//     }
// }

// export interface CvState {
//
// }

import { Action, combineReducers } from '@ngrx/store';
import {
    createFormGroupState,
    formGroupReducer,
    FormGroupState
} from 'ngrx-forms';

export interface FormValue {
    firstName: string;
    lastName: string;
    email: string;
    sex: string;
    favoriteColor: string;
    employed: boolean;
    notes: string;
}

export interface State {
    simpleForm: {
        formState: FormGroupState<FormValue>;
        submittedValue: FormValue | undefined;
    };
}

export class SetSubmittedValueAction implements Action {
    static readonly TYPE = 'simpleForm/SET_SUBMITTED_VALUE';
    readonly type = SetSubmittedValueAction.TYPE;
    constructor(public submittedValue: FormValue) {}
}

export const FORM_ID = 'simpleForm';

export const INITIAL_STATE = createFormGroupState<FormValue>(FORM_ID, {
    firstName: '',
    lastName: '',
    email: '',
    sex: '',
    favoriteColor: '',
    employed: false,
    notes: ''
});

const reducers = combineReducers<State['simpleForm'], any>({
    formState(s = INITIAL_STATE, a: Action) {
        return formGroupReducer(s, a);
    },
    submittedValue(s: FormValue | undefined, a: SetSubmittedValueAction) {
        switch (a.type) {
            case SetSubmittedValueAction.TYPE:
                return a.submittedValue;

            default:
                return s;
        }
    }
});

export function reducer(s: State['simpleForm'], a: Action) {
    return reducers(s, a);
}
