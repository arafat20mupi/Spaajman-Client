/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    updateProfile,
    GithubAuthProvider,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const axiosPublic = useAxiosPublic();

    const updateProfileData = async (name, email, city, whatsappNumber, skills, photo) => {
        try {
            setLoading(true);

           
            await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

           
            const userRef = axiosPublic; 
            await userRef.post(`/update-profile/${auth.currentUser.uid}`, {
                email: email,
                city: city,
                whatsappNumber: whatsappNumber,
                skills: skills,
            });

            setReload(false);
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const provider = new GoogleAuthProvider();

    const signGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const gitProvider = new GithubAuthProvider();

    const signGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                            setLoading(false);
                        }
                    });
            } else {
                localStorage.removeItem('token');
                setLoading(false);
            }
        });
        return () => {
            unSubscribe();
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        reload,
        logOut,
        signIn,
        signGoogle,
        updateProfileData, 
        signGithub,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
