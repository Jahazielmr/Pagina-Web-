/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
  apiKey: "AIzaSyDSe-gWfg9QMzBQspjwHAMZxjVbu79UXvQ",
  authDomain: "awesomemixvol1-acddb.firebaseapp.com",
  databaseURL: "https://awesomemixvol1-acddb.firebaseio.com",
  projectId: "awesomemixvol1-acddb",
  storageBucket: "awesomemixvol1-acddb.appspot.com",
  messagingSenderId: "93783257897"
};

firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';