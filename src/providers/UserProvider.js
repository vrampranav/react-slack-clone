import React, { Component, createContext } from 'react'
import { auth, createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
    state = initialUserState;
    async componentDidMount() {
        // Will be triggered whenever we sign out from sign in and vice versa
        auth.onAuthStateChanged(async (userAuth) => {
            console.log(userAuth);
            if (userAuth) {
                const userRef = await createOrGetUserProfileDocument(userAuth);
                console.log(userRef);
                userRef.onSnapshot(snapshot => {
                    // console.log('Snapshot', snapshot);
                    // console.log('Snapshot Data', snapshot.data);
                    this.setState({
                        user: { uid: snapshot.id, ...snapshot.data() }
                    })
                })
            }
        });
    }
    render() {
        return <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    }
}

export default UserProvider;