import { auth, db } from './setup';


export function watcherUserChange(callback) {

    return auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            callback({
                id: user.uid,
                email: user.email,
                displayName: user.displayName
            });
        } else {
            console.log('NOT logged in');
            callback(null);
        }
    });
}

export function watchExpenses(callback) {

    const unsub = db
        .collection('expenses')
        .onSnapshot( (snapshot) => {
            const docs = [];
            snapshot.forEach((expense) => {
                const data = expense.data();
                docs.push({...data, id: expense.id});
            })
            callback(docs);    
        });
}