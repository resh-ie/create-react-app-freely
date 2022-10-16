import {atom} from 'jotai';

import tripData from '../utils/trip-list.json';

export const tripAtom = atom(tripData);