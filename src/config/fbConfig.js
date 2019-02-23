import 'firebase/firestore';
import 'firebase/auth';

import * as key from './key';

import firebase from 'firebase/app';

const config = key.default;

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 